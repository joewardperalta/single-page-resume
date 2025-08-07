import Paragraph from "@/components/Paragraph";
import ProfilePhoto from "@/components/ProfilePhoto";
import SectionHeading from "@/components/SectionHeading";
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
    </main>
  );
}
