export interface star {
	id: number;
	size: number;
	x: number;
	y: number;
	opacity: number;
	animationDuration: number;
}

export interface meteor {
	id: number;
	size: number;
	x: number;
	y: number;
	delay: number;
	animationDuration: number;
}

export interface skill {
	name: string;
	level: number;
	category: string;
}

export interface project {
	id: number;
	title: string;
	description: string;
	referee: string;
	contact: string;
}

export interface cloud {
	id: number;
	top: string;
	left: string;
	width: string;
	height: string;
	delay: string;
	animationDuration: number;
}
