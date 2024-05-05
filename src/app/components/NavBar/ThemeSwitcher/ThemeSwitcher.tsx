// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import SwitchS from "@/app/components/Switches/SwitchS";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeChange = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	if (!mounted) return null;

	return (
		<div>
			<SwitchS onClick={handleThemeChange}>
				{theme === "dark" ? <MoonIcon /> : <SunIcon />}
			</SwitchS>
		</div>
	);
};

export default ThemeSwitcher;
