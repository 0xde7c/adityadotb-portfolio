import { siteData } from '@/lib/data';

export function Hero() {
  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h1 className="text-4xl font-bold mb-2">{siteData.hero.heading}</h1>
        <p className="text-xl mb-4 text-gray-700">{siteData.hero.subheading}</p>
        <p className="text-base leading-relaxed max-w-2xl">{siteData.hero.description}</p>
      </div>
    </section>
  );
}
