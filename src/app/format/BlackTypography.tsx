import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css";

export const HeaderBl1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.text4xl} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.text3xl} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.text2xl} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.text1xl} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.textxl} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const HeaderBl6: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.textl} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.textm} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.texts} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.textxs} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.text2xs} text-left tracking-normal `}>
			{children}
		</p>
	);
};
export const TextBl5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.blackFont} ${styles.text3xs} text-left tracking-normal `}>
			{children}
		</p>
	);
};
