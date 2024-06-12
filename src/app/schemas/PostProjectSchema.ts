import * as Yup from "yup";

const postProjectSchema = Yup.object().shape({
	title: Yup.string()
		.min(3, "Debe poseer más de 3 caracteres")
		.required("Campo requerido")
		.max(50, "Debe poseer menos de 50 caracteres")
		.required("Campo requerido"),
	abstract: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(250, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	description: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.required("Campo requerido"),
	tags: Yup.array().of(Yup.string()).required("Campo requerido"),
	// tags: Yup.array().required("Campo requerido"),
	images: Yup.array().required("Campo requerido"),
	repoLink: Yup.string().required("Campo requerido"),
	deployLink: Yup.string(),
});

export default postProjectSchema;
