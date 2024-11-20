"use client";

import Image from "next/image";
import posterCarnival from "@/public/img/poster-carnival.jpeg";
import fsktmlogo from "@/public/img/fsktmlogo.png";
import gtu from "@/public/img/gtu-uthm.png";
import tect_ventura from "@/public/img/tech-ventura.png";
import uthm from "@/public/img/uthm.png";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import SparklesText from "@/components/ui/sparkles-text";
import { ContainerScroll } from "@/components/container-scroll-anim";
import StallList from "./stall/stall";
import Footer from "@/components/footer";

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	return (
		<>
			<div className="flex flex-col overflow-hidden bg-gradient-to-b from-purple-300 via-purple-400 to-indigo-600">
				<ContainerScroll
					titleComponent={
						<>
							<SparklesText
								sparklesCount={20}
								colors={{ first: "#CC2B52", second: "#FFE1FF" }}
								className="text-3xl md:text-6xl font-semibold text-black dark:text-white px-5 uppercase"
								text="fsktm entrepreneurship carnival"
							/>

							<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
								😋
							</span>
						</>
					}
				>
					<Image
						src={isMobile ? posterCarnival : posterCarnival}
						alt="hero"
						height={1920}
						width={1080}
						className="mx-auto rounded-2xl object-cover h-full"
						draggable={false}
					/>
				</ContainerScroll>
			</div>
			<div className="min-h-fit p-4 bg-gradient-to-t from-purple-300 via-purple-400 to-indigo-600">
				<div className="max-w-5xl pt-36 mx-auto">
					<div className="block justify-end">
						<div className="flex flex-wrap justify-center items-center gap-4 rounded-xl bg-blue-100 bg-opacity-40 w-fit px-5 mb-10 mx-auto">
							<Image
								src={fsktmlogo}
								alt="logo"
								width={500}
								height={500}
								className="object-contain w-[20vw] min-w-[100px] max-w-[150px] h-auto"
							/>
							<Image
								src={gtu}
								alt="logo"
								width={500}
								height={500}
								className="object-contain w-[20vw] min-w-[100px] max-w-[150px] h-auto"
							/>
							<Image
								src={uthm}
								alt="logo"
								width={500}
								height={500}
								className="object-contain w-[20vw] min-w-[100px] max-w-[150px] h-auto"
							/>
							<Image
								src={tect_ventura}
								alt="logo"
								width={500}
								height={500}
								className="object-contain w-[16vw] max-w-[100px] h-auto"
							/>
						</div>

						<SparklesText
							text="fsktm entrepreneurship carnival"
							sparklesCount={20}
							colors={{ first: "#CC2B52", second: "#FFE1FF" }}
							className="scroll-m-20 uppercase text-slate-800 md:text-5xl text-2xl font-extrabold tracking-wide lg:text-7xl text-center px-10 mt-20"
						/>
						<div className="max-w-2xl mx-auto my-6">
							<h3 className="scroll-m-20 text-lg text-neutral-700 font-normal text-center tracking-tight">
								DATE 📆: November 20 {" - "} 21, 2024 <br />
								TIME 🕒: 8:00 AM - 5:00 PM <br />
								LOCATION 📍: Parking Lot, Faculty of Computer Science and Information
								Technology (FSKTM)
							</h3>
						</div>
						{/* <div className="flex justify-center">
							<Link
								className="group relative inline-block focus:outline-none focus:ring"
								href="/candidate/nadia"
							>
								<span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
								<span className="relative inline-block border-4 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
									View Stalls
								</span>
							</Link>
						</div> */}
					</div>
				</div>
			</div>
			<div className="min-h-screen bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 py-32">
				<StallList />
			</div>
			<Footer />
		</>
	);
}
