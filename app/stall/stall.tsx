import pic1 from "@/public/img/1.png";
import pic2 from "@/public/img/2.png";
import pic3 from "@/public/img/3.png";
import pic4 from "@/public/img/4.jpg";
import pic5 from "@/public/img/5.png";
import pic6 from "@/public/img/6.jpg";
import pic7_1 from "@/public/img/7.1.png";
import pic7_2 from "@/public/img/7.2.jpg";
import pic8 from "@/public/img/8.jpg";
import pic9_1 from "@/public/img/9.1.jpg";
import pic9_2 from "@/public/img/9.2.jpg";
import pic9_3 from "@/public/img/9.3.jpg";
import pic10 from "@/public/img/10.jpeg";
import pic11 from "@/public/img/11.jpg";
import pic12 from "@/public/img/12.png";
import pic13 from "@/public/img/13.jpg";
import pic14 from "@/public/img/14.png";
import pic15 from "@/public/img/15.jpg";
import pic16 from "@/public/img/16.jpg";
import pic17 from "@/public/img/17.jpg";
import pic18 from "@/public/img/18.png";
import pic19 from "@/public/img/19.jpg";
import pic20 from "@/public/img/20.jpg";
import pic21 from "@/public/img/21.jpg";
import pic22 from "@/public/img/22.jpg";
import pic23 from "@/public/img/23.jpg";
import pic24 from "@/public/img/24.jpg";
import pic25 from "@/public/img/25.png";
import pic26 from "@/public/img/26.jpeg";
import pic27_1 from "@/public/img/27.1.jpg";
import pic27_2 from "@/public/img/27.2.jpg";
import pic28 from "@/public/img/28.png";
import pic29 from "@/public/img/29.jpg";
import pic30 from "@/public/img/30.jpg";
import pic31 from "@/public/img/31.jpg";
import pic32 from "@/public/img/32.jpg";
import pic33 from "@/public/img/33.jpg";
import pic34 from "@/public/img/34.jpg";
import pic35 from "@/public/img/35.jpg";
import pic36 from "@/public/img/36.jpg";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Input } from "@/components/ui/input";

type Stall = {
	name: string;
	url: StaticImageData | StaticImageData[];
	description: string;
};

const stalls: Record<string, Stall> = {
	"1": {
		name: "Chick and chili",
		url: pic1,
		description: "A stall specializing in spicy chicken dishes.",
	},
	"2": {
		name: "LOKCING BERAPI",
		url: pic2,
		description: "Grilled skewers with a fiery twist.",
	},
	"3": {
		name: "Fry&Fizz Delight",
		url: pic3,
		description: "Delicious fried snacks paired with fizzy drinks.",
	},
	"4": {
		name: "BLISS N' SWEET",
		url: pic4,
		description: "A haven for dessert and sweet lovers.",
	},
	"5": {
		name: "Yum Yum",
		url: pic5,
		description: "A stall offering a variety of comfort foods.",
	},
	"6": {
		name: "Cendol and Friends",
		url: pic6,
		description: "Refreshing cendol and other sweet beverages.",
	},
	"7": {
		name: "Hihang Hoheng",
		url: [pic7_1, pic7_2],
		description: "A unique mix of traditional and modern snacks.",
	},
	"8": {
		name: "PERFECT TREATS",
		url: pic8,
		description: "Premium baked goods and pastries.",
	},
	"9": {
		name: "Pasta and Sip cafe'",
		url: [pic9_1, pic9_2, pic9_3],
		description: "Pasta dishes paired with delightful beverages.",
	},
	"10": {
		name: "Tenderlicious",
		url: pic10,
		description: "Juicy and tender grilled delights.",
	},
	"11": {
		name: "petal and promise",
		url: pic11,
		description: "Lovely floral-themed desserts.",
	},
	"12": {
		name: "Market Vibes",
		url: pic12,
		description: "A vibrant mix of local market-style offerings.",
	},
	"13": {
		name: "MANTOULICIOUS",
		url: pic13,
		description: "Delicious mantou buns with various fillings.",
	},
	"14": {
		name: "MURTABUCK EMPIRE",
		url: pic14,
		description: "Murtabak with a twist of flavors.",
	},
	"15": {
		name: "LEKOR & FRUITY DELIGHTS",
		url: pic15,
		description: "Crispy keropok lekor and fresh fruit drinks.",
	},
	"16": {
		name: "L'il Pancake",
		url: pic16,
		description: "Mini pancakes with sweet toppings.",
	},
	"17": {
		name: "Wantakers",
		url: pic17,
		description: "Tasty wantan and takoyaki dishes.",
	},
	"18": {
		name: "Treasure & Treats",
		url: pic18,
		description: "A treasure chest of delightful treats.",
	},
	"19": {
		name: "JEM-BALANG",
		url: pic19,
		description: "Refreshing beverages in large serving balangs.",
	},
	"20": {
		name: "O' FILLET",
		url: pic20,
		description: "Crispy fillets served in unique ways.",
	},
	"21": {
		name: "CraftedBytes",
		url: pic21,
		description: "Tech-themed snacks and treats.",
	},
	"22": {
		name: "Siuuuuuuushi",
		url: pic22,
		description: "Freshly made sushi rolls.",
	},
	"23": {
		name: "Laksa Johor Mama",
		url: pic23,
		description: "Authentic Laksa Johor served hot.",
	},
	"24": {
		name: "popiahlicious",
		url: pic24,
		description: "Delicious handmade popiah rolls.",
	},
	"25": {
		name: "ChillBites",
		url: pic25,
		description: "Cool treats and quick bites.",
	},
	"26": {
		name: "KCrave Corner",
		url: pic26,
		description: "Korean-inspired street food.",
	},
	"27": {
		name: "The Daily Bites",
		url: [pic27_1, pic27_2],
		description: "Your go-to for daily comfort snacks.",
	},
	"28": {
		name: "Wrap n Roll",
		url: pic28,
		description: "Fresh wraps with flavorful fillings.",
	},
	"29": {
		name: "PopisCane Pitstop",
		url: pic29,
		description: "Popis and cane juice for a refreshing combo.",
	},
	"30": {
		name: "Rasa Warisan",
		url: pic30,
		description: "Traditional dishes with authentic flavors.",
	},
	"31": {
		name: "Stacked & Stuffed",
		url: pic31,
		description: "Overloaded sandwiches and burgers.",
	},
	"32": {
		name: "Savoury Snacks Station",
		url: pic32,
		description: "An array of salty and savory snacks.",
	},
	"33": {
		name: "rumah impit",
		url: pic33,
		description: "Classic nasi impit and rendang pairings.",
	},
	"34": {
		name: "Manis",
		url: pic34,
		description: "Sweet desserts and treats.",
	},
	"35": {
		name: "AIR BALANG FSKETAM",
		url: pic35,
		description: "Refreshing air balang with a tagline 'Pasti Ter Air Love You.'",
	},
	"36": {
		name: "Petals and Promises",
		url: pic36,
		description: "Elegant desserts inspired by floral designs.",
	},
};

const StallList: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const stallsPerPage = 6;
	const stallList = Object.values(stalls);

	const filteredStalls = stallList.filter((stall, index) => {
		const lowercasedSearchTerm = searchTerm.toLowerCase();
		return (index + 1).toString().includes(lowercasedSearchTerm);
	});

	const totalPages = Math.ceil(filteredStalls.length / stallsPerPage);
	const startIndex = (currentPage - 1) * stallsPerPage;
	const currentStalls = filteredStalls.slice(
		startIndex,
		startIndex + stallsPerPage
	);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<div className="max-w-7xl mx-auto p-4">
			<h1 className="text-center text-4xl md:text-6xl font-bold mb-8 uppercase">
				Food Stalls
			</h1>
			<div className="mb-8 gap-4 max-w-4xl space-y-4 text-center mx-auto">
				<Input
					type="text"
					placeholder="Search by stall number..."
					className="w-full lg:w-[30vw] mx-auto p-3 bg-white"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setCurrentPage(1);
					}}
				/>
			</div>

			<div className="flex justify-between my-6">
				<Button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</Button>
				<span className="text-lg font-medium">
					Page {currentPage} of {totalPages}
				</span>
				<Button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</Button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{filteredStalls.length === 0 ? (
					<p className="text-center text-xl text-gray-500">No stalls found</p>
				) : (
					currentStalls.map((stall, index) => {
						const originalIndex = stallList.indexOf(stall);
						return (
							<Dialog key={index}>
								<div className="rounded-lg shadow-xl bg-neutral-200">
									<Image
										src={Array.isArray(stall.url) ? stall.url[0] : stall.url}
										alt={stall.name}
										className="w-full h-[50vh] object-cover rounded-lg mb-4"
										width={400}
										height={200}
									/>
									<div className="p-4">
										<h2 className="text-3xl font-semibold mb-2 capitalize">
											{stall.name}
										</h2>
										<p className="text-gray-600 mb-2">{stall.description}</p>
										<p className="text-gray-800 font-medium">
											<strong>Stall No:</strong> {originalIndex + 1}
										</p>
										<DialogTrigger className="w-full text-right">
											<Button variant="default">See More</Button>
										</DialogTrigger>
									</div>
								</div>

								<DialogContent className="max-w-2xl mx-auto min-h-[50vh]">
									<DialogHeader>
										<DialogTitle className="text-2xl">{stall.name}</DialogTitle>
										<DialogDescription className="text-lg">
											{stall.description}
										</DialogDescription>
										<DialogDescription className="text-lg">
											Stall - {originalIndex + 1}
										</DialogDescription>
									</DialogHeader>
									<div className="p-4">
										<Carousel>
											<CarouselContent>
												{Array.isArray(stall.url) ? (
													stall.url.map((img, idx) => (
														<CarouselItem key={idx}>
															<Image
																src={img}
																alt={`${stall.name} - ${idx + 1}`}
																className="rounded-lg shadow-md mx-auto"
																width={400}
																height={400}
															/>
														</CarouselItem>
													))
												) : (
													<CarouselItem>
														<Image
															src={stall.url}
															alt={stall.name}
															className="rounded-lg shadow-md mx-auto min-h-[80%]"
															width={400}
															height={400}
														/>
													</CarouselItem>
												)}
											</CarouselContent>
											<CarouselPrevious />
											<CarouselNext />
										</Carousel>
									</div>
								</DialogContent>
							</Dialog>
						);
					})
				)}
			</div>

			<div className="flex justify-between my-6">
				<Button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</Button>
				<span className="text-lg font-medium">
					Page {currentPage} of {totalPages}
				</span>
				<Button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default StallList;
