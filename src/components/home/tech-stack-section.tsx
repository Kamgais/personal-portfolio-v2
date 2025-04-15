
  
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

    
   <div className="relative">
   <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
   <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
    <div className="flex space-x-8 animate-marquee w-full ">
      {techStack.map((tech, index) => (
   
          <img src={tech.icon} alt={tech.name} className=" w-15" key={index} />

      ))}
    </div>
    </div>
  )
}
