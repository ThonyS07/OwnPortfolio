import { HeaderBl1, HeaderBl2, HeaderBl4 } from "@/app/format/BlackTypography";
import { HeaderL6, TextL1 } from "@/app/format/LightTypography";
import React from "react";

const HomeTitlte = ({ name, lastName}: { name: string, lastName: string }) => {
	return (
		<div className="flex flex-col w-full  m-0 gap-2">
			<div className='md:hidden dark:text-[#fff] text-negro3'>
				<TextL1>Hola, yo soy</TextL1>
			</div>
			<div className='hidden md:flex dark:text-[#fff] text-negro3'>
				<HeaderL6>Hola, yo soy</HeaderL6>
			</div>
			<div className='md:hidden flex flex-row gap-5  dark:text-[#fff] text-negro3'>
				<HeaderBl4>{name}</HeaderBl4>
				<HeaderBl4>{lastName}</HeaderBl4>
			</div>

			<div className='hidden md:flex lg:hidden  flex-col  dark:text-[#fff] text-negro3'>
				<HeaderBl2>{name}</HeaderBl2>
				<HeaderBl2>{lastName}</HeaderBl2>
			</div>

			<div className='hidden lg:flex lg:flex-row  gap-5  dark:text-[#fff] text-negro3'>
				<HeaderBl1>{name}</HeaderBl1>
				<HeaderBl1>{lastName}</HeaderBl1>
			</div>
			<div className='md:hidden text-purple1'>
				<TextL1>UX/UI Designer</TextL1>
			</div>
			<div className='hidden md:flex text-purple1'>
				<HeaderL6>UX/UI Designer</HeaderL6>
			</div>
		</div>
	);
};

export default HomeTitlte;

