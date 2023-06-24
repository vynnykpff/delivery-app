import {FormItem, InputField, InputFieldNumber} from "../Form.styled.jsx";
import {Controller} from "react-hook-form";

const FormField = ({label, errors, name, control, placeholder, rules, mask, maskChar, addPlaceholder}) => {


	return (
		<FormItem
			label={label}
			validateStatus={errors[name] ? "error" : ""}
			help={errors[name] && errors[name].message}
		>
			{
				mask
					? <Controller
						name={name}
						control={control}
						rules={rules}
						defaultValue=""
						render={({field}) => (
							<InputFieldNumber
								{...field}
								mask={mask}
								maskChar={maskChar}
								placeholder={placeholder}
								className={errors[name] ? "error" : ""}/>
						)}
					/>
					: <Controller
						name={name}
						control={control}
						rules={rules}
						defaultValue=""
						render={({field}) => (
							<InputField {...field} placeholder={addPlaceholder ? addPlaceholder : placeholder}/>
						)}
					/>
			}
		</FormItem>
	);
};

export default FormField;