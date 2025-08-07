import ProfilePhoto from "@/components/ProfilePhoto";
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
      link: "/",
    },
    {
      id: 2,
      iconSrc: "/linkedin-icon.png",
      title: "LinkedIn",
      link: "/",
    },
    {
      id: 3,
      iconSrc: "/briefcase-icon.png",
      title: "Portfolio",
      link: "/",
    },
  ];

  return (
    <main>
      {/* Hero section */}
      <section className="pt-10">
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
    </main>
  );
}
