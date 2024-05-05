import React from "react";
import styles from "./progress.module.css";
import { ProgressProps } from "@/Props/ProgressProps";
import { useTheme } from "next-themes";
import { TextSB2, TextSB3 } from "@/app/format/SemiBoldTypography";
import {
	HeaderB6,
	HeaderB4,
	HeaderB3,
	HeaderB2,
} from "@/app/format/BoldTypography";

const ProgressWLabel: React.FC<ProgressProps> = ({ value, size, text }) => {
	const grosor = 0.075 * size;
	const radius = (size - grosor) / 2;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * value) / 100;
	const { theme, setTheme } = useTheme();
	const colorText = theme === "dark" ? "#f0f3ff" : "#8F94B0";
	const colorValue = theme === "dark" ? "#ffffff" : "#1A1D2C";

	const classText =
		size === 64
			? " leading-5 font-semibold text-left tracking-normal text-[14px]  "
			: size === 152
			? " leading-5 font-semibold text-left tracking-normal text-[14px]  "
			: size === 200 ? " leading-6 font-bold text-left tracking-normal text-[16px]   " : " leading-6 font-semibold text-left tracking-normal text-[16px]  "
	const classValue =
		size === 64
			? " leading-[20px] font-bold text-left tracking-normal text-[14px]  "
			: size === 152
			? " leading-[32px] font-bold text-left tracking-normal text-[24px]  "
			: size === 200
			? " leading-[40px] font-bold text-left tracking-normal text-[32px]  "
			: " leading-[44px] font-bold text-left tracking-normal text-[36px]  ";

	return (
		<div className=' flex justify-center items-center w-max '>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={grosor}
					className='fill-none leading- stroke-[#f0f3ff] text-mora8  dark:stroke-[#30344a] '
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={grosor}
					className={`fill-none stroke-[#8249ef]   stroke-line ${styles.circleProgress}`}
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
					}}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
				<text
					x={size / 2}
					y={(size * 2.7) / 7}
					dy='0.35em'
					textAnchor='middle'
					dominantBaseline='middle'
					fill={`${colorText}`}
					className={`${classText}`}>
					{text}
				</text>
				<text
					x={size / 2}
					y={(size * 3.7) / 7}
					dy='0.35em'
					textAnchor='middle'
					dominantBaseline='middle'
					fill={`${colorValue}`}
					className={`${classValue}`}>
					{value}%
				</text>
			</svg>
		</div>
	);
};

export default ProgressWLabel;
