"use client";
import { motion } from "framer-motion";

export default function Wrapper({ className = "", children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className={`${className} py-6 px-4 border-[0.5px] border-b-[0] border-tertiary max-w-[800px] mx-auto md:p-8`}
    >
      {children}
    </motion.div>
  );
}
