import Link from 'next/link';
import { siteData } from '@/lib/data';

export function Contact() {
  return (
    <section className="border-t border-black">
      <div className="max-w-5xl mx-auto px-8 py-8 font-mono">
        <h2 className="text-xl font-bold mb-3">contact</h2>
        <div className="space-y-2 text-xs">
          <Link
            href={`mailto:${siteData.contact.email}`}
            className="block hover:underline"
          >
            {siteData.contact.email}
          </Link>
          <Link
            href={siteData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            github
          </Link>
          <Link
            href={siteData.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            twitter
          </Link>
          <Link
            href={siteData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            linkedin
          </Link>
        </div>
      </div>
    </section>
  );
}
