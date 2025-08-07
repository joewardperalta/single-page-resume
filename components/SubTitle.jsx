import Paragraph from "./Paragraph";

export default function SubTitle({ children, className }) {
  return (
    <Paragraph className={`${className} text-base font-medium`}>
      {children}
    </Paragraph>
  );
}
