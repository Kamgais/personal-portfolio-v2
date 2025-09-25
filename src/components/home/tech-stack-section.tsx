'use client'
import Image from "next/image";
import { useState } from "react";

type SkillLevel = "Expert" | "Advanced" | "Intermediate";

interface Tech {
  name: string;
  icon: string;
  level: SkillLevel;
}

const techCategories: Record<string, Tech[]> = {
  "Frontend": [
    { name: "React", icon: "https://img.icons8.com/color/96/000000/react-native.png", level: "Expert" },
    { name: "Next.js", icon: "https://img.icons8.com/color/96/000000/nextjs.png", level: "Expert" },
    { name: "TypeScript", icon: "https://img.icons8.com/color/96/000000/typescript.png", level: "Advanced" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/000000/tailwindcss.png", level: "Expert" },
    { name: "Angular", icon: "https://img.icons8.com/color/96/000000/angularjs.png", level: "Intermediate" },
    { name: "Redux", icon: "https://img.icons8.com/color/96/000000/redux.png", level: "Advanced" },
  ],
  "Backend": [
    { name: "Node.js", icon: "https://img.icons8.com/color/96/000000/nodejs.png", level: "Expert" },
    { name: "Express.js", icon: "https://img.icons8.com/color/96/000000/express.png", level: "Expert" },
    { name: "NestJS", icon: "https://img.icons8.com/color/96/000000/nestjs.png", level: "Advanced" },
    { name: "Java", icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png", level: "Advanced" },
    { name: "Spring Boot", icon: "https://img.icons8.com/color/96/000000/spring-logo.png", level: "Intermediate" },
  ],
  "Database": [
    { name: "MongoDB", icon: "https://img.icons8.com/color/96/000000/mongodb.png", level: "Expert" },
    { name: "PostgreSQL", icon: "https://img.icons8.com/color/96/000000/postgreesql.png", level: "Advanced" },
    { name: "MySQL", icon: "https://img.icons8.com/color/96/000000/mysql-logo.png", level: "Advanced" },
    { name: "Firebase", icon: "https://img.icons8.com/color/96/000000/firebase.png", level: "Intermediate" },
  ],
  "DevOps": [
    { name: "Docker", icon: "https://img.icons8.com/color/96/000000/docker.png", level: "Advanced" },
    { name: "AWS", icon: "https://img.icons8.com/color/96/000000/amazon-web-services.png", level: "Advanced" },
    { name: "Kubernetes", icon: "https://img.icons8.com/color/96/000000/kubernetes.png", level: "Intermediate" },
    { name: "GitHub Actions", icon: "https://img.icons8.com/color/96/000000/jenkins.png", level: "Advanced" },
    { name: "Terraform", icon: "https://img.icons8.com/color/96/000000/terraform.png", level: "Intermediate" },
  ]
};

const levelColors: Record<SkillLevel, string> = {
  "Expert": "bg-green-500 dark:bg-green-400",
  "Advanced": "bg-blue-500 dark:bg-blue-400", 
  "Intermediate": "bg-orange-500 dark:bg-orange-400"
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Tech Stack & Skills
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Technologies I use to build amazing digital experiences
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.keys(techCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {techCategories[activeCategory as keyof typeof techCategories].map((tech, index) => (
          <div
            key={tech.name}
            className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Skill Level Badge */}
            <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${levelColors[tech.level]} opacity-80`}></div>
            
            {/* Tech Icon */}
            <div className="flex justify-center mb-3">
              <div className="relative p-2 rounded-lg bg-white dark:bg-gray-600 shadow-sm">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-transform group-hover:scale-110"
                />
              </div>
            </div>

            {/* Tech Name */}
            <h4 className="text-center font-medium text-gray-900 dark:text-white text-sm mb-1">
              {tech.name}
            </h4>

            {/* Skill Level */}
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              {tech.level}
            </p>

            {/* Progress Bar */}
            <div className="mt-2 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${levelColors[tech.level]} transition-all duration-500`}
                style={{
                  width: tech.level === 'Expert' ? '90%' : 
                         tech.level === 'Advanced' ? '75%' : '60%'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Intermediate</span>
        </div>
      </div>
    </div>
  );
}
