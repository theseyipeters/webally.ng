"use client";

import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { Asterix } from "@/components/svgs/svgs";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Banner() {
	const t = useTranslations("Home");
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 150) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<SectionWrap>
			<div className="pt-[120px] w-full">
				<div className="flex flex-col lg:flex-row items-start w-full">
					<div
						className={`mb-4 transition-all duration-300 ${
							isScrolled ? "opacity-0 w-0" : "opacity-100 w-[220px]"
						}`}>
						<Asterix />
					</div>

					<div className="w-full">
						<h1 className="text-[40px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[70px] tracking-tighter font-medium leading-[54px] md:leading-[62px] xl:leading-[82px]">
							{t("hero.heading")}
						</h1>
					</div>
				</div>

				<div className="mt-[15px] 2xl:mt-[200px] flex items-start justify-between">
					<div className="flex">
						<div className="hidden lg:flex items-center gap-2 w-[280px] lg:w-[180px]">
							<div className="bg-black rounded-full w-3 h-3"></div>
							<h3 className="font-semibold">WA/00</h3>
						</div>

						<div>
							<p className="tracking-tighter w-full lg:w-[600px] font-medium text-lg">
								{t("hero.description")}
							</p>
						</div>
					</div>
					<div>
						<h3 className="hidden lg:block font-medium tracking-tight">
							/ {t("hero.title")}
						</h3>
					</div>
				</div>
			</div>
		</SectionWrap>
	);
}
