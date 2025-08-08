import Paragraph from "./Paragraph";
import SocialLinkCard from "./SocialLinkCard";
import SubHeading from "./SubHeading";

export default function ProjectCard({ className, project }) {
  return (
    <div>
      {/* Headline */}
      <div className="mb-1">
        {/* Title */}
        <div className="flex justify-between">
          <SubHeading>{project.title}</SubHeading>

          {/* Links */}
          <div className="flex gap-4">
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
        </div>

        {/* Date and stack */}
        <div>
          <p className="font-medium text-xs uppercase text-secondary">
            {project.startDate.month} {project.startDate.year} {" - "}
            {project.endDate.month
              ? project.endDate.month + " " + project.endDate.year
              : "Present"}
            {" | "}
            {project.stacks.map((stack, index) =>
              index < project.stacks.length ? stack + "," : stack
            )}
          </p>
        </div>
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
