import { Award, Calendar, BookText, BadgeCheck, MoveLeft, Clock, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Certifications = () => {
  // Currently working on these certifications
  const upcomingCertifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      expectedDate: "Q1 2026",
      category: "cloud",
      skills: ["Advanced AWS Architecture", "Multi-tier Applications", "Cost Optimization"]
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      expectedDate: "Q2 2026",
      category: "devops",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management"]
    },
    {
      name: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      expectedDate: "Q1 2026",
      category: "cloud",
      skills: ["Azure Services", "Cloud Development", "API Management"]
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud Platform",
      expectedDate: "Q2 2026",
      category: "cloud",
      skills: ["GCP Architecture", "Infrastructure Design", "Security Implementation"]
    }
  ];

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
            <Award className="w-4 h-4" />
            Professional Development
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Certifications
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Currently pursuing industry-recognized certifications to validate expertise and 
            enhance skills in cloud technologies, development practices, and modern software architecture.
          </p>
        </div>

        <div className="space-y-8">
          {/* Coming Soon Section */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Currently Pursuing</h2>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">In Progress</Badge>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                I&apos;m actively working towards obtaining these professional certifications to deepen my expertise 
                in cloud architecture, container orchestration, and enterprise-level solution design.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {upcomingCertifications.map((cert, index) => (
                  <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-white/20 bg-white/60 backdrop-blur-sm">
                    <CardHeader className="border-b border-slate-100">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-slate-900 leading-tight mb-2">
                            {cert.name}
                          </CardTitle>
                          <CardDescription className="text-slate-600 font-medium">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span className="text-slate-600 font-medium">{cert.expectedDate}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} className="bg-white/80 text-slate-700 border-slate-200 font-medium">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Target className="h-4 w-4 text-green-500" />
                        <span>Preparation in progress</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certification Benefits Section */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100">
                  <BadgeCheck className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Why Certifications Matter</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                  <h3 className="font-semibold text-slate-900 mb-3">Industry Recognition</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Certifications validate technical skills and knowledge, providing credibility 
                    with employers, clients, and peers in the industry.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                  <h3 className="font-semibold text-slate-900 mb-3">Specialized Expertise</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Deep dive into specific technologies and methodologies, ensuring 
                    comprehensive understanding and practical application skills.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
                  <h3 className="font-semibold text-slate-900 mb-3">Career Advancement</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Enhanced professional credibility opens doors to new opportunities 
                    and demonstrates commitment to continuous learning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Approach Section */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100">
                  <BookText className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">My Certification Journey</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Hands-on Practice</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Combining theoretical study with practical implementation through labs, 
                      personal projects, and real-world scenarios to solidify understanding.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Structured Learning Path</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Following comprehensive study plans that cover all exam objectives 
                      while building practical skills applicable to real-world projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Continuous Updates</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Staying current with the latest technology updates, best practices, 
                      and industry standards to ensure certifications remain relevant and valuable.
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

export default Certifications;
