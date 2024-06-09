import { initialValues as formikInitialValues } from "@/app/schemas/formikProjectValues";
import postProjectSchema from "@/app/schemas/PostProjectSchema";
import { Projects } from "@prisma/client";
import { Formik, Form, useFormik } from "formik";

import React from "react";

const PostProjects: React.FC<Projects> = () => {
	const initialValues = formikInitialValues;
	const validationSchema = postProjectSchema;
	const handleFormChange = (
		event: React.ChangeEvent<HTMLFormElement>,
		values: Projects
	)=> {}
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={() => {}}>
				{({ isSubmitting, errors, values }) => (
					<div>
						<Form onChange={(event) => handleFormChange(event, values)}></Form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default PostProjects;
