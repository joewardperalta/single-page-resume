export default function Wrapper({ className = "", children }) {
  return (
    <div className={`${className} py-6 px-4 max-w-[800px] mx-auto md:p-8`}>
      {children}
    </div>
  );
}
