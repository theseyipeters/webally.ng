"use client";

import { useState } from "react";
import TextArea from "@/components/common/TextArea/TextArea";
import TextInput from "@/components/common/TextInput/TextInput";

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

const budgetOptions = [
	"₦50,000 – ₦100,000",
	"₦100,000 – ₦250,000",
	"₦250,000 – ₦500,000",
	"₦500,000 – ₦1,000,000",
	"₦1,000,000 – ₦3,000,000",
	"₦3,000,000+",
	"Not sure yet – Let's discuss",
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
	const [formData, setFormData] = useState({
		full_name: "",
		email: "",
		company: "",
		help_option: "",
		project_description: "",
		budget: "",
		hear_about_us: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form Data:", formData);
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
										{budgetOptions.map((option, index) => (
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
									className="bg-[#142828] rounded-full h-[55px] font-semibold tracking-tight text-white w-full">
									Submit and book a call
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
