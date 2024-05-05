import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css";

export const HeaderB1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.text4xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.text3xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.text2xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.text1xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.textxl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderB6: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.textl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.textm} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.texts} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.textxs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.text2xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextB5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} ${styles.text3xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
