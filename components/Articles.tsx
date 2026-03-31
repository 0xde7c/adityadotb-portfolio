import Link from 'next/link';

export function Articles() {
  return (
    <section className="border-t border-black">
      <div className="max-w-5xl mx-auto px-8 py-8 font-mono">
        <h2 className="text-xl font-bold mb-3 text-center">content portfolio</h2>
        <p className="text-xs text-gray-700 mb-4 text-center">26 readings on trading, defi and crypto</p>
        <div className="text-center">
          <Link
            href="/articles"
            className="text-sm hover:underline inline-block"
          >
            browse all →
          </Link>
        </div>
      </div>
    </section>
  );
}
