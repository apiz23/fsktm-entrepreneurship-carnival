import Image from "next/image";
import techVentura from "@/public/img/tech-ventura.png";

export default function Footer() {
	return (
		<>
			<footer className="bg-gradient-to-b from-purple-300 via-purple-400 to-indigo-600">
				<div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center pt-6">
						<Image
							src={techVentura}
							alt="Tech Ventura Logo"
							className="h-12 w-12"
							width={48}
							height={48}
						/>
						<p className="mt-2 text-sm font-medium text-gray-300">Tech Ventura</p>
						<p className="mt-1 text-xs text-gray-400">
							© 2024 Tech Ventura. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
