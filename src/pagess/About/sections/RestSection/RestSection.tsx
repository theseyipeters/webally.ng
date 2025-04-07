import Footer from "@/components/Footer/Footer";
import CoverSection from "./CoverSection/CoverSection";
import WhatWeBelieve from "./WhatWeBelieve/WhatWeBelieve";
import OurPrinciples from "./OurPrinciples/OurPrinciples";

export default function RestSection() {
	return (
		<div className="pt-[550px] lg:pt-[650px] w-full">
			<CoverSection />
			<OurPrinciples />
			<WhatWeBelieve />
			<Footer />
		</div>
	);
}
