import { create } from "zustand";
import { Projects } from "@prisma/client";


interface State {
	projects: Projects[];
	fetchProjects: () => Promise<void>;
}

export const useProjectStore = create<State>((set, get) => {
	return {
		projects: [],
		fetchProjects: async () => {
			try {
				const res = await fetch("api/projects");
				if (!res.ok) {
					throw new Error(`Failed to fetch projects: ${res.statusText}`);
				}
				console.log("esto es res", res)
				const data = await res.json();
				
				set({ projects: data });
				
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		},
	};
});
