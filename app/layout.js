import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://single-page-resume-theta.vercel.app/"),
  title: "Joeward Peralta — Full Stack Developer Resume",
  description:
    "Junior Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. View projects, experience, and contact details.",
  openGraph: {
    type: "website",
    url: "https://single-page-resume-theta.vercel.app/",
    title: "Joeward Peralta — Full Stack Developer Resume",
    description:
      "Junior Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. View projects, experience, and contact details.",
    images: [
      {
        url: "/website-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Joeward Peralta Resume Preview",
      },
    ],
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
