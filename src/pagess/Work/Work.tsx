import PageTemplate from "@/components/common/_Page/PageTemplate";
import RestSection from "./sections/RestSection/RestSection";

export default function Work() {
	return (
		<div>
			<PageTemplate
				title="A selection of our work."
				title2="Branding, Product and Website."
				pageTitle="work">
				<RestSection />
			</PageTemplate>
		</div>
	);
}
