'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 RashmikaNaveen  Built with Next.js & Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/rashmika1111" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
              </a>

            <a href="https://www.linkedin.com/in/rashmika-naveen-70952b237/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/rashimika_naveen?igsh=MTgzZHJnd2k4MnVscg==" target="_blank" rel="noopener noreferrer"  className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
