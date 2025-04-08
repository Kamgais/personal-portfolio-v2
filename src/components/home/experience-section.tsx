import { ChevronRight } from "lucide-react";

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
    <div className="w-full flex flex-col gap-4">
      {
        experiences.map((experience, index) => (
            <div key={index}
            className="flex items-center justify-between w-full border-2 border-dashed  border-gray-300 pr-3 py-2 bg-white shadow-2xs"
            >
                <div className="">
                    <img src={experience.logo} alt="" width={50} />
                </div>
                <div className="flex-1 ml-3">
                    <p className="font-bold text-sm">{experience.name}</p>
                    <p className="text-gray-700">{experience.role}</p>
                </div>
                <div className="text-gray-600 text-xs flex gap-2 items-center ">
                    {experience.period}
                    <ChevronRight  size={15}/>
                </div>
            </div>
        ))
      }
    </div>
  )
}
