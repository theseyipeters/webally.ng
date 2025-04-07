import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { services } from "./data";

export default function ServicesSection() {
	return (
		<SectionWrap className="bg-white">
			<div className="flex flex-col">
				{services.map((item, index) => (
					<ServiceBox
						service={item}
						key={index}
					/>
				))}
			</div>
		</SectionWrap>
	);
}

interface IService {
	serviceName: string;
	description: string;
	serviceDescription: string;
	workExample?: string;
}

interface ServiceBoxProps {
	service: IService;
}
const ServiceBox = ({ service }: ServiceBoxProps) => {
	return (
		<div className="flex items-start justify-between border-t border-[#F1F2F2] py-[25px] md:py-[50px]">
			<div className="flex w-full items-start">
				<div className="flex items-center gap-2 w-[130px] md:w-[180px] lg:w-[400px]">
					<h1 className="text-[20px] md:text-[26px] tracking-tighter w-full">
						{service.serviceName}
					</h1>
				</div>

				<div className="ml-6 md:ml-0 lg:ml-[200px] xl:ml-[300px] w-full flex flex-col gap-5">
					<p className="tracking-tighter w-full md:w-[550px] font-medium text-[18px] md:text-[24px]">
						{service.description}
					</p>

					<div className="w-full md:w-[80%] lg:w-[70%] tracking-tight mt-[30px]">
						<p className="font-semibold">Services</p>
						<p className="tracking-tighter mt-3 text-base md:text-[18px] text-[#8C9696]">
							{service.serviceDescription}
						</p>
					</div>
					<div className="w-full md:w-[80%] lg:w-[50%] tracking-tight mt-[30px]">
						<p className="font-semibold">Work examples</p>

						<div className="h-[250px] w-full rounded-xl bg-gray-400 mt-3"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
