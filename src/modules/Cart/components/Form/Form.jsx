import {FormBlock, FormItem, InputField, OrderBlock, SelectField, SendButton, TotalPrice} from "./Form.styled.jsx";
import SetNumberFormat from "../../../../shared/utils/setNumberFormat.js";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from "react";
import {
	requestAddress,
	requestDescriptionWay,
	requestGetWay,
	setFormData,
	setWay
} from "../../../../redux/address/address.slice.js";
import {getDate, getTime} from "../../../../shared/utils/getTimeline.js";
import {removeCoupon, setCoupon, updateOrdersCount} from "../../../../redux/coupons/coupons.slice.js";
import {getRandomValue} from "../../../../shared/utils/getRandomValue.js";
import {resetCount} from "../../../../redux/count-buys/countBuys.slice.js";
import {getDataFromLocalStorage, setDataToLocalStorage} from "../../../../shared/utils/getDataFromLocalStorage.js";
import FormField from "./components/FormField/FormField.jsx";
import FormModalWindow from "./components/FormModalWindow/FormModalWindow.jsx";
import {createData} from "../../../../shared/utils/firebase/createData.js";
import {auth, database} from "../../../../shared/utils/firebase/firebase-config.js";
import {updateData} from "../../../../shared/utils/firebase/updateData.js";

const Form = () => {
	const {arrayCoupons, ordersCount} = useSelector(state => state.coupons);
	const {arrayProducts} = useSelector((state) => state.products);
	const {arrayAddress: address, status, way, descriptionWay} = useSelector(state => state.address);
	const dispatch = useDispatch();
	const [whereWay, setWhereWay] = useState('');
	const [modalActive, setModalActive] = useState(false);
	const [totalCount, setTotalCount] = useState(0);
	const [tempTotalCount, setTempTotalCount] = useState(0)
	const [couponId, setCouponId] = useState(null);
	const [coupons, setCoupons] = useState([]);

	useEffect(() => {
		const summary = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);
		setTotalCount(summary);
		setTempTotalCount(summary);
	}, [arrayProducts]);

	useEffect(() => {
		if (ordersCount === 2) {
			const coupon = {id: uuidv4(), discount: getRandomValue(5, 20)};
			const uniqueCoupons = [...getDataFromLocalStorage("Coupons"), ...arrayCoupons, coupon].filter(
				(value, index, self) =>
					self.findIndex((v) => v.id === value.id) === index
			);
			setDataToLocalStorage("Coupons", uniqueCoupons);
			dispatch(setCoupon(coupon));
			dispatch(updateOrdersCount());
		}
	}, [ordersCount]);

	useEffect(() => {
		setCoupons([...getDataFromLocalStorage("Coupons")])
	}, [arrayCoupons]);

	useEffect(() => {
		dispatch(requestAddress());
	}, [dispatch]);

	const onChange = (value) => {
		dispatch(setWay({where: value, from: whereWay}));
	};

	const {
		handleSubmit,
		reset,
		control,
		formState: {errors, isValid},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = async (data) => {
		const orderData = {
			...data,
			date: getDate(),
			time: getTime(),
			totalPrice: totalCount,
		};

		const userId = auth?.currentUser?.uid;
		const documentRef = await createData(database, `orders-${userId}`, arrayProducts, "order");
		const documentId = documentRef.id;
		await updateData(database, `orders-${userId}`, documentId, "data", orderData);

		if (couponId) {
			dispatch(removeCoupon(couponId));
			const removeLocalStorageCoupon = getDataFromLocalStorage("Coupons").filter(coupon => coupon.id !== couponId);
			setDataToLocalStorage("Coupons", removeLocalStorageCoupon);
		}

		dispatch(setFormData(data));
		dispatch(requestGetWay());
		dispatch(requestDescriptionWay());
		dispatch(updateOrdersCount('update'));
		dispatch(resetCount());

		setModalActive(true);

		reset();
	};

	const getRecountTotalPrice = (value) => {
		let coupon;
		if (arrayCoupons.length) {
			coupon = arrayCoupons.find(coupon => coupon.id === value);
		} else {
			coupon = getDataFromLocalStorage("Coupons")?.find(coupon => coupon.id === value);
		}
		if (coupon) {
			setTotalCount(tempTotalCount - (tempTotalCount * (coupon.discount / 100)));
			setCouponId(coupon.id)
		}
	}

	return (
		<>
			<FormBlock onFinish={handleSubmit(onSubmit)} layout="vertical" initialValues={{layout: "vertical"}}>
				<FormField
					label="Name"
					errors={errors}
					name="userName"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Required field",
						},
					}}
				/>

				<FormField
					label="Email"
					errors={errors}
					name="userEmail"
					control={control}
					placeholder="delivery@gmail.com"
					rules={{
						required: {
							value: true,
							message: "Required field",
						},
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Incorrect email format",
						},
					}}
				/>

				<FormField
					label="Phone"
					errors={errors}
					name="userPhone"
					control={control}
					placeholder="+38 (___) ___-__-__"
					rules={{
						required: {
							value: true,
							message: "Required field",
						},
						validate: (value) => {
							const unmaskedValue = value.replace(/[^0-9]/g, "");
							if (unmaskedValue.length < 12) {
								return "Incorrect number. The number should be fully filled";
							}
							return true;
						},
					}}
					mask="+38 (099) 999-99-99"
					maskChar="_"
				/>

				<FormItem
					label="From"
					validateStatus={errors.userFrom ? "error" : ""}
					help={errors.userFrom && errors.userFrom.message}
					onBlur={(e) => setWhereWay(e.target.value)}
				>
					<Controller
						name="userFrom"
						control={control}
						rules={{
							required: {
								value: true,
								message: "Required field",
							},
						}}
						defaultValue=""
						render={({field}) => (
							<InputField {...field}/>
						)}
					/>
				</FormItem>

				<FormItem
					label="Where"
					validateStatus={errors.userWhere ? "error" : ""}
					help={errors.userWhere && errors.userWhere.message}
				>
					<Controller
						name="userWhere"
						control={control}
						defaultValue=""
						rules={{
							required: {
								value: true,
								message: "Required field",
							},
						}}
						render={({field}) => (
							<SelectField
								allowClear={true}
								{...field}
								showSearch
								onChange={(value) => {
									field.onChange(value);
									onChange(value);
								}}
								optionFilterProp="children"
								filterOption={(input, option) =>
									(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
								}
								options={address.map((item) => ({
									value: item.name,
									label: item.name,
								}))}
							/>
						)}
					/>
				</FormItem>

				<FormItem
					label="Coupons"
					validateStatus={errors.userCoupons ? "error" : ""}
					help={errors.userCoupons && errors.userCoupons.message}
					onBlur={(e) => getRecountTotalPrice(e.target.value)}
				>
					<SelectField
						allowClear={true}
						showSearch
						optionFilterProp="children"
						onChange={getRecountTotalPrice}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						options={coupons.map(coupon => ({value: coupon.id, label: `${coupon.discount}%`}))}
					/>
				</FormItem>

				<OrderBlock>
					<TotalPrice>{SetNumberFormat("ru-RU", {style: "currency", currency: "UAH"}, totalCount)}</TotalPrice>
					<SendButton type="primary" htmlType="submit" disabled={!isValid}>
						Submit
					</SendButton>
				</OrderBlock>
			</FormBlock>

			<FormModalWindow
				modalActive={modalActive}
				setModalActive={setModalActive}
				status={status}
				way={way}
				descriptionWay={descriptionWay}
			/>
		</>
	);
};

export default Form;