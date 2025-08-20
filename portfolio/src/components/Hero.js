'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/Img/profile.jpg" 
              alt="Your Name"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-6 border-white shadow-xl object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I&apos;m <span className="text-blue-600">Rashmika Naveen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
             Full Stack Developer & Tech Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
           I create beautiful, responsive web applications and mobile apps with modern technologies.  
           Passionate about clean code, seamless user experience, and integrating AI tools to build smarter solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Get In Touch
            </a>
            <a 
             href="/rashmika CV.pdf"
             download
             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
