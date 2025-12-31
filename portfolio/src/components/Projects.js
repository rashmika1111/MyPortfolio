'use client';

const projects = [
 {
  id: 1,
  title: "TrackNgo - Final Year Group Project 2025",
  description: (
    <>
      <p><strong>Contribution:</strong> Led the design and development of the Lost and Found subsystem using MVC. Contributed to requirement analysis, system design, and assisted in debugging across the project.</p>
    
      <p><strong>Supervisor:</strong> K. Madanaharan, Lecturer, University of Vavuniya</p>
    </>
  ),
  image: "grouppj.jpg",
  technologies: ["Node.js", "Express", "MongoDB", "React", "JavaScript"],
  github: "https://github.com/TrackNGo/frontend",
  backendGithub: "https://github.com/TrackNGo/backend",
  linkedin: "https://www.linkedin.com/posts/rashmika-naveen-70952b237_innovation-publictransport-webdevelopment-activity-7318842778824622082-ymf5?utm_source=share&utm_medium=member_android&rcm=ACoAADr9HDkBUZghVpxC4WXPqPC1rlrzT5YpjIg",
  featured: true
},
{
  id: 2,
  title: "Boarding App - Solo Project 2024",
  description: (
    <>
      <p><strong>Overview:</strong> A mobile application built to address the challenge of finding boarding accommodations in rural and semi-urban areas like Vavuniya, where my faculty is located.</p>
      <p><strong>Technologies:</strong> React Native</p>
      <p><strong>Contribution:</strong> Fully designed and developed the entire application independently, using LocalData. This was my first mobile app development project from start to finish.</p>
    </>
  ),
  image: "/boad.jpg",
  technologies: ["React Native"],
  github: "https://github.com/rashmika1111/BoadinApp",
  linkedin: "https://www.linkedin.com/posts/rashmika-naveen-70952b237_reactnative-mobiledevelopment-frontenddevelopment-activity-7302588350018854913-rQQP",
  featured: true
},

{
  id: 3,
  title: "Rent It - E-Commerce Site (University Project Jan 2025)",
  description: (
    <>
      <p><strong>Overview:</strong> An advanced web application for finding and renting boarding accommodations, developed as a continuation of my mobile Boarding App. Aimed at solving accommodation issues in areas like Vavuniya.</p>
      <p><strong>Technologies:</strong> Next.js, Spring Boot, MySQL</p>
      <p><strong>Contribution:</strong> Independently designed and developed the complete system, including both frontend and backend functionalities.</p>
    </>
  ),
  image: "/rent.png",
  technologies: ["Next.js", "Spring Boot", "MySQL"],
  github: "https://github.com/rashmika1111/Rent-It-E-commerce-project",
  featured: false
},

{
  id: 4,
  title: "Fresh Farm - Food Selling Platform (2nd Year Project 2024)",
  description: (
    <>
      <p><strong>Overview:</strong> A platform that connects local farmers directly with customers, eliminating intermediaries and promoting fair, fresh produce distribution.</p>
      <p><strong>Technologies:</strong> React, Node.js, Express.js, MongoDB</p>
      <p><strong>Contribution:</strong> Entire project designed and developed individually as my first pilot project using the MERN stack.</p>
      <p><strong>Supervisor:</strong> S. Gopinath, Instructor, University of Vavuniya</p>
    </>
  ),
  image: "/fresh.png",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/SGopinath89/IT22342024FreshFarm",
  linkedin: "https://www.linkedin.com/posts/rashmika-naveen-70952b237_my-pilot-mern-project-implementing-simple-activity-7212894091691376640-_vlQ",
  featured: false
},

{
  id: 5,
  title: "Attendance Tracking System - University Group Project (2023)",
  description: (
    <>
      <p><strong>Overview:</strong> A web-based system developed to track student attendance efficiently at the university level.</p>
      <p><strong>Technologies:</strong> HTML, CSS, PHP</p>
      <p><strong>Contribution:</strong> Worked as a team member and was responsible for implementing the Add Attendance and Logout functionalities.</p>
      <p><strong>Project Type:</strong> University Group Project - 2023</p>
    </>
  ),
  image: "/ats.png",
  technologies: ["HTML", "CSS", "PHP"],
  github: "https://github.com/SavinduRashmika2000/Attendance_Tracking_System",
  linkedin: "",
  featured: false
}

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-900/50 transition duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <div className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.backendGithub ? (
                    <>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Frontend Code
                      </a>

                      <a 
                        href={project.backendGithub} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Backend Code
                      </a>
                    </>
                  ) : (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}

                  <a 
                    href={project.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zM7 20h-3v-11h3v11zM5.5 7.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM20 20h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-11h3v1.5c.879-1.183 2.462-2.5 4.5-2.5 2.481 0 4.5 2.019 4.5 4.5v7.5z" />
                    </svg>
                    LinkedIn Post
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
