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
import ScrollAnimation from "@/components/common/scroll-animation";
import FloatingElements from "@/components/common/floating-elements";
import ParallaxBackground from "@/components/common/parallax-background";
import PageLoadAnimation from "@/components/common/page-load-animation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-800/20 relative transition-colors duration-500 overflow-hidden">
      {/* Parallax background elements */}
      <ParallaxBackground />
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-4 sm:py-6 lg:py-8">
          {/* Profile Sidebar */}
          <PageLoadAnimation animation="slide-right" delay={100} duration={700}>
            <ScrollAnimation animation="fade-right" duration={700} className="lg:w-80 lg:sticky lg:top-8 lg:self-start">
              <ProfileSidebar />
            </ScrollAnimation>
          </PageLoadAnimation>
          
          {/* Main Content */}
          <div className="flex-1 lg:max-w-4xl">
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <PageLoadAnimation animation="slide-up" delay={200} duration={600}>
                <ScrollAnimation animation="fade-up" delay={200} duration={600}>
                  <Section title="about" moreHref="/about">
                    <AboutSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="slide-left" delay={300} duration={700}>
                <ScrollAnimation animation="fade-left" delay={100} duration={700}>
                  <Section title="skills" moreHref="/skills">
                    <SkillsSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="fade-scale" delay={400} duration={600}>
                <ScrollAnimation animation="scale" delay={150} duration={600}>
                  <Section title="experiences" moreHref="/experiences">
                    <ExperienceSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="slide-right" delay={500} duration={700}>
                <ScrollAnimation animation="fade-right" delay={100} duration={700}>
                  <Section title="tech stack" moreHref="/tech-stack">
                    <TechStackSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="bounce-in" delay={600} duration={600}>
                <ScrollAnimation animation="fade-up" delay={200} duration={600}>
                  <Section title="projects" moreHref="/projects">
                    <ProjectsSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="slide-left" delay={700} duration={700}>
                <ScrollAnimation animation="fade-left" delay={150} duration={700}>
                  <Section title="education" moreHref="/education">
                    <EductationSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="fade-scale" delay={800} duration={600}>
                <ScrollAnimation animation="scale" delay={100} duration={600}>
                  <Section title="certifications" moreHref="/certifications">
                    <CertificationsSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="slide-up" delay={900} duration={600}>
                <ScrollAnimation animation="fade-up" delay={200} duration={600}>
                  <Section title="links" moreLink={false}>
                    <LinksSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
              
              <PageLoadAnimation animation="bounce-in" delay={1000} duration={700}>
                <ScrollAnimation animation="scale" delay={300} duration={700}>
                  <Section title="contact me" moreLink={false}>
                    <ContactMeSection />
                  </Section>
                </ScrollAnimation>
              </PageLoadAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
