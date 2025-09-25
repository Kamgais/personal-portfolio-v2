import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Slate",
    description: "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    imageUrl: "/project-eins.png",
    link: "https://example.com/slate",
  },
  {
    title: "Antimetal",
    description: "A dynamic, animation-focused landing page highlighting creative transitions and interactive elements.",
    imageUrl: "/project-eins.png",
    link: "https://example.com/antimetal",
  },
  {
    title: "Nebula",
    description: "An interactive dashboard to visualize data with real-time updates and customizable widgets.",
    imageUrl: "/project-eins.png",
    link: "https://example.com/nebula",
  },
  
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {
        projects.map((project,index) => (
          <div className="flex flex-col gap-4 sm:gap-6 items-center border-dashed border-2 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all ease-in bg-white dark:bg-gray-800 h-auto sm:h-[400px] p-4 rounded-xl sm:rounded-2xl" key={index}>
            <div className="w-full rounded-xl sm:rounded-2xl h-[160px] sm:h-[200px] overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={`${project.title} preview`} 
                width={300}
                height={200}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
              <h3 className="font-bold capitalize text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 transition-colors duration-300">
                {project.description}
              </p>
            </div>
            <div className="mt-auto self-center sm:self-start border border-gray-300 dark:border-gray-600 px-3 py-2 text-xs rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 min-w-[100px] text-gray-700 dark:text-gray-300">
              <Link href={project.link} className="text-center">
              View Project
              </Link>
              <ArrowUpRight  size={15}/>
            </div>
          </div>
        ))
      }
    </div>
  )
}
