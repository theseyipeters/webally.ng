import Navbar from "@/components/Navbar/Navbar";
import Banner from "./Banner/Banner";

export default function HeroSection() {
	return (
		<div className="relative">
			<div className="w-full fixed z-[5000]">
				<Navbar />
			</div>
			<div className="fixed w-full ">
				<Banner />
			</div>
		</div>
	);
}
