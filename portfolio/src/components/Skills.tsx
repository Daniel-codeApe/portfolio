import { useState } from "react";
import type { skill } from "../lib/types";
import { cn } from "../lib/utils";

const skills: skill[] = [
	{ name: "DynamoDB", level: 90, category: "Backend" },
	{ name: "Lambda", level: 80, category: "Backend" },
	{ name: "API Gateway", level: 80, category: "Backend" },
	{ name: "S3", level: 75, category: "Backend" },
	{ name: "PostgreSQL", level: 70, category: "Backend" },
	{ name: "MongoDB", level: 70, category: "Backend" },
	{ name: "Express", level: 80, category: "Backend" },
	{ name: "Node.js", level: 90, category: "Backend" },
	{ name: "React", level: 85, category: "Frontend" },
	{ name: "Wordpress", level: 85, category: "Frontend" },
	{ name: "Tailwind CSS", level: 70, category: "Frontend" },
	{ name: "Next.js", level: 70, category: "Frontend" },
	{ name: "TypeScript", level: 95, category: "Utility" },
	{ name: "JavaScript", level: 95, category: "Utility" },
	{ name: "English Communication", level: 85, category: "Utility" },
	{ name: "Github", level: 90, category: "Utility" },
	{ name: "Docker", level: 70, category: "Utility" },
	{ name: "VS Code", level: 95, category: "Utility" },
];

const categories = ["All", "Backend", "Frontend", "Utility"];

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredSkills = skills.filter(
		(skill) => activeCategory === "All" || skill.category === activeCategory
	);

	return (
		<section id="skills" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					My <span className="text-primary">Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category, key) => {
						return (
							<button
								key={key}
								onClick={() => setActiveCategory(category)}
								className={cn(
									"px-5 py-2 rounded-full transition-colors duration-300 capitalize",
									activeCategory === category
										? "bg-primary text-primary-foreground"
										: "bg-secondary/70 text-foreground hover:bd-secondary"
								)}
							>
								{category}
							</button>
						);
					})}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => {
						return (
							<div
								key={key}
								className="bg-card p-6 rounded-lg shadow-xs card-hover"
							>
								<div className="text-left mb-4">
									<h3 className="font-semibold text-lg">{skill.name}</h3>
								</div>
								<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
									<div
										className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
										style={{ width: skill.level + "%" }}
									/>
								</div>
								<div className="text-right mt-1">
									<span className="text-sm text-muted-foreground">
										{skill.level}%
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
