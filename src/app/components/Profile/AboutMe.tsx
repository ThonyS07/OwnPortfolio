import React from "react";
import Photo from "@/assets/img/Mask group.png";
import Image from "next/image";
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Experience from "./Experience";
import ProfileCards from "./ProfileCards";
import { TextB1 } from "@/app/format/BoldTypography";

const AboutMe = () => {
	return (
		<div className='flex flex-col w-full items-center sm:my-[48px] md:my-[64px] xl:my-[56px]'>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px] w-full items-center'>
				<div className='mb-[32px] flex flex-col items-center'>
					<TextL1>Quien soy</TextL1>
					<HeaderBl5>Sobre mí</HeaderBl5>
				</div>
				<ProfileCards />
			</div>
			<div className='flex flex-col w-full justify-center items-center'>
				<div className='flex w-full mb-[32px]  justify-center items-center'>
					<TextBl1>Mi experiencia como UX</TextBl1>
				</div>
				<div className='flex '>
					<Experience />
				</div>
			</div>
			<div className='flex flex-col w-full justify-center items-center mb-[56px]'>
				<TextBl1>Mis habilidades blandas</TextBl1>
				<div className='mt-[32px] '>
					<SoftSkills />
				</div>
			</div>
			<div className='flex flex-col w-full justify-center items-center'>
				<TextBl1>Mis habilidades duras</TextBl1>
				<div className='mt-[32px] max-[768px]:mb-[40px] min-[768px]:mb-[56px]'>
					<HardSkills />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
