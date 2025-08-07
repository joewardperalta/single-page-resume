export default function Paragraph({ className = "", children }) {
  return (
    <p className={`${className} text-sm md:text-base text-secondary`}>
      {children}
    </p>
  );
}
