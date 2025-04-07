import Navbar from "@/components/Navbar/Navbar";
import Banner from "../_Banner/Banner";

interface HeroProps {
	title: string;
	title2?: string;
	pageTitle: string;
}

export default function Hero({ title, title2, pageTitle }: HeroProps) {
	return (
		<div className="relative">
			<div className="w-full fixed z-[5000]">
				<Navbar />
			</div>
			<div className="fixed w-full ">
				<Banner
					title={title}
					title2={title2}
					pageTitle={pageTitle}
				/>
			</div>
		</div>
	);
}
