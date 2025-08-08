import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";

export default function ProjectCard({ className, project }) {
  return (
    <div>
      {/* Headline */}
      <div className="mb-1">
        <SubHeading>{project.title}</SubHeading>
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

      {/* Description */}
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
