'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Background & Experience</h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate full-stack developer with 3+ years of experience building 
              web applications. I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-gray-600 mb-4">
              My journey started with a curiosity about how websites work, and has evolved 
              into a career focused on creating exceptional digital experiences.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">3+ Years Experience</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">50+ Projects Completed</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Open Source Contributor</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Problem Solver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
