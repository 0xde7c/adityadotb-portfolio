import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Articles } from '@/components/Articles';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
    </>
  );
}
