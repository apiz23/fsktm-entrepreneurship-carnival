import Image from "next/image";
import techVentura from "@/public/img/tech-ventura.png";
import Link from "next/link";
import { FolderGit2Icon, Github } from "lucide-react";

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
						<p className="mt-2 text-md font-semibold text-gray-300">Tech Ventura</p>
						<p className="mt-1 text-xs text-gray-300">
							© 2024 Tech Ventura. All rights reserved.
						</p>
					</div>
					<div className="mt-6 flex justify-center space-x-6">
						<Link
							href="https://github.com/apiz23"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-white text-sm"
						>
							<Github />
						</Link>
						<Link
							href="https://github.com/apiz23/fsktm-entrepreneurship-carnival"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-white text-sm"
						>
							<FolderGit2Icon />
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
