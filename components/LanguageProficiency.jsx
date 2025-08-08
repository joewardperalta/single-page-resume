import MiniHeading from "./MiniHeading";
import Paragraph from "./Paragraph";

export default function LanguageProficiency({ language }) {
  return (
    <div className="flex justify-between items-center">
      <MiniHeading>{language.name}</MiniHeading>
      <Paragraph>{language.proficiency}</Paragraph>
    </div>
  );
}
