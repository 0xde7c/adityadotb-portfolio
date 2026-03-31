import Link from 'next/link';
import { getGitHubProjects } from '@/lib/github';

export async function Projects() {
  const repos = await getGitHubProjects('0xde7c');

  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h2 className="text-2xl font-bold mb-8">projects</h2>
        {repos.length === 0 ? (
          <p className="text-gray-700">Failed to load projects. Check back later.</p>
        ) : (
          <div className="space-y-6">
            {repos.map((repo) => (
              <div key={repo.id} className="border border-black p-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Link
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold hover:underline"
                  >
                    {repo.name}
                  </Link>
                  {repo.stars > 0 && (
                    <span className="text-sm text-gray-700 whitespace-nowrap">
                      ★ {repo.stars}
                    </span>
                  )}
                </div>
                {repo.description && (
                  <p className="text-sm mb-2 text-gray-700">{repo.description}</p>
                )}
                {repo.language && (
                  <p className="text-xs text-gray-600">{repo.language}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
