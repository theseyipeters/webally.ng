import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import Image from "next/image";
import Link from "next/link";

export default function WeBelieve() {
	return (
		<SectionWrap className="bg-white">
			<div className="flex flex-col lg:flex-row gap-[40px] py-[50px] lg:py-[120px]">
				<div className="rounded-xl">
					<img
						className="w-full lg:w-[500px] rounded-xl"
						alt=""
						src={"/images/webelieve.svg"}
					/>
				</div>

				<div className="flex flex-col">
					<h1 className="text-[40px] lg:text-[50px] tracking-tighter leading-[54px] font-medium lg:leading-[62px] w-full md:w-[400px] xl:w-[600px]">
						We believe in the power of quality, direct and honest communication.
					</h1>

					<div className="mt-4">
						<Link
							href={"/"}
							className="font-medium tracking-tight underline underline-offset-2">
							Learn more about Webally
						</Link>
					</div>

					<p className="font-semibold mt-[40px]">
						Small studio from Lagos, Nigeria
					</p>

					<p className="w-full lg:w-[400px] xl:w-[600px] text-gray-500/80 mt-[20px]">
						We prioritize your business goals, brand identity, and audience
						needs to create websites that don’t just look good but drive real
						business impact.
						<br />
						<br />
						Every project is a collaboration where your success is our top
						priority.
					</p>
				</div>
			</div>
		</SectionWrap>
	);
}
