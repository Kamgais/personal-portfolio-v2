
import { MoveLeft, Code, Server, Database, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Skills = () => {
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Technical Skills
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Competencies
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I specialize in a diverse range of technical skills, with particular expertise in web
            development, cloud infrastructure, and database management.
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="relative">
          <Card className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <Tabs defaultValue="development" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
                  <TabsTrigger 
                    value="development" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg font-medium"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Development
                  </TabsTrigger>
                  <TabsTrigger 
                    value="infrastructure" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg font-medium"
                  >
                    <Server className="w-4 h-4 mr-2" />
                    Infrastructure
                  </TabsTrigger>
                  <TabsTrigger 
                    value="databases" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg font-medium"
                  >
                    <Database className="w-4 h-4 mr-2" />
                    Databases
                  </TabsTrigger>
                </TabsList>

                {/* Development Tab */}
                <TabsContent value="development" className="space-y-6">
                  <SkillCard 
                    title="Frontend Development" 
                    icon="💻"
                    iconColor="blue"
                    description="Building responsive and intuitive user interfaces using modern frameworks and libraries."
                    details="I create seamless user experiences with React, and Angular. My focus is on building accessible, performant applications with clean code and attention to detail. I'm proficient in modern CSS techniques including Flexbox, Grid, and CSS-in-JS solutions."
                    badges={["React", "Angular", "JavaScript", "TypeScript", "HTML5/CSS3", "TailwindCSS", "Responsive Design"]}
                  />
                  
                  <SkillCard 
                    title="Backend Development" 
                    icon="⚙️"
                    iconColor="green"
                    description="Developing robust server-side applications and APIs to power web applications."
                    details="I build scalable backend systems using Node.js, Express, and Spring Boot. I focus on creating well-structured, maintainable codebases with proper error handling and logging. My applications follow RESTful design principles and modern API best practices."
                    badges={["Node.js", "Express", "REST APIs", "Spring Boot", "GraphQL", "Authentication", "Server Architecture"]}
                  />
                  
                  <SkillCard 
                    title="Mobile Development" 
                    icon="📱"
                    iconColor="purple"
                    description="Creating native and cross-platform mobile applications for iOS and Android."
                    details="I develop mobile apps using React Native, with a focus on performance and native feel. I understand platform-specific design patterns and performance considerations while maintaining a shared codebase across platforms."
                    badges={["React Native", "iOS", "Android", "Mobile UI/UX", "Push Notifications"]}
                  />
                  
                  <SkillCard 
                    title="API Development" 
                    icon="🔌"
                    iconColor="orange"
                    description="Designing and implementing robust and well-documented APIs that connect systems."
                    details="I design and build RESTful and GraphQL APIs with a focus on performance, security, and developer experience. My APIs include comprehensive documentation, proper validation, rate limiting, and follow industry best practices."
                    badges={["REST", "GraphQL", "Swagger/OpenAPI", "API Security", "Rate Limiting", "Versioning"]}
                  />
                  
                  <SkillCard 
                    title="Web Development" 
                    icon="🌐"
                    iconColor="cyan"
                    description="Full-stack web development with a focus on modern technologies and frameworks."
                    details="I create complete web applications from concept to deployment, integrating frontend and backend systems. I'm experienced with modern web technologies and know how to optimize for performance, accessibility, and SEO."
                    badges={["Full-Stack", "Next.js", "SPA", "PWA", "Web Performance", "Accessibility", "SEO"]}
                  />
                </TabsContent>

                {/* Infrastructure Tab */}
                <TabsContent value="infrastructure" className="space-y-6">
                  <SkillCard 
                    title="DevOps" 
                    icon="🚀"
                    iconColor="red"
                    description="Implementing CI/CD pipelines and automating deployment processes."
                    details="I set up and maintain CI/CD pipelines using tools like GitHub Actions and GitLab CI/CD. I automate testing, building, and deployment processes to ensure reliable and consistent software delivery. My focus is on reducing manual steps and increasing development velocity."
                    badges={["CI/CD", "GitHub Actions", "Docker", "Terraform", "Automation"]}
                  />
                  
                  <SkillCard 
                    title="Cloud Computing" 
                    icon="☁️"
                    iconColor="blue"
                    description="Designing and implementing scalable cloud infrastructure on major platforms."
                    details="I work with AWS to create scalable, resilient infrastructure. I design systems that efficiently utilize cloud resources while maintaining cost-effectiveness. I implement infrastructure as code using tools like Terraform and CloudFormation."
                    badges={["AWS", "Serverless", "IaC", "Cloud Architecture"]}
                  />
                  
                  <SkillCard 
                    title="Version Control" 
                    icon="🔄"
                    iconColor="green"
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
                    iconColor="purple"
                    description="Creating efficient database schemas and optimizing database performance."
                    details="I design normalized database schemas with proper relationships and constraints. I optimize queries and database structure for performance and implement proper indexing strategies. I'm experienced with migrations, backups, and database maintenance tasks."
                    badges={["Database Architecture", "Schema Design", "Query Optimization", "Indexing", "Migrations"]}
                  />
                  
                  <SkillCard 
                    title="SQL Databases" 
                    icon="📊"
                    iconColor="blue"
                    description="Working with relational databases to store and retrieve structured data."
                    details="I work with PostgreSQL, MySQL, and MariaDB to build and maintain transactional database systems. I write complex SQL queries, stored procedures, and triggers. I focus on data integrity, performance, and security."
                    badges={["PostgreSQL", "MySQL", "MariaDB", "ACID Compliance", "Transactions", "Normalization"]}
                  />
                  
                  <SkillCard 
                    title="NoSQL Databases" 
                    icon="📄"
                    iconColor="orange"
                    description="Utilizing non-relational databases for flexible, scalable data storage."
                    details="I implement MongoDB, Redis, and other NoSQL solutions for scenarios that benefit from flexible schemas and horizontal scaling. I understand data modeling approaches for document, key-value, and graph databases."
                    badges={["MongoDB", "Redis"]}
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
// Skill Card component with modern design
const SkillCard = ({ 
  title, 
  icon, 
  iconColor,
  description, 
  details, 
  badges 
}: { 
  title: string; 
  icon: string; 
  iconColor: string;
  description: string; 
  details: string; 
  badges: string[] 
}) => {
  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 border-blue-200",
      green: "bg-green-100 border-green-200", 
      purple: "bg-purple-100 border-purple-200",
      orange: "bg-orange-100 border-orange-200",
      cyan: "bg-cyan-100 border-cyan-200",
      red: "bg-red-100 border-red-200"
    } as const;
    return colorMap[color as keyof typeof colorMap] || "bg-slate-100 border-slate-200";
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-0">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl ${getIconColorClasses(iconColor)} flex items-center justify-center text-2xl border-2 bg-white`}>
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-slate-300 text-sm">{description}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-6">
            {/* Details */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4">
              <p className="text-slate-700 leading-relaxed text-sm">{details}</p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge 
                    key={badge} 
                    className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 hover:from-slate-200 hover:to-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium shadow-sm transition-all duration-200"
                  >
                    {badge}
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

export default Skills;
