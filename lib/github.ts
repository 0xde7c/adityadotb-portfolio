export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
}

export async function getGitHubProjects(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=20&type=public`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    return repos
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
      }))
      .slice(0, 12); // Limit to 12 projects
  } catch (error) {
    console.error('Failed to fetch GitHub projects:', error);
    return [];
  }
}
