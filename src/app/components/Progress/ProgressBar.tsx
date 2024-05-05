import React from "react";
import ProgressLevelOne from "./ProgressLevelOne";
import ProgressLevelTwo from "./ProgressLevelTwo";
import ProgressLevelThree from "./ProgressLevelThree";
import ProgressLevelFour from "./ProgressLevelFour";
import { TextSB2 } from "@/app/format/SemiBoldTypography";

const ProgressBar = ({ level, text }: { level: number; text: string }) => {
	return (
		<div className='sm:w-[328px] sm:h-[56px] md:w-[680px]  lg:w-[564px] xl:w-[744px] h-[60px]'>
			<div className="mb-4">
				<TextSB2>{text}</TextSB2>
				
			</div>
			{level === 1 ? ( 
				<ProgressLevelOne />
			) : level === 2 ? (
				<ProgressLevelTwo />
			) : level === 3 ? (
				<ProgressLevelThree />
			) : (
				<ProgressLevelFour />
			)}
		</div>
	);
};

export default ProgressBar;
