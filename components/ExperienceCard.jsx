import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";

export default function ExperienceCard({ className, experience }) {
  const experienceDateText =
    experience.startDate.month +
    " " +
    experience.startDate.year +
    " - " +
    (experience.endDate.month
      ? experience.endDate.month + " " + experience.endDate.year
      : "Present");

  return (
    <div className="space-y-2">
      {/* Headline */}
      <div>
        {/* Title */}
        <SubHeading>{experience.title}</SubHeading>

        {/* Date and stack */}
        <div>
          <p className="font-medium text-xs uppercase text-secondary">
            {experienceDateText}
          </p>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="pl-6">
        <ul>
          {experience.responsibilities.map((responsibility, index) => (
            <li className="list-disc text-secondary" key={index}>
              <Paragraph>{responsibility}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
