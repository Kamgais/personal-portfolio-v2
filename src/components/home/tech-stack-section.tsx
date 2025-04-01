
  
  const techStack = [
    { name: "HTML", icon: "https://img.icons8.com/color/96/000000/html.png" },
    { name: "Css", icon: "https://img.icons8.com/color/96/000000/css.png" },
    { name: "Javascript", icon: "https://img.icons8.com/color/96/000000/javascript.png" },
    { name: "TypeScript", icon: "https://img.icons8.com/color/96/000000/typescript.png" },
    { name: "React", icon: "https://img.icons8.com/color/96/000000/react-native.png" },
    { name: "Nextjs", icon: "https://img.icons8.com/color/96/000000/nextjs.png" },
    { name: "Angular", icon: "https://img.icons8.com/color/96/000000/angularjs.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/000000/tailwindcss.png" },
    { name: "Node.js", icon: "https://img.icons8.com/color/96/000000/nodejs.png" },
    { name: "Spring Boot", icon: "https://img.icons8.com/color/96/000000/nodejs.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/96/000000/mongodb.png" },
    { name: "Docker", icon: "https://img.icons8.com/color/96/000000/docker.png" },
    { name: "Firebase", icon: "https://img.icons8.com/color/96/000000/firebase.png" },
    { name: "GitHub", icon: "https://img.icons8.com/color/96/000000/github.png" },
  ];

export default function TechStackSection() {
  return (

    
   <div className="relative">
   <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
   <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
    <div className="flex space-x-8 animate-marquee w-full ">
      {techStack.concat(techStack).map((tech, index) => (
   
          <img src={tech.icon} alt={tech.name} className=" w-15" key={index} />

      ))}
    </div>
    </div>
  )
}
