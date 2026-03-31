import { siteData } from '@/lib/data';

export function Skills() {
  return (
    <section className="border-t border-black">
      <div className="max-w-5xl mx-auto px-8 py-8 font-mono">
        <h2 className="text-xl font-bold mb-3">skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {siteData.skills.map((skill, index) => (
            <div key={index} className="text-xs py-2">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
