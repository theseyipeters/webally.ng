import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// Define all supported locales
	locales: ["en", "fr"],

	// Set the default locale (used when no prefix is present)
	defaultLocale: "en",
});

export const config = {
	// Match only routes you want localized
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
