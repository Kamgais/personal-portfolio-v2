
import { GraduationCap, Calendar, School, Award, BookOpen, MoveLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const Education = () => {
  const educations = [
    {
      logo: "/thb.png",
      name: "Brandenburg University of Applied Sciences",
      diplom: "Master of Science in Computer Science",
      period: "September 2023 - Present"
    },
    {
      logo: "/thb.png",
      name: "Brandenburg University of Applied Sciences",
      diplom: "Bachelor of Science in Computer Science",
      period: "September 2020 - September 2023"
    },
    {
      logo: "/sprache.png",
      name: "Mariaspring Adult Education Centre",
      diplom: "Certificate of German Language Proficiency - Level C1",
      period: "April 2019 - June 2019"
    },
    {
      logo: "/sprache.png",
      name: "Mariaspring Adult Education Centre",
      diplom: "Certificate of German Language Proficiency - Level B2-2",
      period: "Februar 2019 - April 2019"
    },
    {
      logo: "/ila.jpeg",
      name: "German Language Institute (I.L.A) Douala",
      diplom: "Certificate of German Language Proficiency – Level (A1,A2,B1,B2)",
      period: "October 2017 - September 2018"
    },
    {
      logo: "/gymnasium.jpg",
      name: "Nylon Ndogpassi Bilingual High School",
      diplom: "Scientific Baccalaureate with a specialization in Mathematics and Physics",
      period: "September 2010 - September 2017"
    },
  ];

  // Filter educations by type
  const academicEducations = educations.filter(edu => 
    edu.diplom.includes("Science") || edu.diplom.includes("Baccalaureate")
  );
  
  const languageEducations = educations.filter(edu => 
    edu.diplom.includes("German Language")
  );

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-5xl mx-auto">
        {/* <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GraduationCap className="h-8 w-8" />
            Education
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
          <h1 className="text-2xl font-bold ml-2">#Education</h1>
        </div>
      </div>

        <Tabs defaultValue="academic" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="academic" className="flex items-center gap-2">
              <School className="h-4 w-4" />
              Academic
            </TabsTrigger>
            <TabsTrigger value="language" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Language
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="academic" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicEducations.map((education, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                      <GraduationCap className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{education.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />{education.period}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium text-purple-600">{education.diplom}</div>
                    <div className="mt-2 text-sm text-gray-600">
                      {education.diplom.includes("Master") ? (
                        <p>Pursuing advanced studies in Computer Science with focus on software engineering, advanced algorithms, and distributed systems.</p>
                      ) : education.diplom.includes("Bachelor") ? (
                        <p>Completed foundational studies in computer science covering programming fundamentals, data structures, databases, and web development.</p>
                      ) : (
                        <p>Completed high school education with strong focus on mathematics, physics and science disciplines.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="language" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languageEducations.map((education, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                      <BookOpen className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{education.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />{education.period}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium text-blue-600">{education.diplom}</div>
                    <div className="mt-2 text-sm text-gray-600">
                      {education.diplom.includes("C1") ? (
                        <p>Advanced German language proficiency with the ability to understand complex texts and express ideas fluently.</p>
                      ) : education.diplom.includes("B2") ? (
                        <p>Upper-intermediate level German language skills, capable of clear communication on concrete and abstract topics.</p>
                      ) : (
                        <p>Progressive German language acquisition from beginner to upper-intermediate level, covering all essential communication skills.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            Academic Achievements
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-amber-500">•</div>
              <div>
                <span className="font-medium">Bachelor&apos;s degree</span> - Successfully completed a Bachelor&apos;s degree in Computer Science with a specialization in Cloud Computing at THB (Technische Hochschule Brandenburg).
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-amber-500">•</div>
              <div>
                <span className="font-medium">Academic Projects</span> - Completed several practical projects during the program, focusing on software engineering, programming, cybersecurity, and cloud infrastructure, both individually and in teams.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-amber-500">•</div>
              <div>
                <span className="font-medium">Skills</span> - Graduated with strong performance in core areas such as software development, programming, IT security, cloud architecture, DevOps, and distributed systems.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
