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
   <div className="flex flex-col xl:flex-row gap-4 lg:mt-16 mt-5 items-center">
    <div className="xl:w-[250px] xl:fixed xl:top-16 w-full">
    <ProfileSidebar/>
    </div>
      <div className="xl:w-[70%] w-[100%] flex flex-col gap-10  xl:ml-[275px]">
          <Section title="about" moreHref="/about">
            <AboutSection/>
          </Section>
          <Section title="skills" moreHref="/skills">
            <SkillsSection/>
          </Section>
          <Section title="experiences" moreHref="/experiences">
            <ExperienceSection/>
          </Section>
          <Section title="tech stack" moreHref="/tech-stack">
            <TechStackSection/>
          </Section>
          <Section title="projects" moreHref="/projects">
            <ProjectsSection/>
          </Section>
          <Section title="education" moreHref="/education">
            <EductationSection/>
          </Section>
          <Section title="certifications" moreHref="/certifications">
            <CertificationsSection/>
          </Section>
          <Section title="links" moreLink={false}>
            <LinksSection/>
          </Section>
          <Section title="contact me" moreLink={false}>
            <ContactMeSection/>
          </Section>
      </div>
   </div>
  );
}
