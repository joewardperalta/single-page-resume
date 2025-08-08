export default function Title({ children, className }) {
  return (
    <h1 className={`${className} text-2xl md:text-[1.625rem] font-semibold`}>
      {children}
    </h1>
  );
}
