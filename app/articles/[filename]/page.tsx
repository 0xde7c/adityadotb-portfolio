import Link from 'next/link';

export const metadata = {
  title: 'Article - Aditya',
};

export default async function ArticlePage({ params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const decodedFilename = decodeURIComponent(filename);
  const articleName = decodedFilename.replace('.pdf', '');

  return (
    <main>
      <section className="border-b border-black">
        <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
          <Link href="/articles" className="text-sm text-gray-600 hover:underline mb-8 block">
            ← back to articles
          </Link>
        </div>
      </section>

      <section>
        <div className="max-w-full mx-auto px-4 py-8 font-mono">
          <h1 className="text-2xl font-bold mb-4 text-center">{articleName}</h1>
          <div className="w-full h-screen">
            <iframe
              src={`/articles/${decodedFilename}`}
              className="w-full h-full border border-black"
              title={articleName}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
