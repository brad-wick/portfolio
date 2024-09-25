import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bradley | Personal Portfolio",
  description: "Bradley is a passionate full-stack developer specializing in intuitive and performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-950 h-[2000px] pt-32 sm:pt-36`}
      >
        <div className="bg-purple -z-10 absolute top-[-10rem] left-0 h-1/2 w-full rounded-full blur-[10rem]" />
        <Header />
        {children}
      </body>
    </html>
  );
}
