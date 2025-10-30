import { useTranslations } from "next-intl";
import Link from "next/link";

export default function WeBelieve() {
	const t = useTranslations("Home");
	return (
		<div className="bg-white rounded-bl-3xl rounded-br-3xl px-[15px] md:px-[30px] lg:px-[100px] xl:px-[150px] py-6 md:py-10 lg:py-[60px] w-full">
			<div className="flex flex-col lg:flex-row gap-[40px] py-[50px] lg:py-[120px] max-w-[1680px] mx-auto">
				<div className="rounded-xl">
					<img
						className="w-full lg:w-[500px] rounded-xl"
						alt=""
						src={"/images/webelieve.svg"}
					/>
				</div>

				<div className="flex flex-col">
					<h1 className="text-[40px] lg:text-[50px] tracking-tighter leading-[54px] font-medium lg:leading-[62px] w-full md:w-[400px] xl:w-[600px]">
						{t("we_believe.title")}
					</h1>

					<div className="mt-4">
						<Link
							href={"/"}
							className="font-medium tracking-tight underline underline-offset-2">
							{t("we_believe.link")}
						</Link>
					</div>

					<p className="font-semibold mt-[40px]">{t("we_believe.studio")}</p>

					<p className="w-full lg:w-[400px] xl:w-[600px] text-gray-500/80 mt-[20px]">
						{t("we_believe.desc_1")}
						<br />
						<br />
						{t("we_believe.desc_2")}
					</p>
				</div>
			</div>
		</div>
	);
}
