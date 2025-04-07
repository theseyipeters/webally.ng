interface Item {
	label: string;
	href: string;
}

interface Office {
	location: string;
	address: string;
}

export interface FooterItem {
	title: string;
	itemList?: Item[];
	offices?: Office[];
}

export const data: FooterItem[] = [
	{
		title: "Contact",
		itemList: [
			{
				label: "13, Onikepo Akande Street, Lekki, Lagos, Nigeria",
				href: "/about",
			},
		],
	},
	{
		title: "Sitemap",
		itemList: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Services",
				href: "/services",
			},
			{
				label: "Work",
				href: "/work",
			},
			{
				label: "About",
				href: "/about",
			},
			{
				label: "Contact",
				href: "/contact",
			},
		],
	},
	{
		title: "Socials",
		itemList: [
			{
				label: "Instagram",
				href: "https://www.instagram.com/webally.ng/",
			},
			{
				label: "Twitter",
				href: "/",
			},
			{
				label: "LinkedIn",
				href: "/",
			},
		],
	},
];

export const data2: Item[] = [
	{
		label: "Terms",
		href: "",
	},
	{
		label: "Privacy policy",
		href: "",
	},
	{
		label: "Cookies",
		href: "",
	},
];
