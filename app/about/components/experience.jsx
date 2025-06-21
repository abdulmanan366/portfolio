"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "Jul 2018",
		endDate: "Dec 2018",
		company: "Softpro Consultants",
		position: "Android Developer",
		type: "Full-time",
		location: "Malang, Indonesia",
		description:
			"Assisted in teaching and mentoring students in algorithms and data structures, focusing on practical applications and problem-solving techniques. Developed course materials and provided support in lab sessions.",
		skills: ["Python", "C", "Algorithms", "Data Structures", "Mentoring"],
	},

	{
		id: 2,
		startDate: "Jan 2019",
		endDate: "May 2020",
		company: "TriCon Box",
		position: "Python Developer",
		type: "Full-time",
		location: "Lahore, Pakistan",
		description:
			"I worked on integrating third-party applications into existing e-commerce systems, making sure everything played nicely together. I built web scraping solutions using tools like BeautifulSoup, Scrapy, and Selenium to pull in data from various sources. I also designed and optimized data pipelines to automate the whole process—from collecting and cleaning to transforming and storing large datasets. On the infrastructure side, I maintained EC2 and RDS instances with 99% uptime. Plus, I developed and supported Django-based e-commerce apps, including integration with payment gateways like PayPal and Stripe. It was a great blend of backend development, automation, and system reliability.",
		skills: ["Laravel", "MySQL", "PHP", "JavaScript", "Teamwork"],
	},
	{
		id: 3,
		startDate: "May 2020",
		endDate: "Sep 2021",
		company: "Prixite",
		position: "Software Engineer",
		type: "Full-time",
		location: "Lahore, Pakistan",
		description:
			"At Prixite, I got to dive deep into backend development and cloud infrastructure. I designed and maintained databases using Python, and built out RESTful APIs with Django REST, Django ORM, and PostgreSQL. I also worked with Redis and RabbitMQ for handling task queues, and used Celery to manage asynchronous tasks—super helpful for scaling things smoothly. One of the highlights was working with AWS services like S3 and RDS, which I used to securely host static/media files and databases in the cloud. I followed a test-driven development (TDD) approach using PyTest and maintained 96% code coverage, all integrated with CI/CD pipelines.\nThroughout the project, I also got hands-on experience applying key software design patterns like CQRS, Event-Driven Architecture, and Test-Driven Development. These patterns really helped structure the code better and made the whole system more modular, scalable, and maintainable. It was a great experience that sharpened both my technical and architectural thinking.",
		skills: ["Python", "Django", "AWS", "S3", "Design patterns", "TDD", "Postgresql"],
	},


	{
		id: 4,
		startDate: "Oct 2021",
		endDate: "Jan 2023",
		company: "SimplifyVMS",
		position: "Software Engineer",
		type: "Full-time",
		location: "Remote",
		description: "SimplifyVMS, a large-scale enterprise with over 1,000 employees, offers a robust platform for managing vendor workforces efficiently. During my time there, I gained hands-on experience building secure, scalable web applications using Django, Spring Boot, and REST APIs. I designed microservices with clean architecture and coding practices, and optimized SQL databases—boosting scalability and cutting development time by ~30%. On the DevOps front, I worked with Jenkins, Git, Docker, Kubernetes, and Sentry, gaining solid exposure to CI/CD workflows. I also implemented caching strategies using Redis and Memcached to improve performance and reduce server load. This role significantly strengthened my backend development and DevOps skills.",
		skills: [
			"Python",
			"Java",
			"Django",
			"Spring Boot",
			"FastAPI",
			"Flask",
			"MySQL",
			"Microservices",
			"Redis",
			"React",
			"Typescript",
			"TailwindCSS"

		],
	},
	{
		id: 5,
		startDate: "Oct 2023",
		endDate: "Mar 2024",
		company: "ETAS GmbH (Bosch)",
		position: "Python Engineer",
		type: "Part-time (Remote)",
		location: "Ilmenau, Germany",
		description:
			"Working at ETAS, I learned how to implement Python automation pipelines with JIRA to streamline department and business processes. Implementation of such automation resulted in 56% increase in efficiency of process execution by removing some massive overheads. Improving and overhauling the entire legacy infrastructure to improve performance and security.", skills: [
				"Python",
				"Jira",

			],
	},
	{
		id: 6,
		startDate: "Apr 2024",
		endDate: "Present",
		company: "Self-Employed",
		position: "",
		type: "Freelance",
		location: "Germany",
		description:
			"Just chillin right now ;)",
			skills: [
			"Next.js",
			"React",
			"Laravel",
			"MySQL",
			"PostgreSQL",
			"MongoDB",
			"JavaScript",
			"TypeScript",
			"Gemini AI",
		],
	},
];

experiences.reverse();

function Title() {
	return (
		<div className="mt-2 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-2 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,
						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${isEven
				? "md:justify-center md:translate-x-68"
				: "md:justify-center md:-translate-x-68"
				} justify-center mb-4`}>
			<div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold">{experience.startDate}</div>
						<div className="text-xs text-gray-300">Start</div>
					</div>
					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-bold">{experience.endDate}</div>
						<div className="text-xs text-gray-300">End</div>
					</div>					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-gray-400">
							{experience.location}
						</div>
						<div className="text-xs text-gray-300">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
				} md:w-1/2`}>
			{" "}
			{/* Card */}
			<div
				className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}>
				{/* Company & Position */}
				<div className="mb-4">
					<h3 className="font-bold text-xl text-black mb-1">
						{experience.company}
					</h3>
					<h4 className="font-medium text-lg text-gray-700">
						{experience.position}
						<span className="text-sm font-normal text-gray-500 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				{/* Description */}
				<p className="text-gray-600 text-justify leading-relaxed mb-4">
					{experience.description}
				</p>

				{/* Skills */}
				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-4">
			<div
				className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<>
			<Title />
			<Wrapper>
				{" "}
				<div className="relative w-full max-w-6xl mx-auto">
					{" "}
					{/* Timeline line - hidden on mobile, visible on md+ */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
					{/* Mobile timeline line */}
					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
					{/* Experience cards */}
					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									{/* Timeline period card - flows naturally above content */}
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									{/* Timeline dot - positioned at the start of the experience card */}
									<div
										className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
									/>

									{/* Experience content card */}
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>
					{/* Expand/Collapse button */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}{" "}
					{/* Gradient fade effect at bottom */}
					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
