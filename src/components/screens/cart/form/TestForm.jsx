import {FormBlock, FormItem, InputField, InputFieldNumber, OrderBlock, SendButton, TotalPrice} from "./Form.styled.jsx";
import NumberFormat from "../../../../utils/number-format.js";
import {useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import {Select} from "antd";

const TestForm = () => {
	const {arrayProducts} = useSelector((state) => state.products);
	const totalCount = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);

	const {
		handleSubmit,
		reset,
		control,
		formState: {errors, isValid},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<FormBlock onFinish={handleSubmit(onSubmit)} layout="vertical" initialValues={{layout: "vertical"}}>
			<FormItem
				label="Name"
				validateStatus={errors.userName ? "error" : ""}
				help={errors.userName && errors.userName.message}
			>
				<Controller
					name="userName"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Required field",
						},
					}}
					defaultValue=""
					render={({field}) => (
						<InputField {...field} placeholder="Input name"/>
					)}
				/>
			</FormItem>
			<FormItem
				label="Email"
				validateStatus={errors.userEmail ? "error" : ""}
				help={errors.userEmail && errors.userEmail.message}
			>
				<Controller
					name="userEmail"
					control={control}
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
					defaultValue=""
					render={({field}) => (
						<InputField  {...field} placeholder="Input email"/>
					)}
				/>
			</FormItem>
			<FormItem
				label="Phone"
				validateStatus={errors.userPhone ? "error" : ""}
				help={errors.userPhone && errors.userPhone.message}
			>
				<Controller
					name="userPhone"
					control={control}
					rules={{
						required: {
							value: true,
							message: "Required field",
						},
						validate: (value) => {
							const unmaskedValue = value.replace(/[^0-9]/g, ""); // Удаляем все символы, кроме цифр
							if (unmaskedValue.length < 12) {
								return "Incorrect number. The number should be fully filled";
							}
							return true;
						},
					}}
					defaultValue=""
					render={({field}) => (
						<InputFieldNumber
							{...field} mask="+38 (099) 999-99-99"
							placeholder="+38 (___) ___-__-__"
							maskChar="_"
							className={errors.userPhone ? "error" : ""}/>
					)}
				/>
			</FormItem>
			<FormItem
				label="Address"
				validateStatus={errors.userAddress ? "error" : ""}
				help={errors.userAddress && errors.userAddress.message}
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
						<InputField {...field} placeholder="Input address"/>
					)}
				/>
			</FormItem>

			<OrderBlock>
				<TotalPrice>{NumberFormat("ru-RU", {style: "currency", currency: "UAH"}, totalCount)}</TotalPrice>
				<SendButton type="primary" htmlType="submit" disabled={!isValid}>
					Submit
				</SendButton>
			</OrderBlock>
		</FormBlock>
	);
};

export default TestForm;
