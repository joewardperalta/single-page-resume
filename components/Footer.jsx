import Paragraph from "./Paragraph";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer>
      <div className="py-3 px-4 max-w-[800px] mx-auto border-tertiary border-[0.5px]">
        <Paragraph>&copy; 2025 Resume by Joeward Peralta</Paragraph>
      </div>
    </footer>
  );
}
