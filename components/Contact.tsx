import Link from 'next/link';
import { siteData } from '@/lib/data';

export function Contact() {
  return (
    <section className="border-t border-black">
      <div className="max-w-4xl mx-auto px-3 py-6 font-mono">
        <h2 className="text-xl font-bold mb-3">contact</h2>
        <div className="grid grid-cols-4 gap-2">
          <Link
            href={`mailto:${siteData.contact.email}`}
            className="border border-black p-2 text-center hover:bg-gray-50 transition-colors text-xs"
          >
            email
          </Link>
          <Link
            href={siteData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-2 text-center hover:bg-gray-50 transition-colors text-xs"
          >
            github
          </Link>
          <Link
            href={siteData.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-2 text-center hover:bg-gray-50 transition-colors text-xs"
          >
            twitter
          </Link>
          <Link
            href={siteData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-2 text-center hover:bg-gray-50 transition-colors text-xs"
          >
            linkedin
          </Link>
        </div>
      </div>
    </section>
  );
}
