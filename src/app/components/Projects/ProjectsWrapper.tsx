import React from "react";
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";
import ProjectsCard from "../Cards/ProjectsCard";
// import viaje from '@/assets/img/viaje.svg'
import banca from "@/assets/img/Appbancaria.png";
import seguros from "@/assets/img/Webparaseguros.png";
import animalista from "@/assets/img/Webparaveterinarias.png";
import transporte from "@/assets/img/Appparataxis.png";
import ecommerce from "@/assets/img/Ecommerce.png";
import chatbot from "@/assets/img/ChatBotparadelivery.png";

const ProjectsWrapper = () => {
	return (
		<div className='flex xl:w-[90%] sm:flex-col md:flex-row sm:gap-[24px]  lg:gap-[40] xl:gap-[68px] flex-wrap items-center  justify-center'>
			<ProjectsCard
				titulo='App bancaria'
				tags={["UX", "UI", "Referencia"]}
				text='Después de algunos años trabajando para 2 bancos, decidí tomar de referencia mi experiencia para poner en práctica todo lo aprendido.'
				buttonText='Conoce más'
				image={banca}
				buttonLink='https://www.figma.com/proto/18hCQUPmcXH7dpGCVBv6GR/Portfolio?type=design&node-id=429-2022&t=F0NCXdbOJjYMX4Gb-1&scaling=min-zoom&page-id=104%3A497&mode=design'
			/>
			<ProjectsCard
				titulo='Web para seguros'
				tags={["UX", "UI", "Referencia"]}
				text='Una nueva versión de mi trabajo en una importante aseguradora Peruana; explicando el proceso de como fue construida.'
				buttonText='Conoce más'
				image={seguros}
				buttonLink='https://www.figma.com/proto/18hCQUPmcXH7dpGCVBv6GR/Portfolio?type=design&node-id=429-2055&t=16JuwJ6JvDtohuAn-1&scaling=min-zoom&page-id=104%3A497&mode=design'
			/>
			<ProjectsCard
				titulo='Web para veterinarias'
				tags={["UX", "UI", "Personal"]}
				text='Mi amor a los animales y las visitas a veterinarios de mis mascotas me llevaron a crear una plataforma para veterinarias y animalistas.'
				buttonText='Conoce más'
				image={animalista}
				buttonLink='https://www.figma.com/proto/18hCQUPmcXH7dpGCVBv6GR/Portfolio?type=design&node-id=429-1989&t=Afv7r4qGCqTT95ua-1&scaling=min-zoom&page-id=104%3A497&mode=design'
			/>
			<ProjectsCard
				titulo='App para taxis'
				tags={["UX", "UI", "Referencia"]}
				text='Mis inicios en el mundo del UX fueron muy enriquecedores, este es un proyecto real del 2019, con mejoras basadas en mi experiencia.'
				buttonText='Conoce más'
				image={transporte}
				buttonLink='https://www.figma.com/proto/18hCQUPmcXH7dpGCVBv6GR/Portfolio?type=design&node-id=429-1512&t=XWJBpX0N9vxDVK65-1&scaling=min-zoom&page-id=104%3A497&mode=design'
			/>
			<ProjectsCard
				titulo='Ecommerce'
				tags={["UI", "Personal"]}
				text='Estoy a nada de iniciar un nuevo emprendimiento, con este proyecto busco facilidad al momento de ofrecer los productos a mis clientes.'
				buttonText='Conoce más'
				image={ecommerce}
				buttonLink='https://www.figma.com/proto/18hCQUPmcXH7dpGCVBv6GR/Portfolio?type=design&node-id=429-1910&t=TK7Es958hrgkvlDm-1&scaling=min-zoom&page-id=104%3A497&mode=design'
			/>
			<ProjectsCard
				titulo='ChatBot para delivery'
				tags={["Conversacional", "Personal"]}
				text='He tenido experiencia creando ChatBots, me parece importante refrescar mis conocimientos dándole vida a uno nuevo en mi portafolio.'
				buttonText='Conoce más'
				image={chatbot}
				buttonLink='https://www.figma.com/proto/18hCQUPmcXH7dpGCVBv6GR/Portfolio?type=design&node-id=429-2121&t=gPKJPvxFFgcxJyJD-1&scaling=min-zoom&page-id=104%3A497&mode=design'
			/>
		</div>
	);
};

export default ProjectsWrapper;
