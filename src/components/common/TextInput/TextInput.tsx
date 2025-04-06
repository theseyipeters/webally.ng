import React from "react";

interface TextInputProps {
	type: string;
	name: string;
	placeholder: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
	type,
	name,
	placeholder,
	value,
	onChange,
}: TextInputProps) {
	return (
		<div className="w-full">
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
				className="border-b border-[#8C9696]/20 py-3 placeholder:text-[#8C9696] w-full focus:outline-none"
			/>
		</div>
	);
}
