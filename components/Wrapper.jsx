export default function Wrapper({ className = "", children }) {
  return (
    <div
      className={`${className} py-6 px-4 border-[0.5px] border-tertiary max-w-[800px] mx-auto`}
    >
      {children}
    </div>
  );
}
