import { Mail, MapPin, Phone } from "lucide-react";
// import { cn } from "../lib/utils";

export const ContactSection = () => {
	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					Get in <span className="text-primary">Touch</span>{" "}
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Feel free to reach out if you have any questions or have something to
					discuss
				</p>

				{/* <div className="grid grid-cols-1 md: grid-cols-2 gap-12"> */}
				<div className="space-y-8">
					<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

					<div className="flex justify-center gap-8">
						<div className="flex items-start space-x-4">
							<div className="p-3 rounded-full bg-primary/10">
								<Mail className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h4 font-medium>Email</h4>
								<a
									href="mailto:liangdaniel688@gmail.com"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									liangdaniel688@gmail.com
								</a>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="p-3 rounded-full bg-primary/10">
								<Phone className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h4 font-medium>Phone</h4>
								<a
									href="tel:+61450192363"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									+61450192363
								</a>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="p-3 rounded-full bg-primary/10">
								<MapPin className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h4 font-medium>Address</h4>
								<a className="text-muted-foreground hover:text-primary transition-colors">
									Indooroopilly, Brisbane, Australia
								</a>
							</div>
						</div>
					</div>

					{/* <div className="bg-card p-8 rounded-lg shadow-xs">
							<h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

							<form className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-2"
									>
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus: ring-primary"
										placeholder="Daniel..."
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Your Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus: ring-primary"
										placeholder="something@email.com"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Your Message
									</label>
									<textarea
										id="message"
										name="message"
										required
										className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus: ring-primary resize-none"
										placeholder="Hello..."
									/>
								</div>

                                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}></button>

							</form>
						</div> */}
				</div>
			</div>
			{/* </div> */}
		</section>
	);
};
