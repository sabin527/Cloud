// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl md:text-2xl font-bold text-blue-800">
          International School of Management and Technology
        </h1>

        <nav className="flex gap-3">
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Homepage
          </Link>
          <Link
            href="/about"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
