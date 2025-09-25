
import { Calendar, BriefcaseIcon, MoveLeft, MapPin, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="group flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <div className="p-2 rounded-full group-hover:bg-slate-100 transition-colors duration-200">
                <MoveLeft size={18}/>
              </div>
              <span className="ml-2 font-medium">Back</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <BriefcaseIcon className="w-4 h-4 mr-2" />
            Professional Experience
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            My Professional Journey
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore my professional experience in software development, from full-stack development 
            to cloud architecture and DevOps practices.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent hidden lg:block"></div>
          
          <ExperienceCard 
            company="Imilia Interactive Mobile Applications GmbH"
            role="Werkstudent Software Entwickler"
            period="Mai 2022 - Present"
            location="Germany"
            logo="/timerbee.png"
            description="Working as a Software Developer at Imilia GmbH, contributing to the development of Timerbee—a multi-resource management system for healthcare providers—utilizing Angular for frontend and Spring Boot for backend development."
            responsibilities={[
              {
                text: "Software Development at Timerbee",
                subpoints: [
                  "Contributing to the development of Timerbee—a multi-resource management system for healthcare providers",
                  "Using Angular (TypeScript, RxJS, Angular Services) for frontend development",
                  "Implementing Spring Boot (Java, Spring Data, Spring Security, Hibernate) for backend systems"
                ]
              },
              {
                text: "Bachelor Thesis: License Management App (LMA)",
                subpoints: [
                  "Conceptualized and developed the LMA for Timerbee using Angular (Material UI, Reactive Forms)",
                  "Built Spring Boot REST APIs for backend functionality",
                  "Enabled internal teams to efficiently manage customer licenses"
                ]
              },
              {
                text: "Quality Assurance & Testing",
                subpoints: [
                  "Created unit and integration tests to ensure code quality and application stability",
                  "Used JUnit and Mockito for backend testing",
                  "Implemented Jasmine and Karma for frontend testing"
                ]
              },
              {
                text: "API Development & Maintenance",
                subpoints: [
                  "Implemented and maintained RESTful APIs with Spring Boot",
                  "Supported appointment scheduling functionality",
                  "Developed license management and workflow automation features"
                ]
              },
              {
                text: "DevOps Support",
                subpoints: [
                  "Built and maintained CI/CD pipelines with GitLab CI",
                  "Automated build, test, and deployment processes with Maven, npm, Docker"
                ]
              },
              {
                text: "Master Thesis (ongoing): AWS Cloud Migration",
                subpoints: [
                  "Building highly available and scalable architecture with Amazon ECS (Fargate), Aurora PostgreSQL, and ElastiCache",
                  "Using Amazon ECR for container management, Route 53 and Application Load Balancer for traffic management",
                  "Implementing Infrastructure-as-Code with AWS CloudFormation and Terraform",
                  "Ensuring Security & Compliance through IAM, AWS Secret Manager, and Amazon Cognito",
                  "Setting up Monitoring & Logging with Amazon CloudWatch"
                ]
              }
            ]}
            technologies={[
              "Angular", 
              "TypeScript", 
              "Spring Boot", 
              "Java", 
              "RxJS",
              "Angular Services",
              "Spring Data",
              "Spring Security",
              "Hibernate",
              "Material UI",
              "Reactive Forms",
              "REST APIs",
              "JUnit",
              "Mockito",
              "Jasmine",
              "Karma",
              "GitLab CI", 
              "Docker",
              "Maven",
              "npm",
              "AWS ECS",
              "Amazon Fargate",
              "Aurora PostgreSQL",
              "ElastiCache",
              "Amazon ECR",
              "Route 53",
              "Application Load Balancer",
              "AWS CloudFormation",
              "Terraform",
              "IAM",
              "AWS Secret Manager",
              "Amazon Cognito",
              "Amazon CloudWatch",
              "Git", 
              "Agile Development",
              "Jira",
              "Confluence",
              "Slack",
              "VSCode",
              "Eclipse",
              "Sourcetree"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

// Experience Card component with modern, clean design
const ExperienceCard = ({ 
  company, 
  role, 
  period, 
  location,
  logo, 
  description, 
  responsibilities, 
  technologies 
}: { 
  company: string; 
  role: string; 
  period: string; 
  location: string;
  logo: string; 
  description: string; 
  responsibilities: { text: string; subpoints: string[] }[]; 
  technologies: string[] 
}) => {
  return (
    <div className="relative lg:ml-20">
      {/* Timeline dot */}
      <div className="absolute -left-24 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md hidden lg:block"></div>
      
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
        <CardContent className="p-0">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 relative rounded-2xl overflow-hidden border-2 border-white/20 bg-white flex-shrink-0 shadow-lg">
                <Image 
                  src={logo} 
                  alt={`${company} logo`} 
                  width={64}
                  height={64}
                  className="object-contain absolute inset-0 w-full h-full p-2" 
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{company}</h3>
                <p className="text-blue-200 font-semibold text-lg mb-2">{role}</p>
                <div className="flex flex-wrap items-center gap-4 text-slate-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">{description}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <BriefcaseIcon className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Key Responsibilities</h4>
              </div>
              
              <div className="space-y-6">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-6">
                    <h5 className="font-semibold text-slate-800 mb-3 text-lg">
                      {responsibility.text}
                    </h5>
                    {responsibility.subpoints && responsibility.subpoints.length > 0 && (
                      <ul className="space-y-2">
                        {responsibility.subpoints.map((subpoint, subIndex) => (
                          <li key={subIndex} className="text-slate-600 flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{subpoint}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Building2 className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Technologies & Tools</h4>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 hover:from-slate-200 hover:to-slate-100 border border-slate-200 px-3 py-1.5 text-sm font-medium shadow-sm transition-all duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
