export interface IpInfo {
	ip: string;
	hostname: string;
	city: string;
	region: string;
	country: string;
	loc: string;
	org: string;
	postal: string;
	timezone: string;
	readme?: string;
}

export const budgetOptionsMap = {
	naira: [
		"₦50,000 – ₦100,000",
		"₦100,000 – ₦250,000",
		"₦250,000 – ₦500,000",
		"₦500,000 – ₦1,000,000",
		"₦1,000,000 – ₦3,000,000",
		"₦3,000,000+",
		"Not sure yet – Let's discuss",
	],
	euro: [
		"€100 – €200",
		"€200 – €500",
		"€500 – €1,000",
		"€1,000 – €3,000",
		"€3,000 – €5,000",
		"€5,000+",
		"Not sure yet – Let's discuss",
	],
	dollar: [
		"$100 – $200",
		"$200 – $500",
		"$500 – $1,000",
		"$1,000 – $3,000",
		"$3,000 – $5,000",
		"$5,000+",
		"Not sure yet – Let's discuss",
	],
};

export function getBudgetOptionsByTimezone(timezone?: string) {
	if (!timezone) return budgetOptionsMap.dollar; // fallback

	const tz = timezone.toLowerCase();

	if (tz.includes("africa")) return budgetOptionsMap.naira;
	if (tz.includes("europe")) return budgetOptionsMap.euro;
	if (tz.includes("america")) return budgetOptionsMap.dollar;

	// fallback default
	return budgetOptionsMap.dollar;
}
