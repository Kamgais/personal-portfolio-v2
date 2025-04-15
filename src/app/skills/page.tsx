
import { MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";


const Skills = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-sm">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
            <MoveLeft size={15}/>  
          </Link>
          <h1 className="text-2xl font-bold ml-2">#Skills</h1>
        </div>
      </div>

      {/* Intro section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-medium mb-6">
          Professional Competencies
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          I specialize in a diverse range of technical skills, with particular expertise in web
          development and database management. Below you'll find my key areas of proficiency.
        </p>
      </div>

      {/* Skills tabs */}
      <Tabs defaultValue="development" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="databases">Databases</TabsTrigger>
        </TabsList>

        {/* Development Tab */}
        <TabsContent value="development" className="space-y-6">
          <SkillCard 
            title="Frontend Development" 
            icon="💻"
            description="Building responsive and intuitive user interfaces using modern frameworks and libraries."
            details="I create seamless user experiences with React, Vue.js and Angular. My focus is on building accessible, performant applications with clean code and attention to detail. I'm proficient in modern CSS techniques including Flexbox, Grid, and CSS-in-JS solutions."
            badges={["React", "Angular", "JavaScript", "TypeScript", "HTML5/CSS3", "TailwindCSS", "Responsive Design"]}
          />
          
          <SkillCard 
            title="Backend Development" 
            icon="⚙️"
            description="Developing robust server-side applications and APIs to power web applications."
            details="I build scalable backend systems using Node.js, Express, and other frameworks. I focus on creating well-structured, maintainable codebases with proper error handling and logging. My applications follow RESTful design principles and modern API best practices."
            badges={["Node.js", "Express", "REST APIs", "GraphQL", "Authentication", "Server Architecture"]}
          />
          
          <SkillCard 
            title="Mobile Development" 
            icon="📱"
            description="Creating native and cross-platform mobile applications for iOS and Android."
            details="I develop mobile apps using React Native , with a focus on performance and native feel. I understand platform-specific design patterns and performance considerations while maintaining a shared codebase across platforms."
            badges={["React Native", "iOS", "Android", "Mobile UI/UX", "Push Notifications"]}
          />
          
          <SkillCard 
            title="API Development" 
            icon="🔌"
            description="Designing and implementing robust and well-documented APIs that connect systems."
            details="I design and build RESTful and GraphQL APIs with a focus on performance, security, and developer experience. My APIs include comprehensive documentation, proper validation, rate limiting, and follow industry best practices."
            badges={["REST", "GraphQL", "Swagger/OpenAPI", "API Security", "Rate Limiting", "Versioning"]}
          />
          
          <SkillCard 
            title="Web Development" 
            icon="🌐"
            description="Full-stack web development with a focus on modern technologies and frameworks."
            details="I create complete web applications from concept to deployment, integrating frontend and backend systems. I'm experienced with modern web technologies and know how to optimize for performance, accessibility, and SEO."
            badges={["Full-Stack", "SPA", "PWA", "Web Performance", "Accessibility", "SEO"]}
          />
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <SkillCard 
            title="DevOps" 
            icon="🚀"
            description="Implementing CI/CD pipelines and automating deployment processes."
            details="I set up and maintain CI/CD pipelines using tools like GitHub Actions and Jenkins. I automate testing, building, and deployment processes to ensure reliable and consistent software delivery. My focus is on reducing manual steps and increasing development velocity."
            badges={["CI/CD", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Automation"]}
          />
          
          <SkillCard 
            title="Cloud Computing" 
            icon="☁️"
            description="Designing and implementing scalable cloud infrastructure on major platforms."
            details="I work with AWS, Azure, and Google Cloud to create scalable, resilient infrastructure. I design systems that efficiently utilize cloud resources while maintaining cost-effectiveness. I implement infrastructure as code using tools like Terraform and CloudFormation."
            badges={["AWS", "Azure", "Google Cloud", "Serverless", "IaC", "Cloud Architecture"]}
          />
          
          <SkillCard 
            title="Version Control" 
            icon="🔄"
            description="Managing source code with advanced Git workflows and best practices."
            details="I implement effective Git workflows including branching strategies, code reviews, and release management. I'm experienced with GitFlow and trunk-based development approaches, and I help teams establish sustainable version control practices."
            badges={["Git", "GitHub", "GitLab", "Branching Strategies", "Code Reviews", "Release Management"]}
          />
        </TabsContent>

        {/* Databases Tab */}
        <TabsContent value="databases" className="space-y-6">
          <SkillCard 
            title="Database Design & Management" 
            icon="🗃️"
            description="Creating efficient database schemas and optimizing database performance."
            details="I design normalized database schemas with proper relationships and constraints. I optimize queries and database structure for performance and implement proper indexing strategies. I'm experienced with migrations, backups, and database maintenance tasks."
            badges={["Database Architecture", "Schema Design", "Query Optimization", "Indexing", "Migrations"]}
          />
          
          <SkillCard 
            title="SQL Databases" 
            icon="📊"
            description="Working with relational databases to store and retrieve structured data."
            details="I work with PostgreSQL, MySQL, and SQL Server to build and maintain transactional database systems. I write complex SQL queries, stored procedures, and triggers. I focus on data integrity, performance, and security."
            badges={["PostgreSQL", "MySQL", "MS SQL Server", "ACID Compliance", "Transactions", "Normalization"]}
          />
          
          <SkillCard 
            title="NoSQL Databases" 
            icon="📄"
            description="Utilizing non-relational databases for flexible, scalable data storage."
            details="I implement MongoDB, Redis, and other NoSQL solutions for scenarios that benefit from flexible schemas and horizontal scaling. I understand data modeling approaches for document, key-value, and graph databases."
            badges={["MongoDB", "Redis", "DynamoDB", "Document Stores", "Key-Value Databases", "Graph Databases"]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Skill Card component with detailed information
const SkillCard = ({ 
  title, 
  icon, 
  description, 
  details, 
  badges 
}: { 
  title: string; 
  icon: string; 
  description: string; 
  details: string; 
  badges: string[] 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-3xl" aria-hidden="true">{icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-medium text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 mb-4">{description}</p>
            <div className="text-sm text-slate-700 bg-slate-50 p-4 rounded-md mb-4 leading-relaxed">
              {details}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {badges.map((badge) => (
                <Badge 
                  key={badge} 
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
