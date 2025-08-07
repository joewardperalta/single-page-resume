export default function Title({ children, className }) {
  return <h1 className={`${className} text-2xl font-semibold`}>{children}</h1>;
}
