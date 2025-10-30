interface Item {
	label: string;
	href?: string;
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
		title: "Footer.contact.title",
		itemList: [
			{
				label: "+32 465 81 63 68",
			},
			{
				label: "12, Boulevard Saint Michel, Montgomery, Brussels.",
			},

			{
				label: "+234 803 856 4918",
			},
			{
				label: "13, Onikepo Akande Street, Lekki, Lagos, Nigeria",
			},
		],
	},
	{
		title: "Footer.sitemap.title",
		itemList: [
			{
				label: "Footer.sitemap.home",
				href: "/",
			},
			{
				label: "Footer.sitemap.services",
				href: "/services",
			},
			{
				label: "Footer.sitemap.work",
				href: "/work",
			},
			{
				label: "Footer.sitemap.about",
				href: "/about",
			},
			{
				label: "Footer.sitemap.contact",
				href: "/contact",
			},
		],
	},
	{
		title: "Footer.socials.title",
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
