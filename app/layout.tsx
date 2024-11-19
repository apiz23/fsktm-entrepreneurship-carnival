import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import "./globals.css";

export const metadata: Metadata = {
	title: "FSKTM Entrepreneurship Carnival",
	description:
		"Explore the world of innovation and taste at the Cyber-Entrepreneurship Carnival 3.0, hosted by FSKTM! Join us on 20 until 21 November 2024, at the FSKTM parking area for an exciting event filled with vibrant stalls offering a variety of delicious food, drinks, and entrepreneurial showcases. From refreshing drinks like cendol and jelly drinks to mouthwatering dishes like nasi lemak, ramen, and shawarma, there's something for everyone! Be part of this celebration of creativity and entrepreneurial spirit at Universiti Tun Hussein Onn Malaysia (UTHM).",
	viewport: "width=device-width, initial-scale=1",
	icons: {
		icon: [
			{
				url: "/logo.jpg",
				href: "/logo.jpg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
