export default function SubHeading({ children, className }) {
  return (
    <h3 className={`${className} font-medium text-sm uppercase md:text-base`}>
      {children}
    </h3>
  );
}
