import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import Link from "next/link";

export default function WhatWeDo() {
	return (
		<SectionWrap className="bg-white">
			<section
				data-theme="dark"
				className="">
				<div className="flex flex-col">
					<h1 className="text-[40px] tracking-tighter font-medium leading-[82px]">
						What we do
					</h1>

					<div className="mt-[30px] flex items-start justify-between border-b border-[#F1F2F2] pb-6">
						<div className="flex w-full">
							<div className="flex items-center gap-2 w-[100px] md:w-[180px]">
								<div className="bg-black rounded-full w-3 h-3"></div>
								<h3 className="font-semibold">WA/02</h3>
							</div>

							<div>
								<p className="tracking-tighter w-fit font-medium text-lg">
									Services
								</p>
							</div>
						</div>
						<div className="">
							<Link
								href={"/"}
								className="font-medium tracking-tight underline underline-offset-2">
								More about our process
							</Link>
						</div>
					</div>

					<div className="mt-[25px] md:mt-[50px] flex items-start justify-between border-b border-[#F1F2F2] py-[25px] md:py-[50px]">
						<div className="flex w-full items-start md:items-center">
							<div className="flex items-center gap-2 w-[130px] md:w-[180px]">
								<h1 className="text-[20px] md:text-[26px] tracking-tighter">
									Brand
								</h1>
							</div>

							<div className="ml-6 md:ml-0 lg:ml-[200px] xl:ml-[300px] w-full">
								<p className="tracking-tighter w-full md:w-[450px] font-medium text-[18px] md:text-[24px]">
									Brand Strategy, Brand Positioning, Naming Identity, Visual
									Identity, Brand Guidelines, Motion Design, Brand Assets
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-start justify-between border-b border-[#F1F2F2] py-[25px] md:py-[50px">
						<div className="flex w-full items-start md:items-center">
							<div className="flex items-center gap-2 w-[130px] md:w-[180px]">
								<h1 className="text-[20px] md:text-[26px] tracking-tighter">
									Product
								</h1>
							</div>

							<div className="ml-6 md:ml-0 lg:ml-[200px] xl:ml-[300px] w-full">
								<p className="tracking-tighter w-full md:w-[450px] font-medium text-[18px] md:text-[24px]">
									Prototyping, Software Design, Design Systems, Mobile App
									Design
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-start justify-between border-b border-[#F1F2F2] py-[25px] md:py-[50px">
						<div className="flex w-full items-start md:items-center">
							<div className="flex items-center gap-2 w-[130px] md:w-[180px]">
								<h1 className="text-[20px] md:text-[26px] tracking-tighter">
									Content
								</h1>
							</div>

							<div className="ml-6 md:ml-0 lg:ml-[200px] xl:ml-[300px] w-full">
								<p className="tracking-tighter w-full md:w-[450px] font-medium text-[18px] md:text-[24px]">
									Content Strategy, Website Design, Website Development,
									Marketing Assets
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</SectionWrap>
	);
}
