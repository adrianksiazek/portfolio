import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { DefaultLayout } from "./components/default-layout/default-layout";
import { Skills } from "./components/skills/skills";
import { Description } from "./components/description/description";
import { Contact } from "./components/contact/contact";

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col items-center">
        <Hero />
        <Description />
        <About />
        <Skills />
        <Contact />
      </main>
    </DefaultLayout>
  );
}
