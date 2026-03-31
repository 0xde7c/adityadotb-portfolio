import { Suspense } from 'react';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { ContentPortfolio } from '@/components/ContentPortfolio';
import { Contact } from '@/components/Contact';

function ProjectsSkeleton() {
  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h2 className="text-2xl font-bold mb-8">projects</h2>
        <p className="text-gray-700">loading...</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Skills />
      <ContentPortfolio />
      <Contact />
    </>
  );
}
