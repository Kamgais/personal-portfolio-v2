import ProfileSidebar from "@/components/common/profile-sidebar";
import Section from "@/components/common/section";
import AboutSection from "@/components/home/about-section";
import CertificationsSection from "@/components/home/certifications-section";
import ContactMeSection from "@/components/home/contact-me-section";
import EductationSection from "@/components/home/education-section";
import ExperienceSection from "@/components/home/experience-section";
import LinksSection from "@/components/home/links-section";
import ProjectsSection from "@/components/home/projects-section";
import SkillsSection from "@/components/home/skills-section";
import TechStackSection from "@/components/home/tech-stack-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-8 py-8 justify-center">
          {/* Profile Sidebar */}
          <div className="xl:w-80 xl:sticky xl:top-8 xl:self-start">
            <ProfileSidebar />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 xl:max-w-4xl mx-auto">
            <div className="space-y-12">
              <Section title="about" moreHref="/about">
                <AboutSection />
              </Section>
              
              <Section title="skills" moreHref="/skills">
                <SkillsSection />
              </Section>
              
              <Section title="experiences" moreHref="/experiences">
                <ExperienceSection />
              </Section>
              
              <Section title="tech stack" moreHref="/tech-stack">
                <TechStackSection />
              </Section>
              
              <Section title="projects" moreHref="/projects">
                <ProjectsSection />
              </Section>
              
              <Section title="education" moreHref="/education">
                <EductationSection />
              </Section>
              
              <Section title="certifications" moreHref="/certifications">
                <CertificationsSection />
              </Section>
              
              <Section title="links" moreLink={false}>
                <LinksSection />
              </Section>
              
              <Section title="contact me" moreLink={false}>
                <ContactMeSection />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
