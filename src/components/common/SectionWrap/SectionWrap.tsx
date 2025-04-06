import React from "react";

interface SectionWrapProps {
	children: React.ReactNode;
	className?: string;
}

export default function SectionWrap({ children, className }: SectionWrapProps) {
	return (
		<div
			className={`px-[15px] md:px-[30px] lg:px-[100px] xl:px-[150px] py-6 md:py-10 lg:py-[60px] max-w-[1680px] mx-auto ${className}`}>
			{children}
		</div>
	);
}
