import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// Function to attempt autoplay
		const attemptAutoplay = async () => {
			try {
				// Reset any previous errors
				setHasError(false);

				// Ensure video is loaded
				if (video.readyState < 2) {
					await new Promise((resolve) => {
						video.addEventListener("loadeddata", resolve, { once: true });
					});
				}

				// Attempt to play
				const playPromise = video.play();

				if (playPromise !== undefined) {
					await playPromise;
					setIsPlaying(true);
				}
			} catch (error) {
				console.warn("Autoplay failed:", error);
				setHasError(true);
				setIsPlaying(false);
			}
		};

		// Attempt autoplay when component mounts
		attemptAutoplay();

		// Retry autoplay on user interaction
		const handleUserInteraction = () => {
			if (!isPlaying) {
				attemptAutoplay();
			}
		};

		// Add event listeners for user interaction
		document.addEventListener("click", handleUserInteraction, { once: true });
		document.addEventListener("touchstart", handleUserInteraction, {
			once: true,
		});
		document.addEventListener("keydown", handleUserInteraction, { once: true });

		// Intersection Observer to play when visible
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isPlaying) {
						attemptAutoplay();
					}
				});
			},
			{ threshold: 0.5 }
		);

		observer.observe(video);

		// Cleanup
		return () => {
			document.removeEventListener("click", handleUserInteraction);
			document.removeEventListener("touchstart", handleUserInteraction);
			document.removeEventListener("keydown", handleUserInteraction);
			observer.disconnect();
		};
	}, [isPlaying]);

	const handlePlayClick = async () => {
		const video = videoRef.current;
		if (!video) return;

		try {
			if (video.paused) {
				await video.play();
				setIsPlaying(true);
			} else {
				video.pause();
				setIsPlaying(false);
			}
		} catch (error) {
			console.error("Play/pause failed:", error);
		}
	};

	return (
		<div className="px-[15px] md:px-[30px] lg:px-[70px] pb-6 bg-white w-full max-w-[1680px] mx-auto">
			<div className="relative group">
				<video
					ref={videoRef}
					className="rounded-2xl w-full h-auto"
					src="/assets/0409(1).mp4"
					autoPlay
					loop
					muted // CRITICAL: Muted is required for autoplay in most browsers
					playsInline // Important for mobile devices
					preload="auto"
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
					onError={() => setHasError(true)}
				/>

				{/* Play/Pause Overlay Button */}
				{(hasError || !isPlaying) && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl backdrop-blur-sm">
						<button
							onClick={handlePlayClick}
							className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-4 transition-all duration-200 hover:scale-110 shadow-lg"
							aria-label={isPlaying ? "Pause video" : "Play video"}>
							{isPlaying ? (
								// Pause Icon
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<rect
										x="6"
										y="4"
										width="4"
										height="16"
									/>
									<rect
										x="14"
										y="4"
										width="4"
										height="16"
									/>
								</svg>
							) : (
								// Play Icon
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2">
									<polygon points="5,3 19,12 5,21" />
								</svg>
							)}
						</button>
					</div>
				)}

				{/* Video Controls Overlay (appears on hover) */}
				<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between">
						<button
							onClick={handlePlayClick}
							className="text-white hover:text-gray-300 transition-colors">
							{isPlaying ? (
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor">
									<rect
										x="6"
										y="4"
										width="4"
										height="16"
									/>
									<rect
										x="14"
										y="4"
										width="4"
										height="16"
									/>
								</svg>
							) : (
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor">
									<polygon points="5,3 19,12 5,21" />
								</svg>
							)}
						</button>

						<div className="text-white text-sm">
							{isPlaying
								? "Playing"
								: hasError
								? "Error loading video"
								: "Paused"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
