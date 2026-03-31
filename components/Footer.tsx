export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-8 font-mono text-sm text-center text-gray-700">
        <p>&copy; {year} aditya. all rights reserved.</p>
      </div>
    </footer>
  );
}
