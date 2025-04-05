import React from "react";
import VideoSection from "./VideoSection/VideoSection";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import OurWork from "./OurWork/OurWork";
import WeBelieve from "./WeBelieve/WeBelieve";
import Footer from "@/components/Footer/Footer";

export default function RestSection() {
	return (
		<div className="pt-[550px] lg:pt-[650px] w-full">
			<VideoSection />
			<WhatWeDo />
			<OurWork />
			<WeBelieve />
			<Footer />
		</div>
	);
}
