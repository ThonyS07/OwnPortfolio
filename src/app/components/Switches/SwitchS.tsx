import React, { useState } from "react";
import classNames from "classnames";
import { SwitchProps } from "@/Props/SwitchProps";
const SwitchS: React.FC<SwitchProps> = ({ children, onClick }) => {
	const [isSelected, setIsSelected] = useState(false);

	const click = () => {
		setIsSelected(isSelected === true ? false : true);
	};

	return (
	
			<label
				htmlFor='check'
				className={classNames(
					"flex w-[46px] h-[28px] rounded-full items-center bg-disable transition-all duration-500 cursor-pointer relative",
					{
						"bg-green": isSelected,
					}
				)}>
				<input
					id='check'
					type='checkbox'
					className='sr-only'
					onClick={onClick}
					onChange={click}
				/>
				<span
					className={classNames(
						"h-[24px] w-[24px] ml-0.5  bg-blanco rounded-full transition-all duration-500 shadow-2xl justify-center items-center flex peer-checked:ml-7",
						{
							"ml-7": isSelected,
						}
					)}>
					{children}
				</span>
			</label>
		
	);
};

export default SwitchS;
