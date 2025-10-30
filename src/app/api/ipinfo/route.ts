import { NextResponse } from "next/server";

export async function GET() {
	try {
		const res = await fetch("https://ipinfo.io/json", {
			headers: {},
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch IP info");
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Unable to fetch IP info" },
			{ status: 500 }
		);
	}
}
