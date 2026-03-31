import { siteData } from '@/lib/data';

export function Skills() {
  return (
    <section className="border-t border-black">
      <div className="max-w-5xl mx-auto px-8 py-8 font-mono">
        <h2 className="text-xl font-bold mb-3">skills</h2>
        <div className="flex gap-6">
          <div className="flex-1 border-r border-black pr-4">
            {siteData.skills.slice(0, 3).map((skill, index) => (
              <div key={index} className="text-xs py-2">
                <p>{skill}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 pl-4">
            {siteData.skills.slice(3, 6).map((skill, index) => (
              <div key={index + 3} className="text-xs py-2">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
