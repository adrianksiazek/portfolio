import { Hero } from "./components/hero/hero";
import { DefaultLayout } from "./components/default-layout/default-layout";
import { Skills } from "./components/skills/skills";
import { Description } from "./components/description/description";
import { Contact } from "./components/contact/contact";
import { Works } from "./components/works/works";
import { About } from "./components/about/about";

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
