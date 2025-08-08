import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Joeward Peralta — Full Stack Developer",
  description:
    "Junior Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. View projects, experience, and contact details.",
  openGraph: {
    title: "Joeward Peralta — Full Stack Developer",
    description:
      "Junior Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. View projects, experience, and contact details.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
