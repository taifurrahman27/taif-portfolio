import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD. TAIFUR RAHMAN JASIM | Software Engineer",
  description:
    "Portfolio of MD. Taifur Rahman Jasim, a Software Engineer specializing in modern web development with Next.js, React, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Taifur Rahman Jasim",
    "Software Engineer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Bangladesh",
  ],
  authors: [{ name: "MD. Taifur Rahman Jasim" }],
  creator: "MD. Taifur Rahman Jasim",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "MD. TAIFUR RAHMAN JASIM | Software Engineer",
    description:
      "Portfolio of MD. Taifur Rahman Jasim — Software Engineer building modern, scalable web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Taifur Rahman Jasim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. TAIFUR RAHMAN JASIM | Software Engineer",
    description:
      "Portfolio of MD. Taifur Rahman Jasim — Software Engineer building modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
