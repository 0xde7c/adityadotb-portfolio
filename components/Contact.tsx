import Link from 'next/link';
import { siteData } from '@/lib/data';

export function Contact() {
  return (
    <section className="border-b border-black">
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h2 className="text-2xl font-bold mb-8">contact</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-700 mb-2">email</p>
            <Link
              href={`mailto:${siteData.contact.email}`}
              className="text-lg hover:underline"
            >
              {siteData.contact.email}
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2">social</p>
            <div className="space-y-2">
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
        </div>
      </div>
    </section>
  );
}
