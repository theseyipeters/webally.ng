import Footer from "@/components/Footer/Footer";
import React from "react";
import ServicesSection from "./ServicesSection/ServicesSection";

export default function RestSection() {
	return (
		<div>
			<div className="pt-[450px] lg:pt-[650px] w-full ">
				<div className="bg-[#142828]">
					<ServicesSection />
				</div>
				<Footer />
			</div>
		</div>
	);
}
