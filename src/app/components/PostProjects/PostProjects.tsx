import { initialValues as formikInitialValues } from "@/app/schemas/formikProjectValues";
import postProjectSchema from "@/app/schemas/PostProjectSchema";
import { Projects } from "@prisma/client";
import { Formik, Form} from "formik";

import React from "react";
import { FormInput } from "./FormInput";
import FormTextarea from "./FormTextarea";

const PostProjects: React.FC<Projects> = () => {
	const initialValues = formikInitialValues;
	const validationSchema = postProjectSchema;
	const handleFormChange = (
		event: React.ChangeEvent<HTMLFormElement>,
		values: Projects
	) => {};
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={() => {}}>
				{({ isSubmitting, errors, values }) => (
					<div>
						<Form>
							<div className=''>
								<h1>Agrega un nuevo proyecto</h1>
							</div>
							<div>
								<FormInput
									label='Title'
									error={errors.title}
									name='title'
									placeholder='Title'
								/>
							</div>
							<div>
								<FormTextarea
									label='Abstract'
									error={errors.abstract}
									name='abstract'
									placeholder='Abstract'
								/>
							</div>
							<div>
								<FormInput
									label='Title'
									error={errors.title}
									name='title'
									placeholder='Title'
								/>
							</div>
							<div>
								<FormInput
									label='Title'
									error={errors.title}
									name='title'
									placeholder='Title'
								/>
							</div>
							<div>
								<FormInput
									label='Title'
									error={errors.title}
									name='title'
									placeholder='Title'
								/>
							</div>
							<div>
								<FormInput
									label='Title'
									error={errors.title}
									name='title'
									placeholder='Title'
								/>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default PostProjects;
