import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css";

export const HeaderSB1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<h1
			className={`font-semibold ${styles.text4xl} text-left tracking-normal`}>
			{children}
		</h1>
	);
};
export const HeaderSB2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.text3xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.text2xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.text1xl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.textxl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const HeaderSB6: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.textl} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB1: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.textm} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB2: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.texts} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB3: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.textxs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB4: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.text2xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
export const TextSB5: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`font-semibold ${styles.text3xs} text-left tracking-normal`}>
			{children}
		</p>
	);
};
