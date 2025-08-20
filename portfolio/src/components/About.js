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
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Background & Experience</h3>
            <p className="text-gray-600 mb-4">
              I&apos;m a passionate Full Stack Developer and tech enthusiast with a B.Sc. in 
              Information Technology. I began working on projects during my 2nd year at university, 
              and since then I&apos;ve built a strong foundation in web and mobile application development.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, I have completed several academic and personal projects, 
              focusing on creating responsive, modern, and user-friendly applications. 
              I also integrate AI tools into my workflow to streamline tasks, 
              enhance productivity, and deliver smarter solutions.
            </p>
            <p className="text-gray-600">
              Beyond coding, I enjoy exploring new technologies, experimenting with 
              innovative tools, and sharing knowledge with the developer community.
            </p>
          </div>
          
          {/* Right Side */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Great things happen when working together</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Hands-on with Web & Mobile App Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Using AI tools to boost workflow efficiency</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Problem Solver & Continuous Learner</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
