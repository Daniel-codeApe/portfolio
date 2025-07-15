import { useEffect, useState } from "react";
import type { cloud } from "../lib/types";

export const CloudBackground = ({ isDarkMode }: { isDarkMode: boolean }) => {
	if (isDarkMode) {
		return null;
	}

	const [clouds, setClouds] = useState<cloud[]>([]);

	useEffect(() => {
		generateClouds();

		const handleResize = () => {
			generateClouds();
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const generateClouds = () => {
		const cloudArray = [];
		for (let i = 0; i < 5; i++) {
			cloudArray.push({
				id: i,
				top: `${Math.random() * 80}%`,
				left: `${Math.random() * 80}%`,
				width: `${100 + Math.random() * 150}px`,
				height: `${50 + Math.random() * 60}px`,
				delay: `${Math.random() * 30}s`,
				animationDuration: Math.random() * 4 + 2,
			});
		}
		setClouds(cloudArray);
	};

	return (
		<div
			className="fixed inset-0 overflow-hidden pointer-events-none z-0"
			style={{
				background:
					"linear-gradient(to bottom right, #f0faff, #b3e5fc, #81d4fa)",
			}}
		>
			{/* Sun Ray */}
			<div
				className="absolute inset-0 rays"
				style={{
					background:
						"repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
					backgroundSize: "200% 200%",
					animationDuration: "20s",
				}}
			/>

			{/* Clouds */}
			{clouds.map((cloud: cloud) => (
				<div
					key={cloud.id}
					className="absolute rounded-full cloud-drift"
					style={{
						top: cloud.top,
						left: cloud.left,
						width: cloud.width,
						height: cloud.height,
						background: "rgba(255,255,255,0.3)",
						filter: "blur(20px)",
						animationDelay: cloud.delay,
						animationDuration: `${cloud.animationDuration}s`,
					}}
				/>
			))}
		</div>
	);
};
