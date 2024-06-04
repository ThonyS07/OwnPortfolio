import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
	try {
		const { projects } = prisma
		const projectsArr = await projects.findMany();
		console.log("este es un proyecto",projectsArr);
		return NextResponse.json(projectsArr);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({
				message: error.message,
			});
		}
	}
};

export const POST = async (request: Request) => {
	try {
		const { title, abstract, description, images, repoLink, deployLink } =
			await request.json();
		if (!title || !abstract || !description || !images || !repoLink)
			throw new Error("Complete fields");
		const newProject = await prisma.projects.create({
			data: {
				title,
				abstract,
				description,
				images,
				repoLink,
				deployLink,
			},
		});
		return NextResponse.json(newProject);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({
				message: error.message,
			});
		}
	}
};
