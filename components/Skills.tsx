import { siteData } from '@/lib/data';

export function Skills() {
  return (
    <section className="border-t border-black">
      <div className="max-w-5xl mx-auto px-8 py-8 font-mono">
        <h2 className="text-xl font-bold mb-3">skills</h2>
        <div className="flex flex-col gap-0 w-48 border border-black">
          {siteData.skills.map((skill, index) => (
            <div
              key={index}
              className="text-xs py-3 px-3 border-b border-black last:border-b-0 hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
