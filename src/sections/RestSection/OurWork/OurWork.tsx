import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { IProject, projects } from "./data";
import Image from "next/image";
import { Arrow } from "@/components/svgs/svgs";

export default function OurWork() {
	return (
		<SectionWrap className="bg-white">
			<div className="track-section">
				<div className="w-full mt-[30px] flex flex-col md:flex-row items-start md:items-center justify-between pb-6">
					<div className="flex flex-row items-center">
						<div className="flex items-center gap-2 w-[180px]">
							<div className="bg-black rounded-full w-3 h-3"></div>
							<h3 className="font-semibold">WA/03</h3>
						</div>

						<div>
							<p className="tracking-tighter w-full xl:w-[400px] font-medium text-lg">
								Project
							</p>
						</div>
					</div>
					<h1 className="text-[40px] tracking-tighter font-medium leading-[82px] mt-3 md:mt-0">
						Our work
					</h1>
				</div>

				<div className="mt-8">
					<div className="bg-[#F6F6F6] w-full h-[450px] lg:h-[650px] rounded-2xl px-5 py-10 lg:p-10 relative overflow-hidden">
						<Project project={projects[0]} />
					</div>
				</div>
			</div>
		</SectionWrap>
	);
}

interface ProjectProps {
	project: IProject;
}

const Project = ({ project }: ProjectProps) => {
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
					Transform the way your engineering and product teams collaborate,
					automating task creation and using natural language to gather project
					insights.
				</p>
			</div>

			<div className="hidden lg:block absolute -bottom-[100px] left-15 -rotate-2 p-2 rounded-xl bg-white drop-shadow-2xl">
				<Image
					src={project.images[0]}
					alt=""
					width={750}
					height={450}
				/>
			</div>
			<div className="hidden lg:block absolute -bottom-[100px] right-15 rotate-2 p-2 rounded-xl bg-white drop-shadow-2xl">
				<Image
					src={project.images[1]}
					alt=""
					width={450}
					height={750}
				/>
			</div>
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
