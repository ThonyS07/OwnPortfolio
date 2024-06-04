import { create } from "zustand";
import { Projects } from "@prisma/client";

export const useProjectStore = create((set) => ({
    projects: [],
    setProjects: (projects: Projects) => set({ projects }),
}))