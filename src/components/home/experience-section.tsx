import { ChevronRight } from "lucide-react";
import Image from "next/image";

const experiences = [
    {
      logo: "/timerbee.png",
      name: "Imilia Interactive",
      role: "Werkstudent Software Entwickler",
      period: "Mai 2022 - Present"
    },
   
    
    
  ];

export default function ExperienceSection() {
  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4">
      {
        experiences.map((experience, index) => (
            <div key={index}
            className="flex items-center justify-between w-full border-2 border-dashed border-gray-300 p-2 sm:p-3 bg-white shadow-2xs hover:shadow-md transition-all duration-300 hover:border-gray-400"
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
                    <p className="font-bold text-xs sm:text-sm truncate">{experience.name}</p>
                    <p className="text-gray-700 text-xs sm:text-sm truncate">{experience.role}</p>
                </div>
                <div className="text-gray-600 text-xs flex gap-1 sm:gap-2 items-center flex-shrink-0">
                    <span className="hidden sm:inline">{experience.period}</span>
                    <span className="sm:hidden text-[10px]">{experience.period.split(' - ')[1] || experience.period}</span>
                    <ChevronRight size={12} className="sm:w-4 sm:h-4"/>
                </div>
            </div>
        ))
      }
    </div>
  )
}
