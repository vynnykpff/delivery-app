import {useForm} from "react-hook-form";
// import {FieldError, FieldInput, FieldTitle, FormBlock, SubmitButton} from "./Form.styled.jsx";

const FormElement = () => {
	const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
		mode: "onBlur"
	});
	const onSubmit = data => {
		alert(JSON.stringify(data));
		reset();
	};


	return (
		<FormBlock onSubmit={handleSubmit(onSubmit)}>
			<TextField style={{backgroundColor: '#fff', borderRadius: 20, color: '#f00'}} id="outlined-basic" label="Outlined" variant="outlined" />
			{/*<TextField style={{backgroundColor: '#fff', borderRadius: 25, padding: 20}} id="filled-basic" label="Filled" variant="filled" />*/}
			<FieldTitle>Name</FieldTitle>
			<FieldInput  {...register("userName", {required: "Required field"})} placeholder="Your name"/>
			<FieldError>{errors?.userName && <p>{errors?.userName?.message || "Error setting up the name"}</p>}</FieldError>
			<FieldTitle>Email</FieldTitle>
			<FieldInput {...register("userEmail", {required: true})} type="email" placeholder="Your email"/>
			<FieldError>{errors?.userEmail &&
				<p>{errors?.userEmail?.message || "Error setting up the email"}</p>}
			</FieldError>
			<FieldTitle>Phone</FieldTitle>
			<FieldInput {...register("userPhone", {
				required: true,
				minLength: {
					value: 10,
					message: "Incorrect number. The minimum length of the number is 10"
				},
				maxLength: {
					value: 13,
					message: "Incorrect number. The maximum length of the number is 13"
				},
			})} type={"number"} placeholder="Your phone"/>
			<FieldError>{errors?.userPhone &&
				<p>{errors?.userPhone?.message || "Error setting up the phone"}</p>}
			</FieldError>
			<FieldTitle>Address</FieldTitle>
			<FieldInput {...register("userAddress", {required: true})} placeholder="Your address"/>
			<FieldError>{errors?.userAddress &&
				<p>{errors?.userAddress?.message || "Error setting up the address"}</p>}
			</FieldError>

			<SubmitButton onSubmit={handleSubmit(onSubmit)} disabled={!isValid} type="submit"/>
			<CartInfo/>
		</FormBlock>
	);
};

export default FormElement;
