export default function Paragraph({ className = "", children }) {
  return <p className={`${className} text-sm text-secondary`}>{children}</p>;
}
