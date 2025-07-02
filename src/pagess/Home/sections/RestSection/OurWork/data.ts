export interface IProject {
	icon: string;
	link: string;
	title: string;
	description: string;
	images: string[];
}

export const projects: IProject[] = [
	{
		icon: "/images/beatslot/bs.svg",
		link: "https://beatslot.io",
		title: "Beatslot",
		description:
			"A digital marketplace for beatmakers to share and sell their beats, with future plans to expand into a social network for musicians.",
		images: ["/images/beatslot/bs1.svg", "/images/beatslot/bs2.svg"],
	},
	{
		icon: "/images/nook/nook.svg",
		link: "https://ourpool.app",
		title: "Nook",
		description:
			"Nook streamlines property management tasks and facilitates thorough tenant background checks, ensuring a secure and efficient rental process.",
		images: ["/images/nook/nook-1.svg", "/images/nook/nook-2.svg"],
	},
	{
		icon: "/images/crafter.svg",
		link: "https://usecrafter.com",
		title: "Crafter",
		description:
			"Transform the way your engineering and product teams collaborate, automating task creation and using natural language to gather project insights.",
		images: ["/images/crafter-1.svg", "/images/crafter-2.svg"],
	},
	{
		icon: "/images/mm/mm.svg",
		link: "https://mockmate.io",
		title: "MockMate",
		description:
			"A random JSON mock data generator for developers, helping to create structured and realistic test data.",
		images: ["/images/mm/mm1.svg", "/images/mm/mm2.svg"],
	},

	{
		icon: "/images/ourpool/op.svg",
		link: "https://ourpool.app",
		title: "OurPool",
		description:
			"A matchmaking platform for young people of marriable age, featuring weekly shortlists and curated interactions.",
		images: ["/images/ourpool/op-1.png"],
	},
	{
		icon: "/images/common/c.svg",
		link: "https://commoncolors.io",
		title: "Common",
		description:
			"A tool for generating beautiful color gradients and palettes, perfect for designers and developers.",
		images: ["/images/common/c-1.png"],
	},
];
