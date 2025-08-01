import React from 'react';
import { Code, Server, Wrench, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={24} />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 90 },
     
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
         
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'AWS', level: 70 },
        { name: 'Webpack', level: 80 },
        { name: 'Jest', level: 85 },
        { name: 'Linux', level: 65 },
      ],
    },
    {
      title: 'Programming Language',
      icon: <Wrench size={24} />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'JAVA', level: 95 },
        { name: 'Python', level: 95 },
        { name: 'C++', level: 75 },
        { name: 'C', level: 70 },
        
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Leadership', level: 100 },
        { name: 'Communication', level: 90 },
        { name: 'Project Management', level: 80 },
        { name: 'Mentoring', level: 85 },
        { name: 'Agile/Scrum', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'MongoDB','Express.js',
               'Tailwind CSS', 'Git', 'Docker', 'AWS',
              'Linux', 'Figma','Pandas','NumPy','Opreting System','DBMS','MySQL'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;