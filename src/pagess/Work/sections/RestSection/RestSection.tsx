import Footer from "@/components/Footer/Footer";
import React from "react";
import WorkSection from "./WorkSection/WorkSection";

export default function RestSection() {
	return (
		<div className="pt-[450px] lg:pt-[650px] w-full ">
			<div className="bg-[#142828]">
				<WorkSection />
			</div>
			<Footer />
		</div>
	);
}
