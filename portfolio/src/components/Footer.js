'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 YourName. Built with Next.js & Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
