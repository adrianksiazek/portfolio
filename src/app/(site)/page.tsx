import { DefaultLayout } from "./components/default-layout/default-layout";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./components/about/about"));
const Works = dynamic(() => import("./components/works/works"));
const Contact = dynamic(() => import("./components/contact/contact"));
const Description = dynamic(() => import("./components/description/description"));
const Skills = dynamic(() => import("./components/skills/skills"));
const Hero = dynamic(() => import("./components/hero/hero"));

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col items-center">
        <Hero />
        <Description />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </DefaultLayout>
  );
}
