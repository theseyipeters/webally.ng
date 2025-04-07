"use client";

import SectionWrap from "@/components/common/SectionWrap/SectionWrap";

interface BannerProps {
	title: string;
	title2?: string;
	pageTitle: string;
}

export default function Banner({ title, title2, pageTitle }: BannerProps) {
	return (
		<SectionWrap>
			<div className="pt-[120px] w-full">
				<div className="flex flex-col lg:flex-row items-start w-full">
					<div className="w-full">
						<h1 className="text-[28px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] tracking-tighter font-medium leading-[34px] md:leading-[62px] xl:leading-[72px] w-full md:w-[90%] lg:[80%] xl:w-[90%]">
							{title}
						</h1>
						{title2 && (
							<h1 className="text-[28px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] tracking-tighter font-medium leading-[34px] md:leading-[62px] xl:leading-[72px]">
								{title2}
							</h1>
						)}
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
						<h3 className="font-medium tracking-tight">/ {pageTitle}</h3>
					</div>
				</div>
			</div>
		</SectionWrap>
	);
}
