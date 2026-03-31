import { siteData } from '@/lib/data';

export function Hero() {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-3 py-4 font-mono">
        <h1 className="text-3xl font-bold mb-1">{siteData.hero.heading}</h1>
        <p className="text-sm mb-2 text-gray-700">{siteData.hero.subheading}</p>
        <p className="text-xs leading-relaxed max-w-2xl text-gray-600">{siteData.hero.description}</p>
      </div>
    </section>
  );
}
