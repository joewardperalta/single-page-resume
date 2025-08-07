import Paragraph from "./Paragraph";

export default function SubTitle({ children, className }) {
  return (
    <p className={`${className} text-base text-secondary font-medium`}>
      {children}
    </p>
  );
}
