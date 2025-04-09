import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
	title: "Webally | Design & Development for Modern Businesses",
	description:
		"Webally helps businesses build high-converting, modern websites that drive results. Revamp your online presence today.",
	keywords: [
		"Web design",
		"Website development",
		"Webally",
		"Next.js",
		"Business websites",
		"UI/UX",
		"Rebranding",
		"E-Commerce",
	],
	authors: [{ name: "Webally Team", url: "https://webally.ng" }],
	creator: "Webally",
	metadataBase: new URL("https://webally.ng"),
	openGraph: {
		title: "Webally | Website Design & Development",
		description:
			"We help businesses grow through beautiful, effective websites.",
		url: "https://webally.ng",
		siteName: "Webally",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Webally - Beautiful Websites",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Webally | Website Design & Development",
		description:
			"We help businesses grow through beautiful, effective websites.",
		creator: "@weballyhq",
		images: ["/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			dir="ltr">
			<head>
				<link
					rel="icon"
					href="/favicon.svg"
				/>
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>
			</head>

			{/* ✅ Google Analytics */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-3K4T87S1HQ"
				strategy="afterInteractive"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3K4T87S1HQ');
        `}
			</Script>

			<body className="antialiased">
				<main>{children}</main>
			</body>
		</html>
	);
}
