import Paragraph from "./Paragraph";
import SubHeading from "./SubHeading";

export default function EducationCard({ className, education }) {
  const educationDateText =
    education.startDate.month +
    " " +
    education.startDate.year +
    " - " +
    (education.endDate.month
      ? education.endDate.month + " " + education.endDate.year
      : "Present");

  return (
    <div className="space-y-2">
      {/* Headline */}
      <div>
        {/* Title */}
        <SubHeading>{education.title}</SubHeading>

        {/* Date and stack */}
        <div>
          <p className="font-medium text-xs uppercase text-secondary md:text-sm">
            {educationDateText}
          </p>
        </div>
      </div>

      {/* Responsibilities */}
      <div>
        <Paragraph>
          <span className="font-medium">Coursework: </span>
          {education.coursework}
        </Paragraph>
      </div>
    </div>
  );
}
