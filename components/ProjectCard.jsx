import Paragraph from "./Paragraph";
import SocialLinkCard from "./SocialLinkCard";
import SubHeading from "./SubHeading";

export default function ProjectCard({ className, project }) {
  let techStackText = "";
  project.stacks.forEach((skill, index) => {
    if (index < project.stacks.length - 1) {
      techStackText += skill + ", ";
    } else {
      techStackText += skill;
    }
  });

  const projectDateText =
    project.startDate.month +
    " " +
    project.startDate.year +
    " - " +
    (project.endDate.month
      ? project.endDate.month + " " + project.endDate.year
      : "Present");

  return (
    <div className="space-y-2">
      {/* Headline */}
      <div>
        {/* Title */}
        <SubHeading>{project.title}</SubHeading>

        {/* Date and stack */}
        <div>
          <p className="font-medium text-xs uppercase text-secondary md:text-sm">
            {projectDateText + " | " + techStackText}
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-2">
        <SocialLinkCard
          iconSrc="/github-icon.png"
          title="GitHub"
          link={project.githubLink}
        />
        <SocialLinkCard
          iconSrc="/link-icon.png"
          title="Website"
          link={project.websiteLink}
        />
      </div>

      {/* Responsibilities */}
      <div className="pl-6">
        <ul>
          {project.responsibilities.map((responsibility, index) => (
            <li className="list-disc text-secondary" key={index}>
              <Paragraph>{responsibility}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
