import { TextB1 } from "@/app/format/BoldTypography";
import { TextR3 } from "@/app/format/RegularTypography";
import React from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import { ProjectCardProps } from "@/Props/ProjectsCardProps";
import { LabelBlue } from "../Labels/Label";
import Link from "next/link";

const ProjectsCard = ({
	titulo,
	tags,
	text,
	buttonText,
	image,
	buttonLink
}: ProjectCardProps) => {
	return (
		<div className='flex flex-col items-start w-[280px] h-[465px] p-[27px] rounded-[8px] shadow-[4px_4px_20px_0_#4b506b] bg-blanco dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c]'>
			<div className='mb-[24px]'>
				<Image
					src={image}
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
				<TextB1>{titulo}</TextB1>
			</div>
			<div className='flex flex-wrap mb-[16px] gap-2'>
				{tags.map((tag, i) => (
					<div key={i}>
						<LabelBlue>{tag}</LabelBlue>
					</div>
				))}
			</div>
			<div className='mb-[16px]'>
				<TextR3>{text}</TextR3>
			</div>
			<div>
				<Link href={buttonLink}>
					<Button size='l'>{buttonText}</Button>
				</Link>
			</div>
		</div>
	);
};

export default ProjectsCard;
