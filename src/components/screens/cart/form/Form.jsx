import {FormBlock, FormItem, InputField, OrderBlock, SelectField, SendButton, TotalPrice} from "./Form.styled.jsx";
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
import {removeAllProducts, removeProduct} from "../../../../store/products/products.slice.js";
import { useNavigate } from "react-router-dom";
import {history} from "../../../../shared/constants/routes.js";


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

	const navigate = useNavigate();

	// const [cardProducts, setCardProducts] = useState(null);

	console.log(arrayProducts);

	useEffect(() => {
		// window.localStorage.setItem('CartProducts', JSON.stringify(arrayProducts));
		// setCardProducts(JSON.parse(window.localStorage.getItem('CartProducts')));

		const summary = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);
		setTotalCount(summary);
		setTempTotalCount(summary);
	}, [arrayProducts]);

	useEffect(() => {
		if (ordersCount === 2) {
			dispatch(setCoupon({id: uuidv4(), discount: getRandomValue(5, 20)}));
			dispatch(updateOrdersCount());
		}
	}, [ordersCount]);

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
		const storedProducts = JSON.parse(window.localStorage.getItem('HistoryProducts'));

		if (storedProducts && storedProducts.length > 0) {
			const newProducts = [...storedProducts];
			newProducts.push([...arrayProducts, {...data, date: getDate(), time: getTime(), totalPrice: totalCount}]);
			console.log('PRODUCTS:', arrayProducts);
			window.localStorage.setItem('HistoryProducts', JSON.stringify(newProducts));
		} else {
			window.localStorage.setItem('HistoryProducts', JSON.stringify([arrayProducts.concat({
				...data,
				date: getDate(),
				time: getTime(),
				totalPrice: totalCount
			})]));
		}

		window.localStorage.setItem('CartProducts', JSON.stringify([]));

		dispatch(setFormData(data));
		dispatch(requestGetWay());
		dispatch(requestDescriptionWay());
		dispatch(updateOrdersCount('update'));
		dispatch(removeAllProducts());

		navigate(history);




		if (couponId) {
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
					// rules={{
					// 	required: {
					// 		value: true,
					// 		message: "Required field",
					// 	},
					// }}
				/>

				<FormField
					label="Email"
					errors={errors}
					name="userEmail"
					control={control}
					placeholder="delivery@gmail.com"
					// rules={{
					// 	required: {
					// 		value: true,
					// 		message: "Required field",
					// 	},
					// 	pattern: {
					// 		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					// 		message: "Incorrect email format",
					// 	},
					// }}
				/>

				<FormField
					label="Phone"
					errors={errors}
					name="userPhone"
					control={control}
					placeholder="+38 (___) ___-__-__"
					// rules={{
					// 	required: {
					// 		value: true,
					// 		message: "Required field",
					// 	},
					// 	validate: (value) => {
					// 		const unmaskedValue = value.replace(/[^0-9]/g, "");
					// 		if (unmaskedValue.length < 12) {
					// 			return "Incorrect number. The number should be fully filled";
					// 		}
					// 		return true;
					// 	},
					// }}
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
						// rules={{
						// 	required: {
						// 		value: true,
						// 		message: "Required field",
						// 	},
						// }}
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
					onBlur={(e) => setWhereWay(e.target.value)}
				>
					<Controller
						name="userWhere"
						control={control}
						// rules={{
						// 	required: {
						// 		value: true,
						// 		message: "Required field",
						// 	},
						// }}
						defaultValue=""
						render={({field}) => (
							<SelectField
								allowClear={true}
								{...field}
								showSearch
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

			{/*<FormModalWindow*/}
			{/*	modalActive={modalActive}*/}
			{/*	setModalActive={setModalActive}*/}
			{/*	status={status}*/}
			{/*	way={way}*/}
			{/*	descriptionWay={descriptionWay}*/}
			{/*/>*/}
		</>
	);
};

export default Form;