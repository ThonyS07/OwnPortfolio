import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css"

export const HeaderL1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<h1 className={`font-light ${styles.text4xl} text-left tracking-normal`}>
			{children}
		</h1>
	);
};
export const HeaderL2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.text3xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.text2xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.text1xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.textxl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderL6: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.textl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.textm} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.texts} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.textxs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.text2xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextL5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-light ${styles.text3xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
