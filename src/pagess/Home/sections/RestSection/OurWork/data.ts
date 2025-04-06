export interface IProject {
	icon: string;
	link: string;
	title: string;
	description: string;
	images: string[];
}

export const projects: IProject[] = [
	{
		icon: "/images/crafter.svg",
		link: "https://usecrafter.com",
		title: "Crafter",
		description:
			"Transform the way your engineering and product teams collaborate, automating task creation and using natural language to gather project insights.",
		images: ["/images/crafter-1.svg", "/images/crafter-2.svg"],
	},
	{
		icon: "",
		link: "https://mockmate.io",
		title: "MockMate",
		description:
			"A random JSON mock data generator for developers, helping to create structured and realistic test data.",
		images: ["https://mockmate.io/mockmate-preview.png"],
	},
	{
		icon: "",
		link: "https://playport.app",
		title: "Playport",
		description:
			"A seamless playlist conversion tool that lets users transfer their playlists between Spotify, Apple Music, and YouTube Music.",
		images: ["https://playport.app/playport-preview.png"],
	},
	{
		icon: "",
		link: "https://beatslot.io",
		title: "Beatslot",
		description:
			"A digital marketplace for beatmakers to share and sell their beats, with future plans to expand into a social network for musicians.",
		images: ["https://beatslot.io/beatslot-preview.png"],
	},
	{
		icon: "",
		link: "https://ourpool.app",
		title: "OurPool",
		description:
			"A matchmaking platform for young people of marriable age, featuring weekly shortlists and curated interactions.",
		images: ["https://ourpool.app/ourpool-preview.png"],
	},
	{
		icon: "",
		link: "https://steady.app",
		title: "Steady",
		description:
			"A habit-tracking and recovery support app for individuals overcoming addiction, offering daily check-ins and goal-setting features.",
		images: ["https://steady.app/steady-preview.png"],
	},
	{
		icon: "",
		link: "https://commoncolors.io",
		title: "Common",
		description:
			"A tool for generating beautiful color gradients and palettes, perfect for designers and developers.",
		images: ["https://commoncolors.io/common-preview.png"],
	},
];
