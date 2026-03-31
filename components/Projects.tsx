import Link from 'next/link';
import { getGitHubProjects } from '@/lib/github';
import { siteData } from '@/lib/data';

export async function Projects() {
  const repos = await getGitHubProjects('0xde7c');

  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h2 className="text-2xl font-bold mb-8">projects</h2>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
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

        {/* Other GitHub Projects */}
        {repos.length === 0 ? (
          <p className="text-gray-700">Failed to load projects. Check back later.</p>
        ) : (
          <div>
            <p className="text-sm text-gray-600 mb-4">other projects</p>
            <div className="space-y-3">
              {repos.filter(r => {
                const featuredNames = siteData.featuredProjects.map(p => p.name);
                return r.name !== 'adityadotb-portfolio' && r.name !== 'job-scraper' && !featuredNames.includes(r.name);
              }).map((repo) => (
                <div key={repo.id} className="border border-gray-300 p-3">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <Link
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold hover:underline"
                    >
                      {repo.name}
                    </Link>
                    {repo.stars > 0 && (
                      <span className="text-xs text-gray-600 whitespace-nowrap">
                        ★ {repo.stars}
                      </span>
                    )}
                  </div>
                  {repo.description && (
                    <p className="text-xs text-gray-600">{repo.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
