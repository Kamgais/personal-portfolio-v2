import { Award, Calendar, BookText, BadgeCheck, Filter, MoveLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";


interface Certification {
  logo: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  credential: string;
  skills: string[]
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      logo: "/aws-certified.png",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "January 2023",
      category: "cloud",
      credential: "AWS-ASA-00123456",
      skills: ["Cloud Architecture", "AWS Services", "Infrastructure Design"]
    },
    {
      logo: "/scrum-master.png",
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "March 2022",
      category: "methodology",
      credential: "PSM-I-123456",
      skills: ["Agile Methodologies", "Team Management", "Sprint Planning"]
    },
    {
      logo: "/google-cloud.png",
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "June 2023",
      category: "cloud",
      credential: "GCP-PD-123456",
      skills: ["GCP Services", "Cloud Development", "Containerization"]
    },
    {
      logo: "/react-dev.png",
      name: "React Developer Certification",
      issuer: "React Training",
      date: "October 2022",
      category: "development",
      credential: "REACT-DEV-123456",
      skills: ["React.js", "Redux", "JavaScript", "Frontend Development"]
    },
    {
      logo: "/microsoft-azure.png",
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "December 2022",
      category: "cloud",
      credential: "AZ-900-123456",
      skills: ["Azure Services", "Cloud Fundamentals", "Infrastructure as Code"]
    },
    {
      logo: "/cka.png",
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "April 2023",
      category: "devops",
      credential: "CKA-1234-5678-9101",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"]
    },
  ];

  const cloudCertifications = certifications.filter(cert => cert.category === "cloud");
  const developmentCertifications = certifications.filter(cert => 
    cert.category === "development" || cert.category === "devops"
  );
  const methodologyCertifications = certifications.filter(cert => cert.category === "methodology");

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-5xl mx-auto">
        {/* <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Award className="h-8 w-8 text-purple-500" />
            Professional Certifications
          </h1>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div> */}
         <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
            <MoveLeft size={15} />
          </Link>
          <h1 className="text-2xl font-bold ml-2">#Certifications</h1>
        </div>
      </div>

        {/* <EducationNav /> */}

        <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
            <BadgeCheck className="h-5 w-5" />
            About My Certifications
          </h2>
          <p className="text-gray-700">
            Throughout my professional journey, I&apos;ve pursued certifications that enhance my skills and validate my expertise in various domains. 
            These certifications represent my commitment to continuous learning and professional development in cloud technologies, 
            software development methodologies, and specialized technical skills.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              All Certifications
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex items-center gap-2">
              <BookText className="h-4 w-4" />
              Cloud
            </TabsTrigger>
            <TabsTrigger value="development" className="flex items-center gap-2">
              <BookText className="h-4 w-4" />
              Development
            </TabsTrigger>
            <TabsTrigger value="methodology" className="flex items-center gap-2">
              <BookText className="h-4 w-4" />
              Methodology
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((certification, index) => (
                <CertificationCard key={index} certification={certification} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cloud" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cloudCertifications.map((certification, index) => (
                <CertificationCard key={index} certification={certification} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="development" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentCertifications.map((certification, index) => (
                <CertificationCard key={index} certification={certification} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="methodology" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methodologyCertifications.map((certification, index) => (
                <CertificationCard key={index} certification={certification} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <Filter className="h-5 w-5" />
            Certification Benefits
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-blue-500">•</div>
              <div>
                <span className="font-medium">Industry Recognition</span> - Certifications validate skills and knowledge to potential employers and clients
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-blue-500">•</div>
              <div>
                <span className="font-medium">Specialized Knowledge</span> - In-depth understanding of specific technologies and methodologies
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-blue-500">•</div>
              <div>
                <span className="font-medium">Career Advancement</span> - Enhanced professional credibility and opportunities for career growth
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
          <Award className="h-6 w-6 text-gray-500" />
        </div>
        <div>
          <CardTitle className="text-lg">{certification.name}</CardTitle>
          <CardDescription className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />{certification.date}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="font-medium text-gray-600 mb-2">Issued by: {certification.issuer}</div>
        <div className="text-sm text-gray-500 mb-3">Credential ID: {certification.credential}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {certification.skills.map((skill: string, idx: number) => (
            <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Certifications;
