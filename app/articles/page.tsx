import Link from 'next/link';
import { siteData } from '@/lib/data';

export const metadata = {
  title: 'Articles - Aditya',
  description: 'Reading on trading, DeFi and crypto insights',
};

export default function ArticlesPage() {
  return (
    <main>
      <section className="border-b border-black">
        <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
          <Link href="/" className="text-sm text-gray-600 hover:underline mb-8 block">
            ← back
          </Link>
          <h1 className="text-4xl font-bold mb-4">articles</h1>
          <p className="text-gray-700 mb-8">{siteData.articles.length} readings on trading, DeFi and crypto</p>

          <div className="space-y-2">
            {siteData.articles.map((article, idx) => (
              <Link
                key={idx}
                href={`/articles/${encodeURIComponent(article)}`}
                className="block border border-black p-3 hover:bg-gray-50 transition-colors"
              >
                <span className="font-mono">{article.replace('.pdf', '')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
