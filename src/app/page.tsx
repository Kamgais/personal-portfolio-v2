import ProfileSidebar from "@/components/common/profile-sidebar";
import Section from "@/components/common/section";
import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectsSection from "@/components/home/projects-section";
import SkillsSection from "@/components/home/skills-section";
import TechStackSection from "@/components/home/tech-stack-section";


export default function Home() {
  return (
   <div className="flex flex-col lg:flex-row gap-4 mt-16">
    <div className="w-[15%] fixed">
    <ProfileSidebar/>
    </div>
      <div className="w-[70%] flex flex-col gap-10 ml-64">
          <Section title="about">
            <AboutSection/>
          </Section>
          <Section title="skills">
            <SkillsSection/>
          </Section>
          <Section title="experiences">
            <ExperienceSection/>
          </Section>
          <Section title="tech stack">
            <TechStackSection/>
          </Section>
          <Section title="projects">
            <ProjectsSection/>
          </Section>
      </div>
   </div>
  );
}
