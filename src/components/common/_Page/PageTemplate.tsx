"use client";
import { animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/common/ScrollToTop/ScrollToTop";
import Hero from "../_Hero/Hero";

interface PageTemplateProps {
	title: string;
	title2?: string;
	pageTitle: string;
	children: React.ReactElement;
}

export default function PageTemplate({
	title,
	title2,
	pageTitle,
	children,
}: PageTemplateProps) {
	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const handleScroll = () => {
		if (window.scrollY > window.innerHeight / 2) {
			setShowScrollToTop(true);
		} else {
			setShowScrollToTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div>
			<div className="relative">
				<div className="w-full relative">
					<div className="relative">
						<Hero
							title={title}
							title2={title2}
							pageTitle={pageTitle}
						/>
					</div>
					<div className="z-[100] w-full  relative">{children}</div>
				</div>
				<AnimatePresence>
					{showScrollToTop && (
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							exit={{ y: -10, opacity: 0 }}
							className="fixed bottom-8 right-8 z-[500]">
							<button
								onClick={scrollToTop}
								className="w-[45px] h-[45px] flex justify-center items-center bg-[#142828] rounded-full text-white">
								<span className="w-[20px] -rotate-90">
									<ScrollToTop />
								</span>
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
