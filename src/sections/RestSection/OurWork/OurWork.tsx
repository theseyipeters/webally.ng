import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { IProject, projects } from "./data";
import Image from "next/image";

export default function OurWork() {
	return (
		<SectionWrap className="bg-white">
			<div className="track-section">
				<div className="mt-[30px] flex items-start justify-between pb-6">
					<div className="flex flex-row items-center">
						<div className="flex items-center gap-2 w-[180px]">
							<div className="bg-black rounded-full w-3 h-3"></div>
							<h3 className="font-semibold">WA/03</h3>
						</div>

						<div>
							<p className="tracking-tighter w-[400px] font-medium text-lg">
								Project
							</p>
						</div>

						<h1 className="text-[40px] tracking-tighter font-medium leading-[82px]">
							Our work
						</h1>
					</div>
				</div>

				<div className="mt-8">
					<div className="bg-[#F6F6F6] w-full h-[650px] rounded-2xl p-10 relative overflow-hidden">
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
					<Image
						alt=""
						src={project.icon}
						width={80}
						height={80}
					/>
					<h1 className="font-semibold tracking-tighter text-[40px]">
						{project.title}
					</h1>
				</div>

				<div>
					<svg
						width="78"
						height="78"
						viewBox="0 0 78 78"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M43.7776 17.7774C44.2346 17.321 44.8542 17.0646 45.5001 17.0646C46.146 17.0646 46.7656 17.321 47.2226 17.7774L66.7226 37.2774C67.1791 37.7345 67.4355 38.354 67.4355 38.9999C67.4355 39.6459 67.1791 40.2654 66.7226 40.7224L47.2226 60.2224C46.9994 60.4619 46.7303 60.654 46.4313 60.7872C46.1323 60.9204 45.8096 60.9921 45.4823 60.9979C45.155 61.0036 44.8299 60.9434 44.5264 60.8208C44.2229 60.6982 43.9472 60.5158 43.7157 60.2843C43.4843 60.0528 43.3018 59.7771 43.1792 59.4736C43.0566 59.1701 42.9964 58.845 43.0022 58.5177C43.0079 58.1904 43.0796 57.8677 43.2128 57.5687C43.346 57.2697 43.5381 57.0006 43.7776 56.7774L59.1176 41.4374H13.0001C12.3536 41.4374 11.7336 41.1806 11.2765 40.7235C10.8194 40.2664 10.5626 39.6464 10.5626 38.9999C10.5626 38.3535 10.8194 37.7335 11.2765 37.2764C11.7336 36.8192 12.3536 36.5624 13.0001 36.5624H59.1176L43.7776 21.2224C43.3211 20.7654 43.0647 20.1459 43.0647 19.4999C43.0647 18.854 43.3211 18.2345 43.7776 17.7774Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>

			<div className="mt-[30px]">
				<p className="tracking-tighter w-[600px] font-medium text-xl">
					Transform the way your engineering and product teams collaborate,
					automating task creation and using natural language to gather project
					insights.
				</p>
			</div>

			<div className="absolute -bottom-[100px] left-15 -rotate-2 p-2 rounded-xl bg-white drop-shadow-2xl">
				<Image
					src={project.images[0]}
					alt=""
					width={750}
					height={450}
				/>
			</div>
			<div className="absolute -bottom-[100px] right-15 rotate-2 p-2 rounded-xl bg-white drop-shadow-2xl">
				<Image
					src={project.images[1]}
					alt=""
					width={450}
					height={750}
				/>
			</div>
		</div>
	);
};
