import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css";

export const ButtonXL: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-xl  `}>
			{children}
		</p>
	);
};
export const ButtonL: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-lg `}>
			{children}
		</p>
	);
};
export const ButtonM: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} flex text-left tracking-normal text-base `}>
			{children}
		</p>
	);
};
export const ButtonS: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-sm `}>
			{children}
		</p>
	);
};
export const ButtonXS: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-xs `}>
			{children}
		</p>
	);
};

