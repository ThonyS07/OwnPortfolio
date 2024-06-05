"use client";

import React, { useEffect, useState } from "react";

import ProjectsCard from "../Cards/ProjectsCard";
import { useProjects } from "@/context/ProjectContext";
import { Projects } from "@prisma/client";
import { useProjectStore } from "@/store/projectStore";

const ProjectsWrapper: React.FC = () => {
	const projectsArr = useProjectStore(state => state.projects
	)
	console.log("type", typeof projectsArr);
	const fetchProjects = useProjectStore((state) => state.fetchProjects);

	

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	console.log("console del wrapper, proyecto", projectsArr);

	return (
		<div className='flex xl:w-[90%] sm:flex-col md:flex-row sm:gap-[24px]  lg:gap-[40] xl:gap-[68px] flex-wrap items-center  justify-center'>
			{projectsArr && projectsArr.length > 0 ? (
				projectsArr.map((project: Projects) => (
					<ProjectsCard key={project.id} project={project} />
				))
			) : (
				<p>No projects available.</p>
			)}
		</div>
	);
};

export default ProjectsWrapper;
