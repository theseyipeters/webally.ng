"use client";

import Link from "next/link";
import { Asterix2, WeballyLogo } from "../svgs/svgs";
import { links } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrolled2, setIsScrolled2] = useState(false);
	const [logo1, setLogo1] = useState(true);
	const [logo2, setLogo2] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const locale = useLocale();
	const pathname = usePathname();

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
		<>
			<nav
				className={`h-[70px] lg:h-[80px] px-[15px] md:px-[30px] lg:px-[100px] xl:px-[150px] flex justify-between items-center fixed top-0 left-0 right-0 w-full transition-colors duration-300 max-w-[1680px] mx-auto ${
					isScrolled2 ? "bg-white lg:bg-transparent" : ""
				}`}>
				<AnimatePresence>
					<div
						className={`flex items-center transition-all duration-300 ${
							isScrolled
								? "bg-transparent lg:bg-[#142828] lg:text-white lg:px-6 lg:py-2 rounded-full"
								: "py-0 px-0"
						}`}>
						{logo1 && (
							<motion.a
								href={`/${locale}`}
								initial={{ y: -40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
								exit={{ y: -40, opacity: 0 }}
								className="w-fit lg:w-[200px]">
								<WeballyLogo />
							</motion.a>
						)}
						{logo2 && (
							<motion.a
								href={`/${locale}`}
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
								exit={{ y: 40, opacity: 0 }}
								className="w-[200px]">
								<Asterix2 />
							</motion.a>
						)}

						<div className="hidden lg:flex gap-[30px]">
							{links.map((link, index) => {
								const localizedHref = `/${locale}${link.href}`;
								const isActive = pathname === localizedHref;

								return (
									<Link
										key={index}
										href={localizedHref}
										className={`text-lg tracking-tight navlink ${
											isActive ? "border-b border-current" : "border-none"
										}`}>
										{link.label}
									</Link>
								);
							})}
						</div>
					</div>
				</AnimatePresence>

				<div className="hidden lg:block">
					<a
						href={`/${locale}/contact/new-project`}
						className="bg-[#142828] rounded-full text-white px-6 py-2">
						Let&apos;s talk
					</a>
				</div>
				<div
					onClick={() => setShowMenu(true)}
					className="block lg:hidden">
					<button className="bg-transparent text-[#142828] cursor-pointer">
						Menu
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{showMenu && (
					<motion.div
						initial={{ y: -40, opacity: 0, height: "0px" }}
						animate={{ y: 0, opacity: 1, height: "100%" }}
						transition={{ duration: 0.5 }}
						exit={{ height: "0px", opacity: 0 }}
						className="h-screen z-[1500] bg-[#142828] w-full fixed overflow-hidden px-[20px] py-8">
						<div className="flex flex-col w-full h-full">
							<div className="flex items-center justify-between w-full">
								<motion.a
									href={`/${locale}`}
									initial={{ y: -40, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									exit={{ y: -40, opacity: 0 }}
									className="w-fit lg:w-[200px] text-white">
									<WeballyLogo />
								</motion.a>

								<div
									onClick={() => setShowMenu(false)}
									className="">
									<button className="cursor-pointer bg-transparent text-white">
										Close
									</button>
								</div>
							</div>

							<div className="mt-auto text-white w-full flex flex-col">
								<div className="flex items-center gap-2 w-[280px] lg:w-[180px]">
									<div className="bg-white/80 rounded-full w-3 h-3"></div>
									<h3 className="text-white/80 font-medium text-[20px] tracking-[0px]">
										Navigation
									</h3>
								</div>
								<div className="flex flex-col mt-6">
									{links.map((link, index) => {
										const localizedHref = `/${locale}${link.href}`;

										return (
											<Link
												onClick={() => setShowMenu(false)}
												key={index}
												className="text-[24px] tracking-tight text-white/50 hover:text-white transition-all duration-300 border-b border-white/10 py-4"
												href={localizedHref}>
												{link.label}
											</Link>
										);
									})}
								</div>

								<div className="flex items-center gap-2 mt-6 mb-[3%] w-full justify-between">
									<a
										href={`/${locale}/contact/new-project`}
										className="cursor-pointer bg-white h-[70px] text-[#142828] px-8 rounded-full flex items-center justify-center">
										<p className="font-medium text-lg">
											Let&apos;s work together
										</p>
									</a>
									<a
										href={`/${locale}/contact/new-project`}
										className="cursor-pointer bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
										<svg
											width="30"
											height="30"
											viewBox="0 0 21 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M3.83624 10.5001H13.7687L9.51192 6.24336L10.0471 5.63525L15.3173 10.9055L10.0471 16.1758L9.51192 15.5677L13.7687 11.3109H3.83624V10.5001Z"
												fill="black"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
