import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-black">
      <nav className="max-w-4xl mx-auto px-4 py-4 font-mono">
        <Link href="/" className="text-xl font-bold hover:underline">
          aditya.dev
        </Link>
      </nav>
    </header>
  );
}
