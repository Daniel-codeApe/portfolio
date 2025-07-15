import { Code } from "lucide-react";

export const AboutSection = () => {
	return (
		<section id="about" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About <span className="text-primary">Me</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold">
							Looking for further development
						</h3>

						<p className="text-muted-foreground">
							Passionate Junior with over 1 year of experience in real-world
							projects, including a full-fledged website and a CRM household
							application.
						</p>

						<p className="text-muted-foreground">
							Consistently learning new skills and technologies to keep up with
							the rapid evolving IT industry. Always thinking about creating
							efficient solutions to various problems
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								Get in touch
							</a>

							<a
								href="/portfolio/CV.pdf"
								download={"My_CV"}
								className="px-6 py-2 rounded-full c=border border-primary text-primary hover:bg-primary/10 transition-color"
							>
								Download CV
							</a>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-6">
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Web</h4>
									<p className="text-muted-foreground">AUG</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Backend</h4>
									<p className="text-muted-foreground">Cyberlark</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
