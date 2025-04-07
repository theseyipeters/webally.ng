"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { LogoMark } from "@/components/svgs/svgs";

export default function WhatWeBelieve() {
	const empathyRef = useRef(null);
	const isInView = useInView(empathyRef, { once: false, margin: "-50px" });

	return (
		<SectionWrap className="bg-white">
			<section
				data-theme="dark"
				className="">
				<div className="flex flex-col">
					<h1 className="text-[40px] tracking-tighter font-medium leading-[82px]">
						What we believe
					</h1>

					<div className="mt-[30px] flex items-start justify-between border-b border-[#F1F2F2] pb-6">
						<div className="flex w-full">
							<div className="flex items-center gap-2 w-[100px] md:w-[180px]">
								<div className="bg-black rounded-full w-3 h-3"></div>
								<h3 className="font-semibold">WA/02</h3>
							</div>

							<div>
								<p className="tracking-tighter w-fit font-medium text-lg">
									What we believe in
								</p>
							</div>
						</div>
					</div>

					<div className="mt-[25px] md:mt-[50px] flex items-start justify-between border-b border-[#F1F2F2] py-[25px] md:py-[50px]">
						<div className="flex flex-col gap-y-3 md:flex-row w-full items-start">
							<div className="flex items-center gap-2 w-[130px] md:w-[180px]">
								<h1 className="text-[20px] tracking-tighter">01.</h1>
							</div>

							<div className="ml-0 lg:ml-[100px] xl:ml-[100px] w-full xl:w-[75%]">
								<h1 className="text-[40px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[70px] tracking-tighter font-medium leading-[54px] md:leading-[62px] xl:leading-[90px]">
									We believe in the power of quality, direct{" "}
									<span className="hidden md:inline-flex w-[60px] h-[60px] rounded-full bg-[#142828] items-center justify-center">
										<LogoMark />
									</span>{" "}
									and honest communication.
								</h1>
							</div>
						</div>
					</div>

					<div className="flex items-start justify-between border-b border-[#F1F2F2] py-[25px] md:py-[50px]">
						<div className="flex flex-col gap-y-3 md:flex-row w-full items-start">
							<div className="flex items-center gap-2 w-[130px] md:w-[180px]">
								<h1 className="text-[20px] tracking-tighter">02.</h1>
							</div>

							<div className="ml-0 lg:ml-[100px] xl:ml-[100px] w-full xl:w-[75%]">
								<h1 className="text-[40px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[70px] tracking-tighter font-medium leading-[54px] md:leading-[62px] xl:leading-[90px]">
									Cultivating an environment where{" "}
									<motion.span
										ref={empathyRef}
										initial={{ rotate: 0 }}
										animate={isInView ? { rotate: 6 } : { rotate: 0 }}
										transition={{ duration: 0.1, delay: 1.5, ease: "easeOut" }}
										className="ml-3 lg:ml-0 px-3 md:px-5 md:pb-2 rounded-full border-2 border-[#142828] inline-flex items-center justify-center   xl:leading-[80px]">
										empathy
									</motion.span>{" "}
									and understanding thrive.
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
		</SectionWrap>
	);
}
