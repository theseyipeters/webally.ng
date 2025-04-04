/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "react-scroll" {
	export const animateScroll: {
		scrollToTop: () => void;
		scrollToBottom: () => void;
		scrollTo: (position: number, options?: any) => void;
	};

	export const scroller: {
		scrollTo: (name: string, options?: any) => void;
	};

	export const Element: React.FC<{
		name: string;
		className?: string;
		id?: string;
		style?: React.CSSProperties;
	}>;

	export const Link: React.FC<{
		to: string;
		smooth?: boolean | string;
		duration?: number;
		delay?: number;
		isDynamic?: boolean;
		offset?: number;
		onSetActive?: (to: string) => void;
		className?: string;
		activeClass?: string;
		spy?: boolean;
		children?: React.ReactNode;
	}>;
}
