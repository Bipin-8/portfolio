import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Bipin Pokhrel</span>, 
              a passionate Full Stack Developer with a keen eye for creating elegant solutions to complex problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies. 
              My focus is on writing clean, maintainable code and creating exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  💻
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Development
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Building scalable and performant web applications with modern frameworks and best practices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  🎨
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Design
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Creating intuitive and visually appealing user interfaces that enhance user experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  🚀
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Innovation
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Always learning and adapting to new technologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

