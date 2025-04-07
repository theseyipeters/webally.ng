import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import React from "react";
import { principles } from "./data";

export default function OurPrinciples() {
	return (
		<SectionWrap className="bg-white">
			<section
				data-theme="dark"
				className="">
				<div className="flex flex-col">
					<h1 className="text-[40px] tracking-tighter font-medium leading-[82px]">
						Our principles
					</h1>

					<div className="mt-[30px] flex items-start justify-between border-b border-[#F1F2F2] pb-6">
						<div className="flex w-full">
							<div className="flex items-center gap-2 w-[100px] md:w-[180px]">
								<div className="bg-black rounded-full w-3 h-3"></div>
								<h3 className="font-semibold">WA/01</h3>
							</div>

							<div>
								<p className="tracking-tighter w-fit font-medium text-lg">
									Our principles
								</p>
							</div>
						</div>
					</div>

					<div className="mt-[25px] md:mt-[50px] flex items-start justify-between py-[25px] md:py-[50px]">
						<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px]">
							{principles.map((item, index) => (
								<div
									key={index}
									className="flex flex-col gap-5">
									<h1 className="text-[20px] tracking-tighter">
										0{index + 1}.
									</h1>
									<hr className="text-[#F1F2F2]" />
									<h1 className="text-[20px] tracking-tighter">
										{item.title}.
									</h1>
									<p className="tracking-tighter w-full md:w-[450px] font-medium text-[18px] md:text-[18px] text-[#8C9696]">
										{item.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</SectionWrap>
	);
}
