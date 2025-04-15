
import {  Calendar,  BriefcaseIcon,  MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-sm">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
            <MoveLeft size={15}/>
          </Link>
          <h1 className="text-2xl font-bold ml-2">#Experiences</h1>
        </div>
      </div>

      {/* Intro section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-medium mb-6">
          Professional Journey
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          My professional experience has shaped my expertise in software development.
          Below you'll find details about my work history and contributions.
        </p>
      </div>

      {/* Experience Card */}
      <div className="max-w-3xl mx-auto space-y-6">
        <ExperienceCard 
          company="Imilia Interactive Gmbh"
          role="Werkstudent Software Entwickler"
          period="Mai 2022 - Present"
          logo="/timerbee.png"
          description="Working as a software developer at Imilia Interactive, contributing to enterprise web applications using Angular for frontend and Spring Boot for backend development."
          responsibilities={[
            "Developed and maintained enterprise web applications using Angular framework",
            "Implemented RESTful APIs with Spring Boot backend services",
            "Created responsive and interactive user interfaces",
            "Integrated frontend applications with backend microservices",
            "Implemented state management using RxJS and Angular services",
            "Wrote unit and integration tests for frontend and backend components",
            "Collaborated with cross-functional teams to deliver high-quality software solutions"
          ]}
          technologies={[
            "Angular", 
            "TypeScript", 
            "Spring Boot", 
            "Java", 
            "RxJS", 
            "REST APIs", 
            "Microservices", 
            "Git", 
            "Agile Development"
          ]}
        />
      </div>
    </div>
  );
};

// Experience Card component with detailed information
const ExperienceCard = ({ 
  company, 
  role, 
  period, 
  logo, 
  description, 
  responsibilities, 
  technologies 
}: { 
  company: string; 
  role: string; 
  period: string; 
  logo: string; 
  description: string; 
  responsibilities: string[]; 
  technologies: string[] 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-6">
          {/* Header with company info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-gray-100 bg-white flex-shrink-0">
              <img 
                src={logo} 
                alt={`${company} logo`} 
                className="object-contain absolute inset-0 w-full h-full p-1" 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">{company}</h3>
              <p className="text-slate-700 font-medium">{role}</p>
              <div className="flex items-center text-slate-600 text-sm mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{period}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-slate-600 bg-slate-50 p-4 rounded-md leading-relaxed">
            {description}
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-md font-medium text-slate-800 mb-3 flex items-center">
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              Responsibilities
            </h4>
            <ul className="space-y-2 pl-5">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="text-slate-600 text-sm relative before:content-['•'] before:absolute before:left-[-1rem] before:text-primary">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-md font-medium text-slate-800 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
