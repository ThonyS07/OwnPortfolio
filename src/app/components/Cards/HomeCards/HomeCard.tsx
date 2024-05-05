import { TextB1, TextB3 } from "@/app/format/BoldTypography";
import React from "react";
import HomeIcon from "./HomeIcon";
import PRUEBAicon from "./Icons/FamiliaIcon";
import { TextR2, TextR3 } from "@/app/format/RegularTypography";

const HomeCard = ({
	children,
	text,
	titulo,
}: {
	children: React.ReactNode;
	text: string;
	titulo: string;
}) => {
	return (
		<div className='sm:w-[328px] sm:h-[202px]  md:w-[328px] md:h-[202px] xl:w-[360px] xl:h-[220px] lg:w-[270px] lg:h-[202px]  p-[27px] rounded-[16px] dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c] shadow-[4px_4px_20px_0_#4b506b]'>
			<div>
				<HomeIcon>{children}</HomeIcon>
			</div>
			<div className='my-[16px] flex xl:hidden'>
				<TextB1>{titulo}</TextB1>
			</div>
			<div className=' flex xl:hidden'>
				<TextR3>{text}</TextR3>
			</div>
			<div className='my-[16px] xl:flex hidden'>
				<TextB1>{titulo}</TextB1>
			</div>
			<div className=' xl:flex hidden'>
				<TextR2>{text}</TextR2>
			</div>
		</div>
	);
};

export default HomeCard;
