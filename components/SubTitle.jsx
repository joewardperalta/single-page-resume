import Paragraph from "./Paragraph";

export default function SubTitle({ children, className }) {
  return (
    <Paragraph className={`${className} text-lg font-medium`}>
      {children}
    </Paragraph>
  );
}
