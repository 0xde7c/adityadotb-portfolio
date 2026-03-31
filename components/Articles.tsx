import Link from 'next/link';

export function Articles() {
  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <Link
          href="/articles"
          className="inline-block border border-black p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="text-2xl font-bold mb-2">📄 articles</div>
          <p className="text-sm text-gray-700">26 readings on trading, DeFi and crypto</p>
        </Link>
      </div>
    </section>
  );
}
