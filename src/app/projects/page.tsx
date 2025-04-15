
import { ArrowLeft, ArrowRight, Github, Globe, Code, Calendar, BriefcaseIcon, GraduationCap, User, MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-screen mt-5 lg:mt-16 px-0 sm:px-6 lg:px-8 max-w-4xl mx-auto text-sm">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
            <MoveLeft size={15} />
          </Link>
          <h1 className="text-2xl font-bold ml-2">#Projects</h1>
        </div>
      </div>

      {/* Intro section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium mb-6">
          Personal, Academic & Client Projects
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Below are some of the key projects I've worked on, showcasing my skills and experience
          in web development and software engineering across different domains.
        </p>
      </div>

      {/* Projects Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 w-full">
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Personal
          </TabsTrigger>
          <TabsTrigger value="academic" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Academic
          </TabsTrigger>
          <TabsTrigger value="client" className="flex items-center gap-2">
            <BriefcaseIcon className="h-4 w-4" />
            Client
          </TabsTrigger>
        </TabsList>

        {/* Personal Projects */}
        <TabsContent value="personal" className="space-y-8">
          <ProjectCard 
            title="Portfolio Website"
            description="Personal portfolio website built with React and Tailwind CSS to showcase my skills, experience, and projects."
            image="/project-eins.png"
            timeline="April 2025"
            techStack={["React", "TypeScript", "Tailwind CSS", "Shadcn UI"]}
            features={[
              "Responsive design that works on all devices",
              "Modern UI with smooth animations",
              "Organized sections for skills, experience, and projects",
              "Interactive components for better user experience"
            ]}
            demoLink="https://example.com"
            codeLink="https://github.com/username/portfolio"
            goal="To create a visually appealing and professional online presence that effectively showcases my skills and projects to potential employers and clients."
            category="personal"
          />

          <ProjectCard 
            title="Developer Blog"
            description="A technical blog built with Next.js and MDX to share programming tutorials and insights."
            image="/lovable-uploads/96794321-f3bd-4d87-ad9b-00960d7f8267.png"
            timeline="February 2025"
            techStack={["Next.js", "MDX", "Tailwind CSS", "Vercel"]}
            features={[
              "Markdown content with code syntax highlighting",
              "SEO optimization for better discoverability",
              "Newsletter subscription functionality",
              "Dark/light mode toggle"
            ]}
            demoLink="https://example.com/blog"
            codeLink="https://github.com/username/dev-blog"
            goal="To share my technical knowledge with the wider developer community while improving my own understanding through the process of writing and explaining complex concepts."
            category="personal"
          />
        </TabsContent>

        {/* Academic Projects */}
        <TabsContent value="academic" className="space-y-8">
          <ProjectCard 
            title="Machine Learning Image Classifier"
            description="A Python-based image classification project developed as part of a machine learning course."
            image="/lovable-uploads/4363171d-5fc4-4fe2-85c1-0ef6f0ae2374.png"
            timeline="Fall 2024"
            techStack={["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"]}
            features={[
              "Convolutional Neural Network (CNN) architecture",
              "Data augmentation techniques",
              "Model evaluation and performance metrics",
              "Transfer learning with pre-trained models"
            ]}
            codeLink="https://github.com/username/ml-image-classifier"
            goal="To implement and evaluate different neural network architectures for image classification tasks, demonstrating proficiency in machine learning concepts and techniques."
            category="academic"
          />

          <ProjectCard 
            title="Distributed Systems Final Project"
            description="A distributed database system with fault tolerance and horizontal scaling capabilities."
            image="/lovable-uploads/96794321-f3bd-4d87-ad9b-00960d7f8267.png"
            timeline="Spring 2024"
            techStack={["Java", "Kubernetes", "Docker", "gRPC", "Redis"]}
            features={[
              "Consensus algorithm implementation",
              "Load balancing and sharding",
              "Fault tolerance and recovery mechanisms",
              "Performance optimization under different workloads"
            ]}
            codeLink="https://github.com/username/distributed-db"
            goal="To design and implement a distributed system that demonstrates key concepts such as consensus, replication, and fault tolerance while maintaining high performance and reliability."
            category="academic"
          />
        </TabsContent>

        {/* Client Projects */}
        <TabsContent value="client" className="space-y-8">
          <ProjectCard 
            title="E-commerce Platform"
            description="A full-stack e-commerce application with product catalog, shopping cart, and secure checkout functionality."
            image="/lovable-uploads/96794321-f3bd-4d87-ad9b-00960d7f8267.png"
            timeline="January - March 2025"
            techStack={["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"]}
            features={[
              "User authentication and authorization",
              "Product catalog with filtering and search",
              "Shopping cart with persistent storage",
              "Secure payment processing with Stripe",
              "Order history and tracking"
            ]}
            demoLink="https://example.com/ecommerce"
            goal="To build a secure, scalable e-commerce platform that provides an intuitive shopping experience for customers while giving the client powerful tools to manage their inventory and track sales."
            category="client"
          />

          <ProjectCard 
            title="Healthcare Management System"
            description="A comprehensive healthcare management system for a local clinic to streamline patient care and administrative tasks."
            image="/lovable-uploads/4363171d-5fc4-4fe2-85c1-0ef6f0ae2374.png"
            timeline="October - December 2024"
            techStack={["Angular", "Spring Boot", "PostgreSQL", "TypeScript", "HIPAA Compliance"]}
            features={[
              "Patient records management",
              "Appointment scheduling system",
              "Billing and insurance processing",
              "Secure communication between patients and providers",
              "Analytics dashboard for clinic performance"
            ]}
            goal="To modernize the client's healthcare operations by implementing a secure, HIPAA-compliant system that improves efficiency for staff and enhances the patient experience."
            category="client"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Project Card component with detailed information
const ProjectCard = ({ 
  title, 
  description, 
  image, 
  timeline, 
  techStack, 
  features, 
  demoLink, 
  codeLink,
  goal,
  category
}: { 
  title: string; 
  description: string; 
  image: string; 
  timeline: string; 
  techStack: string[]; 
  features: string[]; 
  demoLink?: string; 
  codeLink?: string;
  goal: string;
  category: "personal" | "academic" | "client";
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project image */}
          <div className="lg:col-span-1">
            <div className="aspect-video rounded-md overflow-hidden bg-slate-100">
              <img 
                src={image} 
                alt={`${title} preview`} 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            <div className="mt-4 flex items-center text-slate-600 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{timeline}</span>
            </div>
          </div>
          
          {/* Project details */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
                <Badge 
                  className={`
                    ${category === "personal" ? "bg-blue-100 text-blue-700" : ""}
                    ${category === "academic" ? "bg-green-100 text-green-700" : ""}
                    ${category === "client" ? "bg-purple-100 text-purple-700" : ""}
                    border border-slate-200
                  `}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
              </div>
              
              <p className="text-slate-600">{description}</p>
              
              {/* Project Goal */}
              <div className="bg-slate-50 p-4 rounded-md">
                <h4 className="text-md font-medium text-slate-800 mb-2">Project Goal</h4>
                <p className="text-slate-600 italic">{goal}</p>
              </div>
              
              {/* Tech stack */}
              <div>
                <h4 className="text-md font-medium text-slate-800 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-md font-medium text-slate-800 mb-2">Key Features</h4>
                <ul className="space-y-1 pl-5">
                  {features.map((feature, index) => (
                    <li key={index} className="text-slate-600 text-sm relative before:content-['•'] before:absolute before:left-[-1rem] before:text-primary">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Links */}
              <div className="flex gap-3 pt-2">
                {demoLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-1" /> Live Demo
                    </a>
                  </Button>
                )}
                {codeLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1" /> View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
