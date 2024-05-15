import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

interface Params {
	params: {
		id: string;
	};
}

export const GET = async (request: Request, { params }: Params) => {
	try {
		const project = await prisma.projects.findFirst({
			where: {
				id: params.id,
			},
		});
		return NextResponse.json(project);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({
				message: error.message,
			});
		}
	}
};

export const DELETE = async (request: Request, { params }: Params) => {
	try {
		const deletedProject = await prisma.projects.delete({
			where: {
				id: params.id,
			},
		});
		if (!deletedProject)
			return NextResponse.json({ message: "Project not found" });

		return NextResponse.json(deletedProject);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2025") {
				return NextResponse.json(
					{
						message: "Project not found",
					},
					{
						status: 404,
					}
				);
			}
			return NextResponse.json({
				message: error.message,
			});
		}
	}
};

export const PUT = async (request: Request, { params }: Params) => {
	try {
		const { title, description, images, repoLink, deployLink } =
			await request.json();
		const project = await prisma.projects.update({
			where: {
				id: params.id,
			},
			data: {
				title,
				description,
				images,
				repoLink,
				deployLink,
			},
		});
		return NextResponse.json(project);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2025") {
				return NextResponse.json(
					{
						message: "Project not found",
					},
					{
						status: 404,
					}
				);
			}
			return NextResponse.json({
				message: error.message,
			});
		}
	}
};
