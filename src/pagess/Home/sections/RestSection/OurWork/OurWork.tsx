import { useEffect, useRef, useState } from "react";
import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { projects } from "./data";
import { Project } from "@/components/common/Project/Project";
import { useTranslations } from "next-intl";

export default function OurWork() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const t = useTranslations("Home");

	// Auto-scroll functionality
	useEffect(() => {
		if (!isHovered) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === projects.length - 1 ? 0 : prevIndex + 1
				);
			}, 4000); // Change slide every 4 seconds
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isHovered]);

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	const goToPrevious = () => {
		setCurrentIndex(
			currentIndex === 0 ? projects.length - 1 : currentIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex(
			currentIndex === projects.length - 1 ? 0 : currentIndex + 1
		);
	};

	return (
		<SectionWrap className="bg-white">
			<div className="track-section">
				{/* Header */}
				<div className="w-full mt-[30px] flex flex-col md:flex-row items-start md:items-center justify-between pb-6">
					<div className="flex flex-row items-center">
						<div className="flex items-center gap-2 w-[180px]">
							<div className="bg-black rounded-full w-3 h-3"></div>
							<h3 className="font-semibold">WA/03</h3>
						</div>
						<div>
							<p className="tracking-tighter w-full xl:w-[400px] font-medium text-lg">
								{t("our_work.projects")}
							</p>
						</div>
					</div>
					<h1 className="text-[40px] tracking-tighter font-medium leading-[82px] mt-3 md:mt-0">
						{t("our_work.title")}
					</h1>
				</div>

				{/* Carousel Container */}
				<div className="mt-8 relative">
					{/* Main Carousel */}
					<div className="relative overflow-hidden rounded-2xl">
						{/* Slides Container */}
						<div
							onMouseEnter={() => setIsHovered(false)}
							className="flex transition-transform duration-700 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
							{projects.map((project, index) => (
								<div
									key={index}
									className="w-full flex-shrink-0">
									<div className="bg-[#F6F6F6] w-full h-[450px] lg:h-[650px] px-5 py-10 lg:p-10 relative overflow-hidden">
										<Project project={project} />
									</div>
								</div>
							))}
						</div>

						{/* Navigation Arrows */}
						<button
							onClick={goToPrevious}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
							aria-label="Previous project">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M15 18l-6-6 6-6" />
							</svg>
						</button>

						<button
							onClick={goToNext}
							className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
							aria-label="Next project">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<path d="M9 18l6-6-6-6" />
							</svg>
						</button>

						{/* Progress Bar */}
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
							<div className="flex items-center gap-1">
								{projects.map((_, index) => (
									<div
										key={index}
										className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
											index === currentIndex
												? "bg-white w-8"
												: "bg-white/50 w-2 hover:bg-white/70"
										}`}
										onClick={() => goToSlide(index)}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Project Counter */}
					<div className="flex items-center justify-between mt-6">
						<div className="text-sm text-gray-600">
							{String(currentIndex + 1).padStart(2, "0")} /{" "}
							{String(projects.length).padStart(2, "0")}
						</div>

						{/* Manual Navigation Dots */}
						<div className="flex gap-2">
							{projects.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`w-3 h-3 rounded-full transition-all duration-200 ${
										index === currentIndex
											? "bg-black scale-110"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
									aria-label={`Go to project ${index + 1}`}
								/>
							))}
						</div>

						{/* View All Projects Link */}
						<a
							href="/work"
							className="text-sm text-black hover:underline font-medium">
							{t("our_work.view_all")} →
						</a>
					</div>
				</div>
			</div>

			{/* Add group class to the main container for hover effects */}
			<style jsx>{`
				.track-section {
					position: relative;
				}
				.track-section:hover .opacity-0 {
					opacity: 1;
				}
			`}</style>
		</SectionWrap>
	);
}
