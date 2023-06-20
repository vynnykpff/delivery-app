import {FormBlock, FormItem, InputField, InputFieldNumber, OrderBlock, SendButton, TotalPrice} from "./Form.styled.jsx";
import NumberFormat from "../../../../utils/number-format.js";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {Select} from "antd";
import {useEffect, useState} from "react";
import {
	requestAddress,
	requestDescriptionWay,
	requestGetWay,
	setFormData,
	setWay
} from "../../../../store/address/address.slice.js";
import ModalWindow from "../../../ui/modal-window/ModalWindow.jsx";
import {
	CloseButton,
	DescriptionOfWay,
	MapImage,
	MapInfoBlock,
	OrderTitle,
	TitleWay
} from "../../../ui/modal-window/ModalWindow.styled.jsx";
import {GrFormClose} from "react-icons/gr";
import {getDate, getTime} from "../../../../utils/getDate.js";

const Form = () => {
	const {arrayProducts} = useSelector((state) => state.products);
	const {arrayAddress: address, status, way, descriptionWay} = useSelector(state => state.address);
	const totalCount = arrayProducts.reduce((acc, {price, count}) => acc + price * count, 0);
	const dispatch = useDispatch();
	const [whereWay, setWhereWay] = useState('');
	const [modalActive, setModalActive] = useState(false);

	let totalSum = 0;

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
		arrayProducts.map(product => totalSum += product.price * product.count);


		if (storedProducts && storedProducts.length > 0) {
			const newProducts = [...storedProducts];
			newProducts.push([...arrayProducts, {...data, date: getDate(), time: getTime(), totalPrice: totalSum}]);
			window.localStorage.setItem('Products', JSON.stringify(newProducts));
		} else {
			window.localStorage.setItem('Products', JSON.stringify([arrayProducts.concat({...data, date: getDate(), time: getTime(), totalPrice: totalSum})]));
		}

		dispatch(setFormData(data));
		dispatch(requestGetWay());
		dispatch(requestDescriptionWay());
		setModalActive(true);
		reset();
	};

	return (
		<>
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
				<OrderBlock>
					<TotalPrice>{NumberFormat("ru-RU", {style: "currency", currency: "UAH"}, totalCount)}</TotalPrice>
					<SendButton type="primary" htmlType="submit" disabled={!isValid}>
						Submit
					</SendButton>
				</OrderBlock>
			</FormBlock>

			<ModalWindow active={modalActive} setActive={setModalActive}>
				{status ?
					<>
						<CloseButton onClick={() => setModalActive(false)}><GrFormClose/></CloseButton>
						<MapInfoBlock>
							<OrderTitle>The order has been processed</OrderTitle>
							<TitleWay>Way from <span
								style={{color: 'var(--accent-color)'}}>{descriptionWay?.route?.locations[1]?.adminArea5}</span> to <span
								style={{color: 'var(--accent-color)'}}>{descriptionWay?.route?.locations[0]?.adminArea5}</span></TitleWay>
							<MapImage
								src={way}/>
							<DescriptionOfWay>
								<p>Distance: <span
									style={{color: 'var(--accent-color)'}}>{Math.round(descriptionWay?.route?.distance * 100) / 100}</span> km
								</p>
								<p>Delivery Time: <span
									style={{color: 'var(--accent-color)'}}>{descriptionWay?.route?.formattedTime}</span></p>
							</DescriptionOfWay>
						</MapInfoBlock>
					</>
					: <div>Loading</div>
				}
			</ModalWindow>
		</>
	);
};

export default Form;