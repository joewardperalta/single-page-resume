export default function MiniHeading({ children, className }) {
  return <h4 className={`${className} text-sm md:text-base`}>{children}</h4>;
}
