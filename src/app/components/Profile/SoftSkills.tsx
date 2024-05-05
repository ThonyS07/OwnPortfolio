import React from "react";
import ProgressBar from "../Progress/ProgressBar";

const SoftSkills = () => {
	return (
		<div className='flex  max-[1366px]:flex-col lg:w-[1152px] xl:w-[1512px] flex-row flex-wrap justify-evenly gap-[24px]'>
			<ProgressBar text='Trabajo en equipo' level={3}></ProgressBar>
			<ProgressBar text='Escucha activa' level={4}></ProgressBar>
			<ProgressBar text='Organización' level={3}></ProgressBar>
			<ProgressBar text='Adaptación' level={4}></ProgressBar>
		</div>
	);
};

export default SoftSkills;
