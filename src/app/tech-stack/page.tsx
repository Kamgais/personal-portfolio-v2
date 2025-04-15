
import { MoveLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const TechStack = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
            <MoveLeft size={15} />
          </Link>
          <h1 className="text-2xl font-bold ml-2">#TechStack</h1>
        </div>
      </div>

      {/* Intro section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-medium mb-6">
          Technology Expertise
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          My technical toolkit encompasses a wide range of technologies across frontend, backend, databases, and DevOps.
          Here's a comprehensive view of the technologies I work with and their roles in my development process.
        </p>
      </div>

      {/* Tech stack tabs */}
      <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="databases">Databases</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
        </TabsList>

        {/* Frontend Tab */}
        <TabsContent value="frontend" className="space-y-6">
          <TechCard 
            name="HTML"
            icon="https://img.icons8.com/color/96/000000/html-5.png"
            description="The foundation of web development, HTML provides the structure and semantic markup for all web content."
            details="I use HTML5 to create accessible, well-structured documents that form the backbone of user interfaces. I implement semantic elements to improve accessibility and SEO, ensuring content is properly structured and meaningful for both users and search engines."
          />
          
          <TechCard 
            name="CSS"
            icon="https://img.icons8.com/color/96/000000/css3.png"
            description="The styling language that transforms plain HTML into visually appealing interfaces."
            details="I leverage CSS3 to create responsive, visually consistent designs across devices. I implement modern techniques including Flexbox, Grid, and animations to create polished user experiences. I'm skilled at optimizing CSS for performance and maintainability."
          />
          
          <TechCard 
            name="JavaScript"
            icon="https://img.icons8.com/color/96/000000/javascript.png"
            description="The programming language of the web that brings interactivity and dynamic behavior to applications."
            details="I use JavaScript to create interactive web experiences, handling user interactions, manipulating the DOM, and implementing complex front-end logic. I'm proficient with modern ES6+ features, asynchronous programming patterns, and browser APIs."
          />
          
          <TechCard 
            name="TypeScript"
            icon="https://img.icons8.com/color/96/000000/typescript.png"
            description="A superset of JavaScript that adds static typing for improved code quality and developer experience."
            details="I leverage TypeScript to build scalable applications with better tooling, documentation, and error prevention. I use interfaces, type definitions, and generics to create self-documenting code that's easier to maintain and refactor."
          />
        </TabsContent>

        {/* Frameworks Tab */}
        <TabsContent value="frameworks" className="space-y-6">
          <TechCard 
            name="React"
            icon="https://img.icons8.com/color/96/000000/react-native.png"
            description="A JavaScript library for building user interfaces with a component-based architecture."
            details="I build scalable frontend applications using React's component model and virtual DOM. I'm experienced with React hooks, context API, and state management patterns to create maintainable, performant interfaces that provide excellent user experiences."
          />
          
          <TechCard 
            name="Next.js"
            icon="https://img.icons8.com/color/96/000000/nextjs.png"
            description="A React framework that enables server-side rendering and static site generation for improved performance and SEO."
            details="I utilize Next.js to create high-performance React applications with server-side rendering, static generation, and API routes. I leverage its routing system, image optimization, and incremental static regeneration for scalable, SEO-friendly applications."
          />
          
          <TechCard 
            name="Angular"
            icon="https://img.icons8.com/color/96/000000/angularjs.png"
            description="A comprehensive framework for building robust single-page applications with TypeScript."
            details="I develop enterprise applications with Angular's powerful features including dependency injection, reactive forms, and HTTP client. I implement modular architecture using Angular's module system and leverage RxJS for reactive programming patterns."
          />
          
          <TechCard 
            name="Tailwind CSS"
            icon="https://img.icons8.com/color/96/000000/tailwindcss.png"
            description="A utility-first CSS framework for rapidly building custom designs without leaving your HTML."
            details="I utilize Tailwind CSS for rapid UI development with its utility-first approach. I create consistent, responsive designs while maintaining complete control over the styling. I leverage Tailwind's customization capabilities to create unique design systems."
          />
          
          <TechCard 
            name="Redux"
            icon="https://img.icons8.com/color/96/000000/redux.png"
            description="A predictable state container for JavaScript apps, commonly used with React."
            details="I implement Redux for centralized state management in complex applications, using actions, reducers, and the store pattern. I'm experienced with Redux middleware like Redux Thunk and Redux Saga for handling asynchronous operations and side effects."
          />
        </TabsContent>

        {/* Backend Tab */}
        <TabsContent value="backend" className="space-y-6">
          <TechCard 
            name="Node.js"
            icon="https://img.icons8.com/color/96/000000/nodejs.png"
            description="A JavaScript runtime built on Chrome's V8 engine for building server-side applications."
            details="I build scalable backend services with Node.js, leveraging its non-blocking I/O model for high-performance applications. I implement RESTful APIs, real-time communication with WebSockets, and integrate with various databases and third-party services."
          />
          
          <TechCard 
            name="Express.js"
            icon="https://img.icons8.com/color/96/000000/express.png"
            description="A minimal and flexible Node.js web application framework for building APIs and web servers."
            details="I create robust RESTful APIs with Express.js, implementing middleware patterns, route handlers, and error management. I build scalable web servers with proper separation of concerns and security best practices."
          />
          
          <TechCard 
            name="NestJS"
            icon="https://img.icons8.com/color/96/000000/nestjs.png"
            description="A progressive Node.js framework for building efficient and scalable server-side applications."
            details="I leverage NestJS to build enterprise-grade backend applications with TypeScript, utilizing its modular architecture, dependency injection, and integrated testing utilities. I implement domain-driven design principles and SOLID patterns for maintainable codebases."
          />
          
          <TechCard 
            name="Spring Boot"
            icon="https://img.icons8.com/color/96/000000/spring-logo.png"
            description="A Java-based framework for building production-ready applications with minimal configuration."
            details="I develop robust, enterprise-grade backend services with Spring Boot, implementing dependency injection, aspect-oriented programming, and integrated security. I build RESTful APIs leveraging Spring Data for database access and Spring Security for authentication."
          />
          
          <TechCard 
            name="Java"
            icon="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
            description="A versatile, object-oriented programming language widely used for enterprise applications."
            details="I use Java to build reliable, maintainable backend systems with its strong typing and object-oriented paradigm. I leverage Java's rich ecosystem of libraries and frameworks for various purposes from data processing to enterprise applications."
          />
        </TabsContent>

        {/* Databases Tab */}
        <TabsContent value="databases" className="space-y-6">
          <TechCard 
            name="MongoDB"
            icon="https://img.icons8.com/color/96/000000/mongodb.png"
            description="A NoSQL document database with JSON-like documents for flexible and scalable data storage."
            details="I use MongoDB for applications requiring flexible schema design and horizontal scaling. I implement data modeling best practices for document databases, and leverage MongoDB's aggregation framework and indexing capabilities for optimized queries."
          />
          
          <TechCard 
            name="PostgreSQL"
            icon="https://img.icons8.com/color/96/000000/postgreesql.png"
            description="A powerful, open-source object-relational database system with a strong reputation for reliability."
            details="I leverage PostgreSQL for applications requiring robust transactional support, complex queries, and data integrity. I design normalized database schemas, implement advanced SQL features, and optimize query performance for scalable applications."
          />
          
          <TechCard 
            name="MySQL"
            icon="https://img.icons8.com/color/96/000000/mysql-logo.png"
            description="A widely used open-source relational database management system."
            details="I implement MySQL for web applications requiring reliable data storage with ACID compliance. I design efficient database schemas, write optimized queries, and implement proper indexing strategies for improved performance."
          />
          
          <TechCard 
            name="Firebase"
            icon="https://img.icons8.com/color/96/000000/firebase.png"
            description="A platform developed by Google for creating mobile and web applications with built-in backend services."
            details="I utilize Firebase for rapid application development, leveraging its real-time database, authentication services, cloud functions, and hosting. I implement security rules for data protection and use Firebase analytics for user insights."
          />
        </TabsContent>

        {/* DevOps Tab */}
        <TabsContent value="devops" className="space-y-6">
          <TechCard 
            name="Docker"
            icon="https://img.icons8.com/color/96/000000/docker.png"
            description="A platform for developing, shipping, and running applications in containers."
            details="I containerize applications with Docker for consistent environments across development, testing, and production. I create optimized Dockerfiles, implement multi-container applications with Docker Compose, and follow best practices for secure, efficient containers."
          />
          
          <TechCard 
            name="Kubernetes"
            icon="https://img.icons8.com/color/96/000000/kubernetes.png"
            description="An open-source platform for automating deployment, scaling, and management of containerized applications."
            details="I orchestrate containerized applications with Kubernetes, implementing deployments, services, and ingress resources. I configure persistent storage, secrets management, and horizontal pod autoscaling for resilient, scalable applications."
          />
          
          <TechCard 
            name="AWS"
            icon="https://img.icons8.com/color/96/000000/amazon-web-services.png"
            description="A comprehensive cloud computing platform offering over 200 fully featured services."
            details="I architect and deploy applications on AWS, leveraging services like EC2, S3, Lambda, and RDS. I implement infrastructure as code, configure auto-scaling, and deploy serverless architectures for optimal cost and performance."
          />
          
          <TechCard 
            name="Terraform"
            icon="https://img.icons8.com/color/96/000000/terraform.png"
            description="An open-source infrastructure as code software tool for managing cloud resources."
            details="I provision and manage infrastructure with Terraform, defining resources as code for AWS, Azure, and other providers. I implement modular configurations, state management strategies, and CI/CD integration for reliable infrastructure deployment."
          />
          
          <TechCard 
            name="Git"
            icon="https://img.icons8.com/color/96/000000/git.png"
            description="A distributed version control system for tracking changes in source code during software development."
            details="I manage source code with Git using branching strategies like GitFlow or trunk-based development. I implement code reviews, handle merge conflicts, and maintain clean commit history for collaborative development."
          />
          
          <TechCard 
            name="GitHub Actions"
            icon="https://img.icons8.com/color/96/000000/jenkins.png"
            description="A CI/CD platform integrated with GitHub for automating software workflows."
            details="I automate build, test, and deployment pipelines with GitHub Actions, defining workflows as code. I implement test automation, artifact publishing, and deployment to various environments for reliable software delivery."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Tech Card component with detailed information
const TechCard = ({ 
  name, 
  icon, 
  description, 
  details 
}: { 
  name: string; 
  icon: string; 
  description: string; 
  details: string; 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-100">
            <img 
              src={icon} 
              alt={`${name} icon`} 
              className="object-contain absolute inset-0 w-full h-full p-1" 
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-medium text-slate-800 mb-2">{name}</h3>
            <p className="text-slate-600 mb-4">{description}</p>
            <div className="text-sm text-slate-700 bg-slate-50 p-4 rounded-md leading-relaxed">
              {details}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;
