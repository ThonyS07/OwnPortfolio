import React from "react";
import styles from "./progress.module.css";
import { ProgressProps } from "@/Props/ProgressProps";
import { useTheme } from "next-themes";

const ProgressWLabel: React.FC<ProgressProps> = ({ value, size }) => {
	const grosor = 0.075 * size;
	const radius = (size - grosor) / 2;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * value) / 100;
	const { theme, setTheme } = useTheme();
	const color = theme === "dark" ? "#ffffff" : "#1a1d12";

	return (
		<div className=' flex justify-center items-center w-max '>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={grosor}
					className='fill-none stroke-[#f0f3ff] dark:stroke-[#30344a] '
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={grosor}
					className={`fill-none stroke-[#8249ef]  stroke-line ${styles.circleProgress}`}
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
					}}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
				<text
					x={size / 2}
					y={size / 2}
					dy='0.35em'
					textAnchor='middle'
					dominantBaseline='middle'
					fill={`${color}`}
					className='text-center w-7 h-5 text-sm m-2 font-bold'>
					{value} %
				</text>
			</svg>
		</div>
	);
};

export default ProgressWLabel;
