import { Projects } from "@prisma/client";

export type CreateProject = Omit<Projects, "id" | "createdAt" | "updatedAt">;

export type UpdateProject = Partial<CreateProject>;
