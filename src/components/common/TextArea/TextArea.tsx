import React from "react";

interface TextAreaProps {
	type?: string;
	name: string;
	placeholder: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
	name,
	placeholder,
	value,
	onChange,
}: TextAreaProps) {
	return (
		<div className="w-full">
			<textarea
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
				className="border-b border-[#8C9696]/20 py-3 placeholder:text-[#8C9696] w-full focus:outline-none"
			/>
		</div>
	);
}
