export default function SectionHeading({ children, className }) {
  return (
    <h2 className={`${className} uppercase text-xs font-medium mb-3`}>
      {children}
    </h2>
  );
}
