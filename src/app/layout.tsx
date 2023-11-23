import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "./components/header";
import clxs from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian | Personal Portoflio",
  description: "Adrian is a frontend developer with over a year of experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <body className={`${inter.className} bg-gray-200 text-gray-950`}>
        <div
          className={clxs(
            "absolute right-[11rem] top-[-6rem] -z-10 rounded-full",
            "h-[31.25rem] w-[31.25rem] sm:w-[68.75rem]",
            "bg-[#fbe2e3] blur-[10rem]",
            "dark:bg-[#946263]",
          )}
        ></div>
        <div
          className={clxs(
            "absolute -z-10 h-[31.25rem] w-[50rem] rounded-full",
            "left-[-35rem] top-[-1rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]",
            "bg-[#dbd7fb] blur-[10rem]",
            "dark:bg-[#676394]",
          )}
        ></div>
        {children}
      </body>
    </html>
  );
}
