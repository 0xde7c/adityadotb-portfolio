import Link from 'next/link';
import { siteData } from '@/lib/data';

export function Projects() {
  return (
    <section className="border-t border-black">
      <div className="max-w-4xl mx-auto px-4 py-6 font-mono">
        <h2 className="text-xl font-bold mb-3">projects</h2>

        <div className="grid grid-cols-3 gap-4">
          {siteData.featuredProjects.map((project, idx) => (
            <Link
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="font-bold mb-1 hover:underline">{project.name}</div>
              <p className="text-sm text-gray-700">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
