import { TextB1 } from "@/app/format/BoldTypography";
import { TextR3 } from "@/app/format/RegularTypography";
import React from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import { LabelBlue } from "../Labels/Label";
import Link from "next/link";
import { Projects } from "@prisma/client";


const ProjectsCard = ({
	project
}: {project: Projects}) => 
	{
		return (
			<div
				key={project.id}
				className='flex flex-col items-start w-[280px] h-[465px] p-[27px] rounded-[8px] shadow-[4px_4px_20px_0_#4b506b] bg-blanco dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c]'>
				<div className='mb-[24px]'>
					<Image
						src={project.images[0]}
						alt='projectImage'
						width={0}
						height={0}
						style={{
							width: "226px",
							height: "161px",
							aspectRatio: "1/1",
							objectFit: "cover",
						}}
					/>
				</div>
				<div className='mb-[16px]'>
					<TextB1>{project.title}</TextB1>
				</div>
				<div className='flex flex-wrap mb-[16px] gap-2'>
					{project.tags.map((tag, i) => (
						<div key={i}>
							<LabelBlue>{tag}</LabelBlue>
						</div>
					))}
				</div>
				<div className='mb-[16px]'>
					<TextR3>{project.abstract}</TextR3>
				</div>
				<div>
					<Link href={project.repoLink ?? "/"}>
						<Button size='l'>Ver repositorio</Button>
					</Link>
					{project.deployLink &&
					<Link href={project.deployLink ?? "/"}>
						<Button size='l'>Ver más</Button>
					</Link>
					}
				</div>
			</div>
		);
	};

export default ProjectsCard;
