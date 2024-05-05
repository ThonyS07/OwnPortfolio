import React, { useState } from "react";
import classNames from "classnames";
import { SwitchProps } from "@/Props/SwitchProps";

const SwitchL: React.FC<SwitchProps> = ({ children, onClick }) => {
	const [isSelected, setIsSelected] = useState(false);

	const click = () => {
		setIsSelected(isSelected === true ? false : true);
	};
	
	return (
		<label
			htmlFor='check'
			className={classNames(
				"flex w-54 h-8 rounded-full items-center bg-disable transition-all duration-500 cursor-pointer relative",
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
					"h-7 w-7 ml-0.5  bg-blanco rounded-full transition-all duration-500 shadow-2xl justify-center items-center flex peer-checked:ml-4",
					{
						"ml-4": isSelected,
					}
				)}>
				{children}
			</span>
		</label>
	);
};

export default SwitchL;
