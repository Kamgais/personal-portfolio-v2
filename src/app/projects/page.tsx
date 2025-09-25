
import { Github, Globe, Calendar, BriefcaseIcon, GraduationCap, User, MoveLeft, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/20 to-blue-50/10 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.02)_0%,transparent_50%)] pointer-events-none"></div>
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/40 backdrop-blur-lg bg-white/90 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            <FolderOpen className="w-4 h-4" />
            Projects Portfolio
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            My Projects
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A collection of personal, academic, and client projects showcasing my skills 
            in web development, software engineering, and problem-solving across different domains.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8 w-full h-12">
                  <TabsTrigger value="personal" className="flex items-center gap-2 text-sm font-medium">
                    <User className="h-4 w-4" />
                    Personal
                  </TabsTrigger>
                  <TabsTrigger value="academic" className="flex items-center gap-2 text-sm font-medium">
                    <GraduationCap className="h-4 w-4" />
                    Academic
                  </TabsTrigger>
                  <TabsTrigger value="client" className="flex items-center gap-2 text-sm font-medium">
                    <BriefcaseIcon className="h-4 w-4" />
                    Professional
                  </TabsTrigger>
                </TabsList>

                {/* Personal Projects */}
                <TabsContent value="personal" className="space-y-8">
                  <ProjectCard 
                    title="Sommaire AI - AI-Based PDF Summarization Platform"
                    description="A modern SaaS platform that transforms PDF documents into concise, visually appealing summaries using advanced AI technology with both OpenAI GPT-4 and Google Gemini AI integration."
                    image="/image1.jpeg"
                    timeline="2025"
                    techStack={["Next.js 15", "TypeScript", "PostgreSQL", "OpenAI GPT-4", "Google Gemini AI", "LangChain", "Stripe", "Clerk", "Tailwind CSS", "shadcn/ui"]}
                    features={[
                      "AI-powered document analysis with automatic PDF content extraction",
                      "Intelligent summaries with structured, emoji-based content presentation",
                      "Complete user authentication with secure Clerk integration",
                      "Stripe payment processing for subscription management (Basic/Pro plans)",
                      "Responsive UI/UX with modern design system",
                      "Dual AI provider integration for optimal availability and quality"
                    ]}
                    demoLink="https://sommaire-ai.vercel.app"
                    codeLink="https://github.com/Kamgais/sommaire-ai"
                    goal="To create a comprehensive SaaS platform that leverages cutting-edge AI technology to help users quickly understand and process complex PDF documents through intelligent summarization."
                    category="personal"
                  />

                  <ProjectCard 
                    title="BOD (Battle on Demand) - Backend API"
                    description="Real-time API for a dance battle platform featuring live streaming, interactive voting, and event management with scalable architecture supporting 1000+ concurrent users."
                    image="/image2.jpeg"
                    timeline="2024"
                    techStack={["TypeScript", "NestJS", "PostgreSQL", "Socket.io", "Docker", "Stripe API", "PayPal API", "OAuth2", "Cloudinary"]}
                    features={[
                      "14+ WebSocket endpoints for real-time communication",
                      "Multi-provider OAuth2 authentication system",
                      "Integrated payment processing with Stripe and PayPal",
                      "Docker containerization for deployment flexibility",
                      "Media management with Cloudinary integration",
                      "Scalable architecture designed for high concurrent usage"
                    ]}
                    demoLink="https://battle-on-demand.herokuapp.com"
                    codeLink="https://github.com/Kamgais/bod-backend-api"
                    goal="To build a robust, scalable backend infrastructure that supports real-time interactions for dance battle events while maintaining high performance under heavy load."
                    category="personal"
                  />
                </TabsContent>

                {/* Academic Projects */}
                <TabsContent value="academic" className="space-y-8">
                  <ProjectCard 
                    title="Complete Cloud Infrastructure Development"
                    description="Implementation of a scalable AWS cloud architecture for the 'PostOn' web application with Infrastructure as Code (Terraform), automated CI/CD pipelines, and comprehensive security analysis."
                    image="/image3.jpeg"
                    timeline="2024"
                    techStack={["AWS", "Terraform", "GitHub Actions", "Docker", "Spring Boot", "React", "MySQL", "Amazon RDS", "SonarCloud"]}
                    features={[
                      "Infrastructure as Code with Terraform (VPC, EC2, RDS, S3, Subnets, Security Groups)",
                      "Complete CI/CD pipeline with GitHub Actions and Docker containerization",
                      "Spring Boot backend and React frontend deployed on AWS EC2",
                      "MySQL database with Amazon RDS integration",
                      "Static code analysis and security scanning with SonarCloud",
                      "Automated testing and deployment automation"
                    ]}
                    demoLink="https://poston-app.aws-demo.com"
                    codeLink="https://github.com/Kamgais/poston-cloud-infrastructure"
                    goal="To design and implement a complete cloud-native infrastructure that demonstrates proficiency in modern DevOps practices, cloud architecture, and automated deployment strategies."
                    category="academic"
                  />

                  <ProjectCard 
                    title="Retrieval-Augmented Generation (RAG) Systems"
                    description="Development and implementation of RAG-based NLP systems to improve text generation through integration of external knowledge sources and context-based response generation."
                    image="/image4.jpeg"
                    timeline="2024"
                    techStack={["Python", "Transformer Models", "NLP", "Machine Learning", "Knowledge Databases", "Embedding Systems"]}
                    features={[
                      "Implementation of various RAG architectures in Python",
                      "Modularization of RAG systems for flexible adaptation and extensibility",
                      "Integration of knowledge databases and embedding-based retrieval systems",
                      "Utilization of Transformer models for context-aware response generation",
                      "Development of test pipelines for evaluating accuracy and relevance",
                      "Comprehensive documentation of system architecture and experiments"
                    ]}
                    demoLink="https://rag-demo.streamlit.app"
                    codeLink="https://github.com/Kamgais/rag-nlp-systems"
                    goal="To advance understanding of modern NLP techniques by building sophisticated RAG systems that demonstrate the integration of retrieval mechanisms with generative AI models."
                    category="academic"
                  />
                </TabsContent>

                {/* Professional Projects */}
                <TabsContent value="client" className="space-y-8">
                  <ProjectCard 
                    title="Timerbee AWS Cloud Migration"
                    description="Conception and implementation of complete cloud migration of the Timerbee platform (resource management and appointment scheduling for healthcare facilities) from traditional on-premises architecture to scalable AWS cloud solution."
                    image="/timerbee.png"
                    timeline="In Progress - Expected completion: January 2026"
                    techStack={["AWS", "VPC", "Amazon ECS", "Fargate", "Amazon Aurora PostgreSQL", "ElastiCache", "ECR", "S3", "CloudWatch", "Secrets Manager", "CloudFormation", "IAM"]}
                    features={[
                      "Design of highly available multi-tier architecture with VPC, subnets and load balancing",
                      "Implementation of microservices with Amazon ECS, Fargate and containerized applications",
                      "Development of secure data infrastructure with Amazon Aurora PostgreSQL and ElastiCache",
                      "Integration of AWS-native services (ECR, S3, CloudWatch, Secrets Manager, CloudFormation)",
                      "Establishment of robust CI/CD pipeline with automated deployment",
                      "Implementation of IAM security concepts and monitoring solutions"
                    ]}
                    demoLink="https://timerbee-cloud.imilia.com"
                    codeLink="https://github.com/Kamgais/timerbee-aws-migration"
                    goal="To develop a cloud-native, scalable and highly available architecture with improved performance and reduced operational costs for healthcare resource management."
                    category="client"
                  />

                  <ProjectCard 
                    title="Web-based License Management Application"
                    description="Complete development of a License Management App (LMA) for internal management of Timerbee customer licenses, enabling IMILIA to centrally manage, monitor and update all Timerbee license installations at healthcare customers."
                    image="/image6.jpeg"
                    timeline="2024"
                    techStack={["Angular", "TypeScript", "Angular Material", "SCSS", "Spring Boot", "Java", "PostgreSQL", "Docker", "Docker Compose", "Cypress"]}
                    features={[
                      "Frontend development with Angular, TypeScript, Angular Material and SCSS",
                      "Backend implementation with Spring Boot, Java and PostgreSQL",
                      "RESTful API design with complete CRUD operations",
                      "Containerization with Docker and Docker Compose",
                      "End-to-end testing with Cypress",
                      "Secure license generation and management with encryption functions"
                    ]}
                    demoLink="https://lma.imilia.com"
                    codeLink="https://github.com/Kamgais/license-management-app"
                    goal="To create a comprehensive license management system that provides complete administration of licenses, customers, products, resellers and users including search/filter functions and automated license generation."
                    category="client"
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-white/20 bg-white/60 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project image */}
          <div className="lg:col-span-1">
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              <Image 
                src={image} 
                alt={`${title} preview`} 
                width={400}
                height={225}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="mt-4 flex items-center text-slate-600 text-sm">
              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
              <span className="font-medium">{timeline}</span>
            </div>
          </div>
          
          {/* Project details */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-slate-900 leading-tight">{title}</h3>
                <Badge 
                  className={`
                    ${category === "personal" ? "bg-blue-100 text-blue-700 border-blue-200" : ""}
                    ${category === "academic" ? "bg-green-100 text-green-700 border-green-200" : ""}
                    ${category === "client" ? "bg-purple-100 text-purple-700 border-purple-200" : ""}
                    font-medium
                  `}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
              </div>
              
              <p className="text-slate-600 leading-relaxed">{description}</p>
              
              {/* Project Goal */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Project Goal</h4>
                <p className="text-slate-700 text-sm leading-relaxed italic">{goal}</p>
              </div>
              
              {/* Tech stack */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      className="bg-white/80 text-slate-700 hover:bg-white border-slate-200 font-medium transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="text-slate-600 text-sm flex items-start leading-relaxed">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                {demoLink && (
                  <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white border-slate-200" asChild>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {codeLink && (
                  <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white border-slate-200" asChild>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
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
