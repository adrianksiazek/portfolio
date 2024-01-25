import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/header/header";
import clxs from "clsx";
import "./styles/globals.css";

const cabinetGrotesk = localFont({
  src: "./styles/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cb",
});

export const metadata: Metadata = {
  title: "Adrian | Personal Portoflio",
  description: "Adrian is a frontend developer with over a year of experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${cabinetGrotesk.variable} body font-cabinet relative bg-gray-200 font-cabinet-grotesk text-gray-950`}
      >
        <Header />
        <div
          className={clxs(
            "absolute right-[11rem] top-[14rem] -z-10 rounded-full",
            "h-[31.25rem] w-[31.25rem] sm:w-[68.75rem]",
            "bg-[#fbe2e3] blur-[10rem]",
            "dark:bg-[#946263]",
          )}
        ></div>
        <div
          className={clxs(
            "absolute -z-10 h-[31.25rem] w-[50rem] rounded-full",
            "right-[11rem] top-[5rem] sm:w-[68.75rem] lg:left-[-15rem]",
            "bg-[#dbd7fb] blur-[10rem]",
            "dark:bg-[#676394]",
          )}
        ></div>
        {children}
      </body>
    </html>
  );
}
