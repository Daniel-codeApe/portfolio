// import { ArrowRight } from "lucide-react";
import type { project } from "../lib/types";

const projects: project[] = [
	{
		id: 1,
		title: "Backend developer",
		description:
			"Worked as a backend developer in Cyberlark studio for around 8 months, mainly worked in a CRM project using Typescript and AWS services. The project is held on github, so I'm experienced in github actions like CI/CD. My main contributions were building & debugging Conversation & Campaign APIs, each integrated with AWS services such as DynamoDB, Lambda and API gateway. Conversation APIs also used external TWilio APIs to achieve its ability of sending and receiving SMSs.",
		referee: "David Dai",
		contact: "https://www.youtube.com/channel/UCykMC_fzatQPcbun0VYG3YA",
	},
	{
		id: 2,
		title: "Web developer",
		description:
			"Part of the team that developed the official website for Australian Urban Growers (as graduate program). The website was mainly developed using wordpress, along with Firefox for mailing functions. During the experience, I was frequently communicating with client for their enquiries and feedbacks so I've gained many experience in client communication",
		referee: "Christopher Fullon",
		contact: "chris@australianurbangrowers.com",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-cent">
					Previous <span className="text-primary">Positions</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are my previous working experiences. Each of them have greatly
					improved my coding skills and my ability to work in team.
				</p>

				<div className="flex flex-col gap-8">
					{projects.map((project, key) => {
						return (
							<div key={key} className="group bg-card rounded-lg shadow-xs">
								<h1 className="text-xl font-bold tracking-tight text-primary">
									{project.title}
								</h1>
								<p className="text-secondary font-semibold text-left py-4 px-6 text-lg">
									{project.description}
								</p>
								<div className="text-left mt-1 px-6">
									<span className="text-sm text-muted-foreground">
										Referee: {project.referee}
									</span>
								</div>
								<div className="text-left mt-1 px-6">
									<span className="text-sm text-muted-foreground">
										Contact: {project.contact}
									</span>
								</div>
							</div>
						);
					})}
				</div>

				{/* <div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/Daniel-codeApe"
					>
						Checkout My Github <ArrowRight size={16} />
					</a>
				</div> */}
			</div>
		</section>
	);
};
