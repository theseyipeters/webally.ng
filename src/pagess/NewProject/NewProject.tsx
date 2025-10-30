"use client";

import { useEffect, useState } from "react";
import TextArea from "@/components/common/TextArea/TextArea";
import TextInput from "@/components/common/TextInput/TextInput";
import { useForm } from "@formspree/react";
import { getBudgetOptionsByTimezone, IpInfo } from "./data";

const helpOptions = [
	"Branding / Rebranding",
	"Website Design / Development",
	"Website Revamp",
	"UI/UX Design",
	"Landing Page Design",
	"E-commerce Website",
	"Corporate Website",
	"Custom Web Application",
	"SEO & Performance Optimization",
];

const hearAboutUsOptions = [
	"Instagram",
	"Twitter / X",
	"LinkedIn",
	"Google Search",
	"Referral / Word of Mouth",
	"WhatsApp",
	"Online Community (e.g. Slack, Discord)",
	"From a Friend / Colleague",
	"Other",
];

export default function NewProject() {
	const [location, setLocation] = useState<IpInfo>();

	const [formData, setFormData] = useState({
		full_name: "",
		email: "",
		company: "",
		help_option: "",
		project_description: "",
		budget: "",
		hear_about_us: "",
	});

	const handleGetLocation = () => {
		fetch("https://ipinfo.io/json")
			.then((res) => res.json())
			.then((data) => {
				setLocation(data);
			})
			.catch(console.error);
	};

	useEffect(() => {
		handleGetLocation();
	}, []);
	const [loading, setLoading] = useState(false);

	const [state, handleSubmit] = useForm("mvgkvbja");

	if (state.succeeded) {
		return (
			<div className="min-h-screen bg-[#142828] flex items-center justify-center px-[15px] md:px-[30px]">
				<div className="flex flex-col items-center gap-5 w-full md:w-[80%] lg:w-[60%] xl:w-1/2 border mx-auto">
					<div className="w-[100px] lg:w-[200px]">
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 339 95"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M32.77 75.2075V20.156"
								stroke="#E9DBDB"
								stroke-width="3.08826"
								stroke-linecap="square"
							/>
							<path
								d="M60.6445 47.4043H5.59297"
								stroke="#E9DBDB"
								stroke-width="3.08826"
								stroke-linecap="square"
							/>
							<path
								d="M11.4546 30.4238L54.7804 64.3878"
								stroke="#E9DBDB"
								stroke-width="3.08825"
								stroke-linecap="square"
							/>
							<path
								d="M93.377 35.522H99.381L108.25 64.3138L117.802 35.8631H123.329L132.88 64.3138L142.296 35.522H148.3L136.223 71H129.878L120.6 43.2999L111.252 71H104.976L93.377 35.522ZM166.45 34.4304C177.162 34.4304 183.575 41.7989 183.575 52.647C183.575 53.3975 183.507 54.2844 183.439 55.1031H154.852C155.534 63.0175 160.583 67.0428 167.064 67.0428C172.727 67.0428 176.616 64.7231 178.731 59.8108L183.029 63.4268C179.891 69.4308 173.341 72.0234 166.996 72.0234C156.284 72.0234 149.052 64.382 149.052 53.261C149.052 42.5494 156.421 34.4304 166.45 34.4304ZM154.92 50.6002H177.503C177.503 43.641 173.068 39.4109 166.45 39.4109C160.719 39.4109 155.875 43.2999 154.92 50.6002ZM189.76 20.8532H195.355V41.1166C198.289 37.0912 202.86 34.4304 209.068 34.4304C220.053 34.4304 227.08 42.7541 227.08 53.261C227.08 63.6997 219.985 72.0234 209.068 72.0234C203.61 72.0234 199.858 69.9766 198.016 68.4074L195.355 59.3332V71H189.76V20.8532ZM195.15 53.261C195.15 60.8342 200.199 66.9064 208.318 66.9064C216.573 66.9064 221.349 60.766 221.349 53.261C221.349 45.6878 216.573 39.5474 208.318 39.5474C200.199 39.5474 195.15 45.6878 195.15 53.261ZM267.465 35.522V55.7854L272.719 71H266.783L262.28 57.3546L261.598 65.883C258.801 69.3626 254.366 72.0234 248.089 72.0234C237.173 72.0234 230.077 63.6997 230.077 53.261C230.077 42.7541 237.173 34.4304 248.089 34.4304C254.298 34.4304 258.937 37.0912 261.871 41.1848V35.522H267.465ZM235.808 53.261C235.808 60.766 240.584 66.9064 248.908 66.9064C257.027 66.9064 262.007 60.8342 262.007 53.261C262.007 45.6878 257.027 39.5474 248.908 39.5474C240.584 39.5474 235.808 45.6878 235.808 53.261ZM276.848 20.8532H282.443V71H276.848V20.8532ZM290.776 20.8532H296.371V71H290.776V20.8532ZM300.406 35.522H306.683L318.895 63.9044L330.562 35.522H336.702L315.416 85.6688H309.412L315.825 70.4542L300.406 35.522Z"
								fill="#E9DBDB"
							/>
						</svg>
					</div>
					<h1 className="text-[30px] text-center md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[70px] tracking-tighter font-medium leading-[44px] md:leading-[62px] xl:leading-[90px] text-white">
						Thanks for reaching out!
					</h1>
					<p className="tracking-tighter w-full md:w-[550px] font-medium text-[16px] md:text-[20px] text-white/40 text-center">
						We&apos;ve received your message and will get back to you shortly.
						Keep an eye on your inbox!
					</p>

					<div className="flex items-center gap-2 mt-4">
						<a
							href={"/"}
							className="cursor-pointer bg-white h-[50px] text-[#142828] px-5 rounded-full flex items-center justify-center">
							<p className="font-medium text-base md:text-[18px]">
								Back to home
							</p>
						</a>
						<a
							href={"/"}
							className="cursor-pointer bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full">
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
						</a>
					</div>
				</div>
			</div>
		);
	}

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="px-[15px] w-full md:w-[90%] lg:[w-80%] xl:w-[70%] 2xl:w-[40%] max-w-[1680px] mx-auto min-h-screen overflow-scroll py-10">
			<div className="relative w-full">
				<div
					onClick={() => window.history.back()}
					className="fixed w-fit right-5 top-5 cursor-pointer">
					<div className="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#E8EAEA]">
						<svg
							width="24"
							height="24"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5.17133 10.8287L10.8287 5.17139M10.8287 10.8287L5.17133 5.17139"
								stroke="#8C9696"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				<div className="flex flex-col w-full">
					<div>
						<h1 className="text-[28px] md:text-[55px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] tracking-tighter font-medium leading-[34px] md:leading-[62px] xl:leading-[72px] w-full md:w-[90%] lg:[80%] xl:w-[90%]">
							Start a project
						</h1>

						<form
							action={"https://formspree.io/f/mvgkvbja"}
							method="POST"
							className="flex flex-col mt-[50px] gap-[50px]"
							onSubmit={handleSubmit}>
							<div>
								<span className="font-semibold text-lg tracking-normal">
									Personal Info
								</span>
								<div className="flex flex-col gap-3 mt-5">
									<TextInput
										placeholder="Enter name"
										name="full_name"
										type="text"
										value={formData.full_name}
										onChange={handleChange}
									/>
									<TextInput
										placeholder="Email address"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
									/>
									<TextInput
										placeholder="Company"
										name="company"
										type="text"
										value={formData.company}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div>
								<span className="font-semibold text-lg tracking-normal">
									How can we help you?
								</span>
								<div className="flex flex-col gap-3 mt-5">
									<select
										name="help_option"
										className="focus:outline-none border-b border-[#8C9696]/20 py-3 placeholder:text-[#8C9696]"
										value={formData.help_option}
										onChange={handleChange}>
										<option value="">Select</option>
										{helpOptions.map((option, index) => (
											<option
												key={index}
												value={option}>
												{option}
											</option>
										))}
									</select>
								</div>
							</div>

							<div>
								<span className="font-semibold text-lg tracking-normal">
									Tell us about your business and scope of the project.
								</span>
								<div className="flex flex-col gap-3 mt-5">
									<TextArea
										placeholder="Briefly describe your project"
										name="project_description"
										value={formData.project_description}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div>
								<span className="font-semibold text-lg tracking-normal">
									What is your budget?
								</span>
								<div className="flex flex-col gap-3 mt-5">
									<select
										name="budget"
										className="focus:outline-none border-b border-[#8C9696]/20 py-3 placeholder:text-[#8C9696]"
										value={formData.budget}
										onChange={handleChange}>
										<option value="">Select</option>
										{getBudgetOptionsByTimezone(location?.timezone).map(
											(option, index) => (
												<option
													key={index}
													value={option}>
													{option}
												</option>
											)
										)}
									</select>
								</div>
							</div>

							<div>
								<span className="font-semibold text-lg tracking-normal">
									How did you hear about us?
								</span>
								<div className="flex flex-col gap-3 mt-5">
									<select
										name="hear_about_us"
										className="focus:outline-none border-b border-[#8C9696]/20 py-3 placeholder:text-[#8C9696]"
										value={formData.hear_about_us}
										onChange={handleChange}>
										<option value="">Select</option>
										{hearAboutUsOptions.map((option, index) => (
											<option
												key={index}
												value={option}>
												{option}
											</option>
										))}
									</select>
								</div>
							</div>

							<div>
								<button
									type="submit"
									onClick={() => setLoading(true)}
									className={`cursor-pointer  rounded-full h-[55px] font-semibold tracking-tight text-white w-full ${
										loading ? "bg-[#142828]/50 " : "bg-[#142828]"
									}`}>
									<p
										className={`${
											loading ? "animate-ping mb-8 leading-0 text-[26px]" : ""
										}`}>
										{loading ? "..." : "Submit and book a call"}
									</p>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
