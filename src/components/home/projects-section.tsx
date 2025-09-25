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
    <div className="grid  grid-cols-1 md:grid-cols-3 w-fit gap-4 ">
      {
        projects.map((project,index) => (
          <div className="flex flex-col gap-6 items-center border-dashed border-2 hover:border-blue-300 transition-all ease-in  bg-white   h-[400px] p-4 rounded-2xl" key={index}>
            <div className="w-full rounded-2xl  h-[200px] overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={`${project.title} preview`} 
                width={300}
                height={200}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold capitalize text-xl text-gray-600">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 ">
                {project.description}
              </p>
            </div>
            <div className="mt-auto self-start border p-1 text-xs flex items-center justify-between cursor-pointer hover:w-[110px]">
              <Link href={project.link}>
              Click to view
              </Link>
              <ArrowUpRight  size={15}/>
            </div>
          </div>
        ))
      }
    </div>
  )
}
