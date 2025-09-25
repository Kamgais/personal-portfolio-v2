import { ChevronRight } from "lucide-react";
import Image from "next/image";

const educations = [
    {
        logo: "/thb.png",
        name: "Brandenburg University of Applied Sciences",
        diplom: "Master of Science in Computer Science",
        period: "September 2023 - Present"
      },
    {
      logo: "/thb.png",
      name: "Brandenburg University of Applied Sciences",
      diplom: "Bachelor of Science in Computer Science",
      period: "September 2020 - September 2023"
    },
    
    
     
      {
        logo: "/sprache.png",
        name: "Mariaspring Adult Education Centre",
        diplom: "Certificate of German Language Proficiency - Level C1",
        period: "April 2019 - June 2019"
      },
      {
        logo: "/sprache.png",
        name: "Mariaspring Adult Education Centre",
        diplom: "Certificate of German Language Proficiency - Level B2-2",
        period: "Februar 2019 - April 2019"
      },
      {
        logo: "/ila.jpeg",
        name: "German Language Institute (I.L.A) Douala",
        diplom: "Certificate of German Language Proficiency – Level (A1,A2,B1,B2)",
        period: "October 2017 - September 2018"
      },
      {
        logo: "/gymnasium.jpg",
        name: "Nylon Ndogpassi Bilingual High School",
        diplom: "Scientific Baccalaureate with a specialization in Mathematics and Physics",
        period: "September 2010 - September 2017"
      },
    
    
  ];

export default function EductationSection() {
  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4">
      {
        educations.map((experience, index) => (
            <div key={index}
            className="flex items-center justify-between w-full border-2 border-dashed border-gray-300 dark:border-gray-600 p-2 sm:p-3 bg-white dark:bg-gray-800 shadow-2xs hover:shadow-md dark:hover:shadow-gray-900/20 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
            >
                <div className="flex-shrink-0">
                    <Image 
                      src={experience.logo} 
                      alt={`${experience.name} logo`} 
                      width={40} 
                      height={40}
                      className="object-contain sm:w-[50px] sm:h-[50px]"
                    />
                </div>
                <div className="flex-1 ml-2 sm:ml-3 min-w-0">
                    <p className="font-bold text-xs sm:text-sm truncate text-gray-800 dark:text-gray-200 transition-colors duration-300">{experience.name}</p>
                    <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm truncate transition-colors duration-300">{experience.diplom}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs flex gap-1 sm:gap-2 items-center flex-shrink-0 transition-colors duration-300">
                    <span className="hidden sm:inline">{experience.period}</span>
                    <span className="sm:hidden text-[10px]">{experience.period.split(' - ')[1] || experience.period}</span>
                    <ChevronRight size={12} className="sm:w-4 sm:h-4 text-gray-500 dark:text-gray-500"/>
                </div>
            </div>
        ))
      }
    </div>
  )
}
