import React from "react";
import { FieldArray, Field, ErrorMessage } from "formik";

interface FormArrayInputProps {
	label: string;
	name: string;
	placeholder: string;
	error?: string[]
}

const FormArrayInput: React.FC<FormArrayInputProps> = ({
	label,
	name,
	placeholder,
	error,
}) => {
	return (
		<div>
			<label>{label}</label>
			<FieldArray name={name}>
				{({ push, remove, form }) => {
					const values = form.values[name];
					return (
						<div>
							{values &&
								values.length > 0 &&
								values.map((value: string, index: number) => (
									<div key={index}>
										<Field
											name={`${name}.${index}`}
											placeholder={placeholder}
										/>
										<button type='button' onClick={() => remove(index)}>
											-
										</button>
										{index === values.length - 1 && (
											<button type='button' onClick={() => push("")}>
												+
											</button>
										)}
									</div>
								))}
							{error && <div className='error'>{error}</div>}
						</div>
					);
				}}
			</FieldArray>
			<ErrorMessage name={name} component='div' className='error' />
		</div>
	);
};

export default FormArrayInput;
