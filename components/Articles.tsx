import Link from 'next/link';

export function Articles() {
  return (
    <section className="border-t border-black">
      <div className="max-w-4xl mx-auto px-3 py-6 font-mono">
        <h2 className="text-xl font-bold mb-3">content portfolio</h2>
        <p className="text-xs text-gray-700 mb-4">26 readings on trading, defi and crypto</p>
        <Link
          href="/articles"
          className="text-sm hover:underline"
        >
          browse all →
        </Link>
      </div>
    </section>
  );
}
