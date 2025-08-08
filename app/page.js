import Paragraph from "@/components/Paragraph";
import ProfilePhoto from "@/components/ProfilePhoto";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import SocialLinkCard from "@/components/SocialLinkCard";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";

import skills from "@/data/skills.json";
import socials from "@/data/socials.json";
import projects from "@/data/projects.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-11">
        <Wrapper>
          <div className="space-y-4">
            {/* Profile photo */}
            <div>
              <ProfilePhoto src="/author-profile.jpg" />
            </div>

            {/* Headline */}
            <div>
              <Title>Joeward Peralta</Title>
              <SubTitle>Junior Full Stack Developer</SubTitle>
            </div>

            {/* Social links */}
            <ul className="flex gap-6">
              {socials.map((social) => (
                <li key={social.id}>
                  <SocialLinkCard
                    iconSrc={social.iconSrc}
                    title={social.title}
                    link={social.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </section>

      {/* Professional Summary Section */}
      <section>
        <Wrapper>
          <SectionHeading>Professional Summary</SectionHeading>
          <Paragraph>
            Junior full stack developer skilled in React, Node.js, and MongoDB
            with a passion for building scalable, user-focused web applications.
            Strong experience in authentication, responsive UI, and working
            directly with clients. Actively seeking entry-level opportunities in
            collaborative teams focused on impactful products.
          </Paragraph>
        </Wrapper>
      </section>

      {/* Technical Skills Section */}
      <section>
        <Wrapper>
          <SectionHeading className="mb-6">Technical Skills</SectionHeading>
          <ul className="flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <li key={skill.id}>
                <SkillCard
                  iconSrc={skill.iconSrc}
                  title={skill.title}
                  link={skill.link}
                />
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>

      {/* Projects Section */}
      <section>
        <Wrapper>
          <SectionHeading className="mb-6">Projects</SectionHeading>

          <ul className="space-y-5">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>

      {/* Experience Section */}
      <section>
        <Wrapper>
          <SectionHeading className="mb-6">Experience</SectionHeading>

          <ul className="space-y-5">
            {experience.map((experience) => (
              <li key={experience.id}>
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>

      {/* Education Section */}
      <section>
        <Wrapper>
          <SectionHeading className="mb-6">Education</SectionHeading>

          <ul className="space-y-5">
            {education.map((education) => (
              <li key={education.id}>
                <EducationCard education={education} />
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>
    </main>
  );
}
