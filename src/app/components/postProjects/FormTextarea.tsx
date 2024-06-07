import React from "react";
import { Field, ErrorMessage } from "formik";
import { Textarea } from "@nextui-org/react";
import styles from "./FormTextarea.module.css";
/*necesario para actualizar repo*/
type FormTextareaProps = {
	label: string; // specify the type of the label prop
	error: boolean;
	name: string;
	placeholder: string;
};
export const FormTextarea: React.FC<FormTextareaProps> = ({
	label,
	error,
	name,
	placeholder,
}) => {
	return (
		<div className='bg-mora2 w-[420px] h-[55px] top-[328px] left-[503px] rounded-[12px] mb-[5px] mt-[20px]'>
			<Field
				as={Textarea}
				label={label}
				variant='bordered'
				placeholder={`${placeholder}`}
				id={name}
				name={name}
				errorMessage={<ErrorMessage name={name} component='div' />}
				color={error ? "danger" : "success"}
			/>
		</div>
	);
};

export default FormTextarea;
