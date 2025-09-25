

const skills = [
  {
    title: "Frontend Development",
    desc: "I build dynamic, interactive, and responsive UIs with React, Next.js, and other modern frontend frameworks. I bring designs to life and optimize user experiences.",
    icon: "📱"
  },
  {
    title: "Backend Development",
    desc: "I create robust and scalable backends using Node.js, Express, and databases like MongoDB or SQL. I handle data management, user authentication, and server-side logic.",
    icon: "⚙️"
  },
  {
    title: "Database Design & Management",
    desc: "I design efficient database structures, optimize queries, and ensure data integrity. I manage both relational and NoSQL databases like MySQL, MongoDB, and PostgreSQL.",
    icon: "🗄️"
  },
  {
    title: "Web Development",
    desc: "I develop full-stack web applications using modern technologies like React, Node.js, and Express. I ensure seamless communication between frontend and backend.",
    icon: "🌐"
  },
  {
    title: "Mobile Development",
    desc: "I create mobile apps using React Native or Flutter, ensuring smooth performance and responsive design on both iOS and Android platforms.",
    icon: "📱"
  },
 
  {
    title: "Version Control",
    desc: "I master version control with Git and GitHub to collaborate seamlessly with teams, track changes, and ensure smooth deployment pipelines.",
    icon: "🔄"
  },
  {
    title: "DevOps",
    desc: "I implement CI/CD pipelines to automate testing and deployment. I use Docker and cloud services to manage infrastructure and ensure scalability.",
    icon: "☁️"
  },
  {
    title: "API Development",
    desc: "I design and implement RESTful and GraphQL APIs for efficient data exchange between frontend and backend, optimizing for performance and security.",
    icon: "🔌"
  },
  {
    title: "Cloud Computing",
    desc: "I deploy, scale, and manage applications on cloud platforms like AWS, Google Cloud, or Azure. I handle serverless architecture and cloud functions for greater flexibility.",
    icon: "☁️"
  },
  {
    title: "Cross-Platform Development",
    desc: "I build apps that run seamlessly across multiple platforms (iOS, Android, Web) using frameworks like React Native, Flutter, and other cross-platform tools.",
    icon: "🌍"
  },
  {
    title: "Testing & Debugging",
    desc: "I write automated tests, debug code, and ensure your apps run flawlessly. I use tools like Jest, Mocha, and Chrome DevTools for bug tracking and code quality.",
    icon: "🐞"
  },
  {
    title: "Web Security",
    desc: "I implement security best practices to protect web applications from threats like XSS, CSRF, and SQL Injection. I use HTTPS, OAuth, and JWT for secure user authentication.",
    icon: "🔒"
  },
  {
    title: "Performance Optimization",
    desc: "I optimize web and mobile apps to load faster, reduce latency, and improve overall performance. I work with techniques like lazy loading, code splitting, and asset compression.",
    icon: "🚀"
  },
  {
    title: "E-commerce Development",
    desc: "I build e-commerce platforms with features like shopping carts, payment processing, and product management. I integrate third-party services like Stripe and PayPal.",
    icon: "🛒"
  },
  {
    title: "Content Management Systems (CMS)",
    desc: "I develop custom CMS solutions using platforms like WordPress, Strapi, or Contentful. I create flexible, scalable systems for managing dynamic content.",
    icon: "📝"
  },
  {
    title: "Serverless Architecture",
    desc: "I build scalable apps without managing infrastructure using serverless platforms like AWS Lambda, Firebase, and Netlify Functions.",
    icon: "⚡"
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "I optimize websites for search engines by improving site structure, content quality, and keyword targeting. I implement SEO best practices to drive organic traffic.",
    icon: "🔍"
  },
  {
    title: "Agile Development",
    desc: "I follow Agile methodologies like Scrum or Kanban to manage projects, deliver iteratively, and improve continuously based on user feedback.",
    icon: "📈"
  },
  {
    title: "Web Accessibility (a11y)",
    desc: "I ensure that websites and apps are accessible to users with disabilities by implementing WCAG guidelines, using screen readers, and ensuring keyboard navigation.",
    icon: "♿"
  }
];

export default function SkillsSection() {
  return (
    <div className="flex gap-2 sm:gap-3 flex-wrap">
      {
        skills.slice(0,9).map((skill,index) => (
          <div key={index} className="rounded-xl p-2 sm:p-3 bg-white shadow-accent-foreground border text-xs sm:text-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <span className="text-sm sm:text-base">{skill.icon}</span> {skill.title}
          </div>
        ))
      }
    </div>
  )
}
