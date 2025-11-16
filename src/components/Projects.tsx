import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '📋',
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather, forecasts, and historical data with interactive charts.',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS'],
      image: '🌤️',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Clone',
      description: 'A social media platform clone with posts, comments, likes, real-time notifications, and user profiles.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '📱',
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'A tool to help developers create beautiful portfolio websites with customizable themes and templates.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Markdown'],
      image: '🎨',
      link: '#',
      github: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with rich text editing, categories, tags, comments, and SEO optimization.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      image: '✍️',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent works
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      View Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex-1 text-center px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

