import React from "react";
import { Asterix, WeballyMask } from "../svgs/svgs";
import Link from "next/link";
import { data, FooterItem } from "./data";

export default function Footer() {
	return (
		<footer className="w-full bg-[#142828]">
			<div className="max-w-[1680px] mx-auto text-white lg:h-screen py-[50px] lg:py-[120px] px-[15px] md:px-[30px] lg:px-[100px] xl:px-[150px] relative">
				<div className="flex flex-col lg:flex-row gap-x-[100px] lg:gap-x-[200px] xl:gap-[400px] items-start pb-[60px] border-b border-[#1F3232]">
					<div className="text-white mt-0 lg:mt-2 mb-4 lg:mb-0">
						<Asterix />
					</div>

					<div className="flex flex-col">
						<h1 className="text-[40px] md:text-[45px]  xl:text-[54px] tracking-tighter font-medium leading-[54px] md:leading-[62px] xl:leading-[82px] text-white">
							Let&apos;s create something exceptional
						</h1>

						<div className="flex items-center gap-2 mt-4">
							<button className="cursor-pointer bg-white h-[50px] text-[#142828] px-5 rounded-full flex items-center justify-center">
								<p className="font-medium">How we can help you</p>
							</button>
							<button className="cursor-pointer bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full">
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.83624 10.5001H13.7687L9.51192 6.24336L10.0471 5.63525L15.3173 10.9055L10.0471 16.1758L9.51192 15.5677L13.7687 11.3109H3.83624V10.5001Z"
										fill="black"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="w-full flex items-start gap-[100px] lg:gap-[200px] xl:gap-[400px]">
					<div className="hidden lg:block text-white mt-2 opacity-0">
						<Asterix />
					</div>

					<div className="mt-[70px] w-fit grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-start justify-between">
						{data.map((item, index) => (
							<FooterBox
								footerItem={item}
								key={index}
							/>
						))}
					</div>
				</div>

				<div className="hidden lg:block w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 px-[150px]">
					<WeballyMask />
				</div>
			</div>
		</footer>
	);
}

interface FooterItemProps {
	footerItem: FooterItem;
}

function FooterBox({ footerItem }: FooterItemProps) {
	return (
		<div className="flex flex-col w-fit lg:w-[200px]">
			<p className="font-semibold text-lg text-white">{footerItem.title}</p>

			{footerItem.itemList && (
				<div className="flex flex-col mt-[15px] gap-y-[10px] text-[#5F6C6C]">
					{footerItem.itemList.map((item, index) => (
						<Link
							key={index}
							className="w-fit lg:max-w-[150px] text-white-1 hover:underline underline-offset-4 transition-all duration-300"
							href={item.href}>
							{item.label}
						</Link>
					))}
				</div>
			)}

			{footerItem.offices && (
				<div className="flex flex-col mt-[10px]">
					{footerItem.offices.map((item, index) => (
						<div key={index}>
							<span className="flex gap-2 items-center">
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.0655 6.49967C13.0655 5.88684 12.9448 5.28 12.7103 4.71382C12.4758 4.14763 12.132 3.63318 11.6987 3.19984C11.2653 2.7665 10.7509 2.42276 10.1847 2.18824C9.61851 1.95371 9.01168 1.83301 8.39884 1.83301C7.78601 1.83301 7.17917 1.95371 6.61299 2.18824C6.0468 2.42276 5.53235 2.7665 5.09901 3.19984C4.66567 3.63318 4.32193 4.14763 4.08741 4.71382C3.85288 5.28 3.73218 5.88684 3.73218 6.49967C3.73218 7.42434 4.00484 8.28434 4.46884 9.00968H4.46351L8.39884 15.1663L12.3342 9.00968H12.3295C12.8101 8.26074 13.0656 7.38956 13.0655 6.49967ZM8.39884 8.49967C7.86841 8.49967 7.3597 8.28896 6.98463 7.91389C6.60956 7.53882 6.39884 7.03011 6.39884 6.49967C6.39884 5.96924 6.60956 5.46053 6.98463 5.08546C7.3597 4.71039 7.86841 4.49967 8.39884 4.49967C8.92928 4.49967 9.43799 4.71039 9.81306 5.08546C10.1881 5.46053 10.3988 5.96924 10.3988 6.49967C10.3988 7.03011 10.1881 7.53882 9.81306 7.91389C9.43799 8.28896 8.92928 8.49967 8.39884 8.49967Z"
										fill="white"
									/>
								</svg>
								<p className="text-white font-medium">{item.location}</p>
							</span>

							<p className="text-white">{item.address}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
