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
    <div className="w-full flex flex-col gap-4">
      {
        educations.map((experience, index) => (
            <div key={index}
            className="flex items-center justify-between w-full border-2 border-dashed  border-gray-300 pr-3 py-2 bg-white shadow-2xs"
            >
                <div className="">
                    <Image 
                      src={experience.logo} 
                      alt={`${experience.name} logo`} 
                      width={50} 
                      height={50}
                      className="object-contain"
                    />
                </div>
                <div className="flex-1 ml-3">
                    <p className="font-bold text-sm">{experience.name}</p>
                    <p className="text-gray-700">{experience.diplom}</p>
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
