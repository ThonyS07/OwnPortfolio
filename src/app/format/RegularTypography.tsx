import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css";

export const HeaderR1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<h1
			className={`font-normal ${styles.text4xl} text-left tracking-normal`}>
			{children}
		</h1>
	);
};
export const HeaderR2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.text3xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.text2xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.text1xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.textxl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderR6: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.textl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.textm} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.texts} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.textxs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.text2xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextR5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-normal ${styles.text3xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
