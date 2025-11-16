import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'REST APIs', level: 85, category: 'Backend' },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Redux', 'Next.js', 'GraphQL', 'Jest', 'AWS', 'Firebase', 'Webpack', 'Sass'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

