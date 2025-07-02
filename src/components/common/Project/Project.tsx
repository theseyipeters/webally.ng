import { Arrow } from "@/components/svgs/svgs";
import { IProject } from "@/pagess/Home/sections/RestSection/OurWork/data";
import Image from "next/image";

interface ProjectProps {
	project: IProject;
}

export const Project = ({ project }: ProjectProps) => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<img
						className="w-[30px] lg:w-[80px]"
						alt=""
						src={project.icon}
					/>
					<h1 className="font-semibold tracking-tighter text-[25px] lg:text-[40px]">
						{project.title}
					</h1>
				</div>

				<div className="w-[40px] lg:w-[80px]">
					<Arrow />
				</div>
			</div>

			<div className="mt-[10px] lg:mt-[30px]">
				<p className="tracking-tighter w-full lg:w-[600px] font-medium text-base md:text-lg lg:text-xl">
					{project.description}
				</p>
			</div>

			{project.images.length > 1 ? (
				<div className="hidden lg:block absolute -bottom-[100px] left-15 -rotate-2 p-2 rounded-xl bg-white drop-shadow-2xl">
					<Image
						src={project.images[0]}
						alt=""
						width={750}
						height={450}
					/>
				</div>
			) : (
				<div className="hidden lg:block absolute -bottom-[50px] left-1/2 -translate-x-1/2 p-2 rounded-xl bg-white drop-shadow-2xl">
					<Image
						src={project.images[0]}
						alt=""
						width={750}
						height={450}
					/>
				</div>
			)}
			{project.images[1] && (
				<div className="hidden lg:block absolute -bottom-[100px] right-15 rotate-2 p-2 rounded-xl bg-white drop-shadow-2xl">
					<Image
						src={project.images[1]}
						alt=""
						width={450}
						height={750}
					/>
				</div>
			)}
			<div className="project-image-container block lg:hidden  absolute -bottom-[30px] md:-bottom-[180px]  rotate-0 p-2 rounded-xl bg-white drop-shadow-2xl">
				<img
					src={project.images[0]}
					alt=""
					className="w-full"
				/>
			</div>
		</div>
	);
};
