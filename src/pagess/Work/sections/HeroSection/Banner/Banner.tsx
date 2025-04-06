"use client";

import SectionWrap from "@/components/common/SectionWrap/SectionWrap";

export default function Banner() {
	return (
		<SectionWrap>
			<div className="pt-[120px] w-full">
				<div className="flex flex-col lg:flex-row items-start w-full">
					<div className="w-full">
						<h1 className="text-[28px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] tracking-tighter font-medium leading-[34px] md:leading-[62px] xl:leading-[72px]">
							A selection of our work.
						</h1>
						<h1 className="text-[28px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] tracking-tighter font-medium leading-[34px] md:leading-[62px] xl:leading-[72px]">
							Branding, Product and Website.
						</h1>
					</div>
				</div>

				<div className="mt-[150px] 2xl:mt-[200px] flex items-start justify-between">
					<div className="flex">
						<div className="flex items-center gap-2 w-[280px] lg:w-[180px]">
							<div className="bg-black rounded-full w-3 h-3"></div>
							<h3 className="font-semibold">WA/00</h3>
						</div>
					</div>
					<div>
						<h3 className="font-medium tracking-tight">/ work</h3>
					</div>
				</div>
			</div>
		</SectionWrap>
	);
}
