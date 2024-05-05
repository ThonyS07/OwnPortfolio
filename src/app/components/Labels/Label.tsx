import { TextR3 } from "@/app/format/RegularTypography";
import React from "react";

export const LabelBlue = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[24px] flex flex-row justify-center items-center gap-0.5 px-2 py-[5px] rounded-[12px] bg-[#ebf6ff] border-1 border-[ #5db9ff]'>
			<p className='text-[#15476d] font-normal text-[14px] leading-[20px]  text-left tracking-normal '>
				{children}
			</p>
		</div>
	);
};

export const LabelGreen = ({children}: {children: React.ReactNode}) => {
	return (
		<div className='h-[24px] flex flex-row justify-center items-center gap-0.5 px-2 py-[5px] rounded-[12px] bg-[#f6fff6] border-1 border-[ #83e281]'>
			<p className='text-[#158212] font-normal text-[14px] leading-[20px]  text-left tracking-normal '>
				{children}
			</p>
		</div>
	);
};
export const LabelGrey = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[24px] flex flex-row justify-center items-center gap-0.5 px-2 py-[5px] rounded-[12px] bg-[ #e6e6e6] border-1 border-[ #9f9f9f]'>
			<p className='text-[#464646] font-normal text-[14px] leading-[20px]  text-left tracking-normal '>
				{children}
			</p>
		</div>
	);
};
export const LabelRed = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[24px] flex flex-row justify-center items-center gap-0.5 px-2 py-[5px] rounded-[12px] bg-[ #ffeeef] border-1 border-[ #d64751]'>
			<p className='text-[#6e1b20] font-normal text-[14px] leading-[20px]  text-left tracking-normal '>
				{children}
			</p>
		</div>
	);
};
export const LabelYellow = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[24px] flex flex-row justify-center items-center gap-0.5 px-2 py-[5px] rounded-[12px] bg-[ #fffded] border-1 border-[  #ffe74c]'>
			<p className='text-[#a7972e] font-normal text-[14px] leading-[20px]  text-left tracking-normal '>
				{children}
			</p>
		</div>
	);
};
export const LabelPurple = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[24px] flex flex-row justify-center items-center gap-0.5 px-2 py-[5px] rounded-[12px] bg-[#e9dffc] border-1 border-[ #be9ff6]'>
			<p className='text-[#784dc7] font-normal text-[14px] leading-[20px]  text-left tracking-normal '>
				{children}
			</p>
		</div>
	);
};
