"use client";

import Link from "next/link";
import { Asterix2, WeballyLogo } from "../svgs/svgs";
import { links } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrolled2, setIsScrolled2] = useState(false);
	const [logo1, setLogo1] = useState(true);
	const [logo2, setLogo2] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 250) {
			setIsScrolled(true);
			setIsScrolled2(true);
			setLogo1(false);
			setLogo2(true);
		} else if (window.scrollY > 150) {
			setIsScrolled(true);
			setIsScrolled2(false);
			setLogo1(false);
			setLogo2(true);
		} else {
			setIsScrolled(false);
			setIsScrolled2(false);
			setLogo2(false);
			setLogo1(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav
			className={`h-[70px] lg:h-[80px] px-[15px] md:px-[30px] lg:px-[100px] xl:px-[150px] flex justify-between items-center fixed top-0 left-0 right-0 w-full transition-colors duration-300 ${
				isScrolled2 ? "bg-white" : ""
			}`}>
			<AnimatePresence>
				<div
					className={`flex items-center transition-all duration-300 ${
						isScrolled
							? "bg-transparent lg:bg-[#142828] lg:text-white lg:px-6 lg:py-2 rounded-full"
							: "py-0 px-0"
					}`}>
					{logo1 && (
						<motion.div
							initial={{ y: -40, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							exit={{ y: -40, opacity: 0 }}
							className="w-fit lg:w-[200px]">
							<WeballyLogo />
						</motion.div>
					)}
					{logo2 && (
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							exit={{ y: 40, opacity: 0 }}
							className="w-[200px]">
							<Asterix2 />
						</motion.div>
					)}

					<div className="hidden lg:flex gap-[30px] ">
						{links.map((link, index) => (
							<Link
								key={index}
								className="font-semibold text-lg tracking-tight"
								href={link.href}>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</AnimatePresence>

			<div className="hidden lg:block">
				<button className="bg-[#142828] rounded-full text-white px-6 py-2">
					Let&apos;s talk
				</button>
			</div>
			<div className="block lg:hidden">
				<button className="bg-transparent text-[#142828]">Menu</button>
			</div>
		</nav>
	);
}
