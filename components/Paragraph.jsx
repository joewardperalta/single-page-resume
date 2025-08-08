export default function Paragraph({ className = "", children }) {
  return (
    <p className={`${className} text-sm text-secondary md:text-base`}>
      {children}
    </p>
  );
}
