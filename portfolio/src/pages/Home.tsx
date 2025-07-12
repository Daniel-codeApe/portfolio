import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		setIsDarkMode(document.documentElement.classList.contains("dark"));

		const observer = new MutationObserver(() => {
			setIsDarkMode(document.documentElement.classList.contains("dark"));
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);
	return (
		<div className="min-h-screen text-foreground overflow-x-hidden">
			{/* Theme Toggle */}
			<ThemeToggle />

			{/* Background */}
			<StarBackground isDarkMode={isDarkMode} />

			{/* Navbar */}
			<Navbar />
		</div>
	);
}
