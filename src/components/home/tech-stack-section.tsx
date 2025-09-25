
  
const techStack = [
  // Frontend
  { name: "HTML", icon: "https://img.icons8.com/color/96/000000/html-5.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/96/000000/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/96/000000/javascript.png" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/96/000000/typescript.png" },
  
  // Frontend Frameworks
  { name: "React", icon: "https://img.icons8.com/color/96/000000/react-native.png" },
  { name: "Next.js", icon: "https://img.icons8.com/color/96/000000/nextjs.png" },
  { name: "Angular", icon: "https://img.icons8.com/color/96/000000/angularjs.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/000000/tailwindcss.png" },
  { name: "Redux", icon: "https://img.icons8.com/color/96/000000/redux.png" },
  
  // Backend
  { name: "Node.js", icon: "https://img.icons8.com/color/96/000000/nodejs.png" },
  { name: "Express.js", icon: "https://img.icons8.com/color/96/000000/express.png" },
  { name: "NestJS", icon: "https://img.icons8.com/color/96/000000/nestjs.png" },
  { name: "Spring Boot", icon: "https://img.icons8.com/color/96/000000/spring-logo.png" },
  { name: "Java", icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" },
  
  // Databases
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/000000/mongodb.png" },
  { name: "PostgreSQL", icon: "https://img.icons8.com/color/96/000000/postgreesql.png" },
  { name: "MySQL", icon: "https://img.icons8.com/color/96/000000/mysql-logo.png" },
  { name: "Firebase", icon: "https://img.icons8.com/color/96/000000/firebase.png" },
  
  // DevOps Tools
  { name: "Docker", icon: "https://img.icons8.com/color/96/000000/docker.png" },
  { name: "Kubernetes", icon: "https://img.icons8.com/color/96/000000/kubernetes.png" },
  { name: "AWS", icon: "https://img.icons8.com/color/96/000000/amazon-web-services.png" },
  { name: "Terraform", icon: "https://img.icons8.com/color/96/000000/terraform.png" },
  { name: "GitHub", icon: "https://img.icons8.com/color/96/000000/github.png" },
  { name: "GitHub Actions", icon: "https://img.icons8.com/color/96/000000/jenkins.png" },
  { name: "GitLab CI/CD", icon: "https://img.icons8.com/color/96/000000/gitlab.png" },
  { name: "Grafana", icon: "https://img.icons8.com/color/96/000000/grafana.png" },
  
  // Additional Tools
  { name: "Git", icon: "https://img.icons8.com/color/96/000000/git.png" },
  { name: "npm", icon: "https://img.icons8.com/color/96/000000/npm.png" },
  { name: "Webpack", icon: "https://img.icons8.com/color/96/000000/webpack.png" },
  { name: "VS Code", icon: "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png" },
];

export default function TechStackSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur-sm">
      {/* Enhanced gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-50 via-purple-50/80 to-transparent z-10"></div>
      
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Technologies I Work With
        </h3>
        <p className="text-gray-600 text-lg">A comprehensive toolkit for building modern solutions</p>
      </div>

      {/* Double marquee for seamless infinite scroll */}
      <div className="flex">
        <div className="animate-marquee flex">
          {techStack.map((tech, index) => (
            <div key={`first-${index}`} className="inline-flex items-center mx-8 flex-shrink-0 group">
              <div className="relative p-2">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Tooltip on hover */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex" aria-hidden="true">
          {techStack.map((tech, index) => (
            <div key={`second-${index}`} className="inline-flex items-center mx-8 flex-shrink-0 group">
              <div className="relative p-2">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
