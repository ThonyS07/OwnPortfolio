"use client";

import React, { useEffect } from "react";

import ProjectsCard from "../Cards/ProjectsCard";
import { useProjects } from "@/context/ProjectContext";



const ProjectsWrapper = () => {
	const { projects, loadProjects } = useProjects();

	useEffect(() => {
		loadProjects();
	}, [loadProjects]);
	console.log(projects)

	return (
		<div className='flex xl:w-[90%] sm:flex-col md:flex-row sm:gap-[24px]  lg:gap-[40] xl:gap-[68px] flex-wrap items-center  justify-center'>
			{projects.map((project) => (
				<ProjectsCard key={project.id} project={project} />
			))}
			
		</div>
	);
};

export default ProjectsWrapper;
