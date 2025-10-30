import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function RestSection() {
	return (
		<div className="pt-[450px] md:pt-[550px] lg:pt-[650px] w-full">
			<SectionWrap className="bg-white">
				<div className="flex flex-col">
					<div className="flex items-start justify-between border-t border-[#F1F2F2] py-[25px] md:py-[25px] lg:py-[50px]">
						<div className="flex flex-col lg:flex-row  gap-y-[40px] w-full items-start">
							<div className="w-fit md:w-[280px] lg:w-[440px]">
								<h1 className="text-[20px] md:text-[26px] tracking-tighter w-fit">
									We&apos;re available 24/7
								</h1>
							</div>

							<div className="ml-0 md:ml-0 lg:ml-[50px] xl:ml-[300px] w-full">
								<div>
									<div className="flex items-center gap-6">
										<div>
											<img
												alt=""
												width={114}
												className="rounded-lg"
												src="/images/wale.jpeg"
											/>
										</div>
										<div className="">
											<p className="text-lg font-normal tracking-tight">
												Wale Ajiboye
											</p>
											<p className="text-lg font-medium tracking-tight text-black/40">
												Founder & Lead Designer
											</p>
											<p className="text-lg font-medium tracking-tight">
												+32 465 81 63 68
											</p>
											<a
												href="mailto:wale@webally.ng"
												className="text-lg font-medium tracking-tight hover:underline transition-all duration-300">
												wale@webally.ng
											</a>
										</div>
									</div>
									<div className="mt-4 flex items-center gap-6">
										<div>
											<img
												alt=""
												width={114}
												className="rounded-lg"
												src="/images/mydp.jpeg"
											/>
										</div>
										<div className="">
											<p className="text-lg font-normal tracking-tight">
												Seyi Ajiboye
											</p>
											<p className="text-lg font-medium tracking-tight text-black/40">
												Lead Engineer
											</p>
											<p className="text-lg font-medium tracking-tight">
												+234 (0)91 5707 1842
											</p>
											<a
												href="mailto:seyi@webally.ng"
												className="text-lg font-medium tracking-tight hover:underline transition-all duration-300">
												seyi@webally.ng
											</a>
										</div>
									</div>
								</div>
								<div className="mt-8">
									<p className="tracking-tight w-full md:w-[600px] font-medium text-[18px] ">
										Let&apos;s discuss your project and ideas. Don&apos;t worry
										if you&apos;re not fully prepared yet. We can determine the
										potential of our partnership.
									</p>
								</div>
								<div className="mt-8">
									<Link
										href="/contact/new-project"
										className="tracking-tight font-medium text-lg underline underline-offset-4 hover:decoration-0 transition-all duration-300">
										Start a project
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SectionWrap>

			<Footer />
		</div>
	);
}
