"use client";

import { createContext, useState, useContext, useCallback } from "react";
import { CreateProject, UpdateProject } from "@/interfaces/Project";
import { Projects } from "@prisma/client";


export const ProjectsContext = createContext<{
	projects: Projects[];
	loadProjects: () => Promise<void>;
	createProject: (Projects: CreateProject) => Promise<void>;
	deleteProjects: (id: number) => Promise<void>;
	selectedProjects: Projects | null;
	setSelectedProjects: (Projects: Projects | null) => void;
	UpdateProject: (id: number, Projects: UpdateProject) => Promise<void>;
}>({
	projects: [],
	loadProjects: async () => {},
	createProject: async (Projects: CreateProject) => {},
	deleteProjects: async (id: number) => {},
	selectedProjects: null,
	setSelectedProjects: (Projects: Projects | null) => {},
	UpdateProject: async (id: number, Projects: UpdateProject) => {},
});

export const useProjects = () => {
	const context = useContext(ProjectsContext);
	if (!context) {
		throw new Error("useProjects must be used within a ProjectsProvider");
	}
	return context;
};

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
	const [projects, setProjects] = useState<Projects[]>([]);
	const [selectedProjects, setSelectedProjects] = useState<Projects | null>(null);

	const loadProjects = useCallback(async () => {
		
		const res = await fetch("app/api/projects");
		const data = await res.json();
	
		setProjects(data);
	},[])

	async function createProject(Projects: CreateProject) {
		const res = await fetch("/api/projects", {
			method: "POST",
			body: JSON.stringify(Projects),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const newProjects = await res.json();
		setProjects([...projects, newProjects]);
	}

	async function deleteProjects(id: number) {
		const res = await fetch("/api/projects/" + id, {
			method: "DELETE",
		});
		const data = await res.json();
		setProjects(projects.filter((Projects) => Projects.id !== String(id)));
	}

	async function UpdateProject(id: number, Projects: UpdateProject) {
		const res = await fetch("/api/projects/" + id, {
			method: "PUT",
			body: JSON.stringify(Projects),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		setProjects(projects.map((Projects) => (Projects.id === String(id) ? data : Projects)));
	}

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				loadProjects,
				createProject,
				deleteProjects,
				selectedProjects,
				setSelectedProjects,
				UpdateProject,
			}}>
			{children}
		</ProjectsContext.Provider>
	);
};
