
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
      period: "September 2023 - Present",
      status: "Current"
    },
    {
      logo: "/thb.png",
      name: "Brandenburg University of Applied Sciences",
      diplom: "Bachelor of Science in Computer Science",
      period: "September 2020 - September 2023",
      status: "Completed"
    },
    {
      logo: "/sprache.png",
      name: "Mariaspring Adult Education Centre",
      diplom: "Certificate of German Language Proficiency - Level C1",
      period: "April 2019 - June 2019",
      status: "Completed"
    },
    {
      logo: "/sprache.png",
      name: "Mariaspring Adult Education Centre",
      diplom: "Certificate of German Language Proficiency - Level B2-2",
      period: "February 2019 - April 2019",
      status: "Completed"
    },
    {
      logo: "/ila.jpeg",
      name: "German Language Institute (I.L.A) Douala",
      diplom: "Certificate of German Language Proficiency – Level (A1,A2,B1,B2)",
      period: "October 2017 - September 2018",
      status: "Completed"
    },
    {
      logo: "/gymnasium.jpg",
      name: "Nylon Ndogpassi Bilingual High School",
      diplom: "Scientific Baccalaureate with a specialization in Mathematics and Physics",
      period: "September 2010 - September 2017",
      status: "Completed"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/20 backdrop-blur-lg bg-white/80 shadow-sm">
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
            <GraduationCap className="w-4 h-4" />
            Educational Background
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Education
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey in computer science and language learning, 
            building a strong foundation for modern software development and international communication.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <Tabs defaultValue="academic" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8 w-full h-12">
                  <TabsTrigger value="academic" className="flex items-center gap-2 text-sm font-medium">
                    <School className="h-4 w-4" />
                    Academic Education
                  </TabsTrigger>
                  <TabsTrigger value="language" className="flex items-center gap-2 text-sm font-medium">
                    <BookOpen className="h-4 w-4" />
                    Language Certifications
                  </TabsTrigger>
                </TabsList>
          
                <TabsContent value="academic" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {academicEducations.map((education, index) => (
                      <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-white/20 bg-white/60 backdrop-blur-sm">
                        <CardHeader className="border-b border-slate-100">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-slate-200 flex-shrink-0">
                              <img 
                                src={education.logo} 
                                alt={`${education.name} logo`} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg font-semibold text-slate-900 leading-tight">
                                {education.name}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="h-4 w-4 text-blue-500" />
                                <CardDescription className="text-slate-600 font-medium">
                                  {education.period}
                                </CardDescription>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  education.status === 'Current' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {education.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="font-semibold text-blue-600 mb-3">{education.diplom}</div>
                          <div className="text-sm text-slate-700 leading-relaxed">
                            {education.diplom.includes("Master") ? (
                              <p>Pursuing advanced studies in Computer Science with focus on software engineering, advanced algorithms, distributed systems, and cloud computing technologies.</p>
                            ) : education.diplom.includes("Bachelor") ? (
                              <p>Completed comprehensive studies in computer science covering programming fundamentals, data structures, algorithms, databases, web development, and cloud architecture.</p>
                            ) : (
                              <p>Completed high school education with strong focus on mathematics, physics and science disciplines, providing a solid foundation for technical studies.</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="language" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {languageEducations.map((education, index) => (
                      <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-white/20 bg-white/60 backdrop-blur-sm">
                        <CardHeader className="border-b border-slate-100">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-slate-200 flex-shrink-0">
                              <img 
                                src={education.logo} 
                                alt={`${education.name} logo`} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg font-semibold text-slate-900 leading-tight">
                                {education.name}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="h-4 w-4 text-green-500" />
                                <CardDescription className="text-slate-600 font-medium">
                                  {education.period}
                                </CardDescription>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                  {education.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="font-semibold text-green-600 mb-3">{education.diplom}</div>
                          <div className="text-sm text-slate-700 leading-relaxed">
                            {education.diplom.includes("C1") ? (
                              <p>Advanced German language proficiency with the ability to understand complex texts, express ideas fluently, and communicate effectively in academic and professional contexts.</p>
                            ) : education.diplom.includes("B2") ? (
                              <p>Upper-intermediate level German language skills, capable of clear communication on concrete and abstract topics with good grammatical accuracy.</p>
                            ) : (
                              <p>Progressive German language acquisition from beginner to upper-intermediate level, covering all essential communication skills including listening, speaking, reading, and writing.</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Academic Achievements Section */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-100">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Academic Achievements</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Bachelor's Degree Excellence</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Successfully completed a Bachelor's degree in Computer Science with specialization in Cloud Computing 
                      at Brandenburg University of Applied Sciences, demonstrating strong academic performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Practical Project Excellence</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Completed numerous practical projects focusing on software engineering, programming, cybersecurity, 
                      and cloud infrastructure, both individually and in collaborative team environments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Technical Expertise</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Graduated with strong performance in core areas including software development, programming, 
                      IT security, cloud architecture, DevOps practices, and distributed systems design.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
