import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { projects } from "./data";
import { Project } from "@/components/common/Project/Project";

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
