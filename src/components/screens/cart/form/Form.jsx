import {FormBlock, FormItem, InputField, OrderBlock, SendButton, TotalPrice} from "./Form.styled.jsx";
import NumberFormat from "../../../../utils/number-format.js";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {Select} from "antd";
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from "react";
import {
	requestAddress,
	requestDescriptionWay,
	requestGetWay,
	setFormData,
	setWay
} from "../../../../store/address/address.slice.js";

import {getDate, getTime} from "../../../../utils/getDate.js";
import {removeCoupon, setCoupon, updateOrdersCount} from "../../../../store/coupons/coupons.slice.js";
import {getRandomValue} from "../../../../utils/getRandomValue.js";
import FormField from "./form-field/FormField.jsx";
import FormModalWindow from "./form-modal-window/FormModalWindow.jsx";

const Form = () => {
	const {arrayCoupons} = useSelector(state => state.coupons);
	const {arrayProducts} = useSelector((state) => state.products);
	const {arrayAddress: address, status, way, descriptionWay} = useSelector(state => state.address);
	// let totalCount = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);
	const dispatch = useDispatch();
	const [whereWay, setWhereWay] = useState('');
	const [modalActive, setModalActive] = useState(false);
	const [totalCount, setTotalCount] = useState(0);
	const [tempTotalCount, setTempTotalCount] = useState(0)
	const [couponId, setCouponId] = useState(null);
	// let totalSum = 0;

	useEffect(() => {
		const summary = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);
		setTotalCount(summary);
		setTempTotalCount(summary);
	}, [arrayProducts]);


	useEffect(() => {
		dispatch(requestAddress());
	}, [dispatch])

	const onChange = (value) => {
		dispatch(setWay({where: whereWay, from: value}))
	};

	const {
		handleSubmit,
		reset,
		control,
		formState: {errors, isValid},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		const storedProducts = JSON.parse(window.localStorage.getItem('Products'));
		// arrayProducts.map(product => totalSum += product.price * product.count);


		if (storedProducts && storedProducts.length > 0) {
			const newProducts = [...storedProducts];
			newProducts.push([...arrayProducts, {...data, date: getDate(), time: getTime(), totalPrice: totalCount}]);
			window.localStorage.setItem('Products', JSON.stringify(newProducts));
		} else {
			window.localStorage.setItem('Products', JSON.stringify([arrayProducts.concat({
				...data,
				date: getDate(),
				time: getTime(),
				totalPrice: totalCount
			})]));
		}

		dispatch(setFormData(data));
		dispatch(requestGetWay());
		dispatch(requestDescriptionWay());
		dispatch(updateOrdersCount('update'));

		if (couponId) {
			console.log('test')
			dispatch(removeCoupon(couponId));
		}

		setModalActive(true);

		reset();
	};

	const getRecountTotalPrice = (value) => {
		const coupon = arrayCoupons.find(coupon => coupon.id === value);
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
					placeholder="Input name"
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
					placeholder="Input email"
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
					label="Address"
					validateStatus={errors.userAddress ? "error" : ""}
					help={errors.userAddress && errors.userAddress.message}
					onBlur={(e) => setWhereWay(e.target.value)}
				>
					<Controller
						name="userAddress"
						control={control}
						rules={{
							required: {
								value: true,
								message: "Required field",
							},
						}}
						defaultValue=""
						render={({field}) => (
							<InputField {...field} placeholder="Where"/>
						)}
					/>
					<Select
						style={{marginTop: 20}}
						showSearch
						placeholder="From"
						optionFilterProp="children"
						onChange={onChange}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						options={address.map(item => ({value: item.name, label: item.name}))}
					/>
				</FormItem>


				<FormItem
					label="Coupons"
					validateStatus={errors.userCoupons ? "error" : ""}
					help={errors.userCoupons && errors.userCoupons.message}
					onBlur={(e) => getRecountTotalPrice(e.target.value)}
				>
					<Select
						showSearch
						placeholder="Coupons"
						optionFilterProp="children"
						onChange={getRecountTotalPrice}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						options={arrayCoupons.map(coupon => ({value: coupon.id, label: `${coupon.discount}%`}))}
					/>
				</FormItem>
				<OrderBlock>
					<TotalPrice>{NumberFormat("ru-RU", {style: "currency", currency: "UAH"}, totalCount)}</TotalPrice>
					<SendButton type="primary" htmlType="submit" disabled={!isValid}>
						Submit
					</SendButton>
				</OrderBlock>
			</FormBlock>

			<FormModalWindow modalActive={modalActive} setModalActive={setModalActive} status={status} way={way}
			                 descriptionWay={descriptionWay}/>
		</>
	);
};


export default Form;