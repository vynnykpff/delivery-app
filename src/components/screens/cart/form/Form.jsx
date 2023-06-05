import {useForm} from "react-hook-form";
import {FieldInput, FieldTitle, FormBlock} from "./Form.styled.jsx";
import CartInfo from "../products/cart-item/cart-info/CartInfo.jsx";

const Form = () => {
	const {register, handleSubmit, watch, formState: {errors}} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<FormBlock onSubmit={handleSubmit(onSubmit)}>
			<FieldTitle>Name</FieldTitle>
			<FieldInput placeholder="Your name"/>
			<FieldTitle>Email</FieldTitle>
			<FieldInput placeholder="Your email"/>
			<FieldTitle>Phone</FieldTitle>
			<FieldInput type={"number"} placeholder="Your phone"/>
			<FieldTitle>Address</FieldTitle>
			<FieldInput placeholder="Your address"/>

			{/*<input defaultValue="test" {...register("example")} />*/}
			{/*<input {...register("exampleRequired", { required: true })} />*/}
			{/*<input type="submit" />*/}
			<CartInfo/>
		</FormBlock>
	);
};

export default Form;

// import { useForm } from "react-hook-form";
//
// 	const { register, handleSubmit, watch, formState: { errors } } = useForm();
// 	const onSubmit = data => console.log(data);
//
// 	console.log(watch("example")); // watch input value by passing the name of it
//
// 	return (
// 		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			{/* register your input into the hook by invoking the "register" function */}
// 			<input defaultValue="test" {...register("example")} />
//
// 			{/* include validation with required or other standard HTML validation rules */}
// 			<input {...register("exampleRequired", { required: true })} />
// 			{/* errors will return when field validation fails  */}
// 			{errors.exampleRequired && <span>This field is required</span>}
//
// 			<input type="submit" />
// 		</form>
// 	);
// }