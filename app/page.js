import Paragraph from "@/components/Paragraph";
import ProfilePhoto from "@/components/ProfilePhoto";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import SocialLinkCard from "@/components/SocialLinkCard";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  const socialLinks = [
    {
      id: 1,
      iconSrc: "/github-icon.png",
      title: "GitHub",
      link: "https://github.com/joewardperalta/",
    },
    {
      id: 2,
      iconSrc: "/linkedin-icon.png",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/joewardperalta/",
    },
    {
      id: 3,
      iconSrc: "/briefcase-icon.png",
      title: "Portfolio",
      link: "https://www.joewardperalta.dev/",
    },
  ];

  const skills = [
    {
      id: 1,
      iconSrc: "/html-icon.png",
      title: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      iconSrc: "/css-icon.png",
      title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      iconSrc: "/javascript-icon.png",
      title: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      iconSrc: "/reactjs-icon.png",
      title: "React.js",
      link: "https://react.dev/",
    },
    {
      id: 5,
      iconSrc: "/nextjs-icon.png",
      title: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      id: 6,
      iconSrc: "/tailwindcss-icon.png",
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      id: 7,
      iconSrc: "/nodejs-icon.png",
      title: "Node.js",
      link: "https://nodejs.org/en",
    },
    {
      id: 8,
      iconSrc: "/expressjs-icon.png",
      title: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      id: 9,
      iconSrc: "/mongodb-icon.png",
      title: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      id: 10,
      iconSrc: "/git-icon.png",
      title: "Git",
      link: "https://git-scm.com/",
    },
    {
      id: 11,
      iconSrc: "/github-icon.png",
      title: "GitHub",
      link: "https://github.com/",
    },
    {
      id: 12,
      iconSrc: "/figma-icon.png",
      title: "Figma",
      link: "https://www.figma.com/",
    },
  ];

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
              {socialLinks.map((socialLink) => (
                <li key={socialLink.id}>
                  <SocialLinkCard
                    iconSrc={socialLink.iconSrc}
                    title={socialLink.title}
                    link={socialLink.link}
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
          <SectionHeading>Technical Skills</SectionHeading>
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
    </main>
  );
}
