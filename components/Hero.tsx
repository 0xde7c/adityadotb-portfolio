import { siteData } from '@/lib/data';

export function Hero() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-8 py-8 font-mono">
        <h1 className="text-3xl font-bold mb-1">{siteData.hero.heading}</h1>
        <p className="text-sm mb-2 text-gray-700">{siteData.hero.subheading}</p>
        <p className="text-xs leading-relaxed max-w-2xl text-gray-600">{siteData.hero.description}</p>
      </div>
    </section>
  );
}
