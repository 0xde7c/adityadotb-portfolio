import { siteData } from '@/lib/data';

export function Skills() {
  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h2 className="text-2xl font-bold mb-8">skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteData.skills.map((skill, index) => (
            <div key={index} className="border border-black p-3">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
