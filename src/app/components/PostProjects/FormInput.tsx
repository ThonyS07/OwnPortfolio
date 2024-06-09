import { Input } from "@nextui-org/input";
import { Field, ErrorMessage } from "formik";

type FormInputProps = {
	label: string; // specify the type of the label prop
	error: string | undefined;
	name: string;
	placeholder: string;
};

export const FormInput: React.FC<FormInputProps> = ({
	label,
	error,
	name,
	placeholder,
}) => {
	return (
		<div className='bg-mora2 w-[420px] h-[55px] top-[328px] left-[503px] rounded-[12px] mb-[5px] mt-[20px]'>
			<Field
				as={Input}
				label={label}
				variant='bordered'
				placeholder={`${placeholder}...`}
				type='text'
				id={name}
				name={name}
				errorMessage={<ErrorMessage name={name} component='div' />}
				color={error ? "danger" : "success"}
			/>
		</div>
	);
};
