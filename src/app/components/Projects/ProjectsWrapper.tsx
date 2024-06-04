"use client";

import React, { useEffect, useState } from "react";

import ProjectsCard from "../Cards/ProjectsCard";
import { useProjects } from "@/context/ProjectContext";
import { Projects } from "@prisma/client";



const ProjectsWrapper = () => {
	// const { projects, loadProjects } = useProjects();
	const [projects, setProjects] = useState<Projects[]>([]);
const loadProjects = async () => {
	const res = await fetch("/api/projects");
	console.log(res);
	const data = await res.json();
	console.log(data);

	setProjects(data);
}
	loadProjects()
	// useEffect(() => {
	// 	console.log("montando use effect del wrapper, proyecto",projects)
	// 	loadProjects();
	// 	console.log("use effect del wrapper, proyecto",projects)
	// }, [loadProjects]);
	console.log("console del wrapper, proyecto",projects)

	return (
		<div className='flex xl:w-[90%] sm:flex-col md:flex-row sm:gap-[24px]  lg:gap-[40] xl:gap-[68px] flex-wrap items-center  justify-center'>
			{projects.map((project) => (
				<ProjectsCard key={project.id} project={project} />
			))}
			
		</div>
	);
};

export default ProjectsWrapper;
