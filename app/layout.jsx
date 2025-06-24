import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Abdul Manan | Portofolio",

    description:
		"My name is Abdul Manan Jilani, I'm a full stack software engineer and I'm passionate about it.",

    author: "Abdul Manan Jilani",
    siteUrl: "https://abdul-manan-portfolio.vercel.app",
    applicationName: "Abdul Manan",

    keywords: [
		"abdul",
		"abdul manan",
		"abdul manan jilani",
		"manan",
		"software engineer",
		"python",
		"fast apo",
	],

    openGraph: {
		type: "website",
		url: "https://abdul-manan-portfolio.vercel.app",
		title: "Abdul Manan | Portofolio",
		site_name: "Abdul Manan | Portofolio",
		description: "My name is Abdul Manan Jilani, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/image/me.png",
				alt: "Abdul Manan Portofolio",
			},
		],
		site_name: "Abdul Manan | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
