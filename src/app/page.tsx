import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { DefaultLayout } from "./components/default-layout/default-layout";
import { Skills } from "./components/skills/skills";

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
      </main>
    </DefaultLayout>
  );
}
