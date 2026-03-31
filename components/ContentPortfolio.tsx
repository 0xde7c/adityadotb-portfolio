import { siteData } from '@/lib/data';

export function ContentPortfolio() {
  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h2 className="text-xl font-bold mb-3">{siteData.contentPortfolio.title}</h2>
        <p className="text-xs text-gray-700 mb-6">{siteData.contentPortfolio.description}</p>

        {siteData.contentPortfolio.articles.length === 0 ? (
          <div className="border border-dashed border-gray-400 p-6 text-center">
            <p className="text-xs text-gray-700">No articles yet. More coming soon.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {siteData.contentPortfolio.articles.map((article: any, index: number) => (
              <div key={index} className="border border-black p-3">
                <h3 className="font-bold mb-1 text-sm">{article.title}</h3>
                <p className="text-xs text-gray-700">{article.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
