import { Project } from "@/components/common/Project/Project";
import { projects } from "@/pagess/Home/sections/RestSection/OurWork/data";
import React from "react";

export default function WorkSection() {
	return (
		<div className="px-[15px] md:px-[30px] lg:px-[150px] pb-[150px] bg-white w-full rounded-bl-3xl rounded-br-3xl">
			<div className="w-full rounded-xl flex flex-col gap-[50px]">
				<div className="mt-8">
					<div className="bg-[#F6F6F6] w-full h-[450px] lg:h-[650px] rounded-2xl px-5 py-10 lg:p-10 relative overflow-hidden">
						<Project project={projects[0]} />
					</div>
				</div>
				<div className="mt-8">
					<div className="bg-[#F6F6F6] w-full h-[450px] lg:h-[650px] rounded-2xl px-5 py-10 lg:p-10 relative overflow-hidden">
						<Project project={projects[1]} />
					</div>
				</div>
				<div className="mt-8">
					<div className="bg-[#F6F6F6] w-full h-[450px] lg:h-[650px] rounded-2xl px-5 py-10 lg:p-10 relative overflow-hidden">
						<Project project={projects[3]} />
					</div>
				</div>
			</div>
		</div>
	);
}
