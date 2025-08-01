 import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      organization: 'Tech Innovations Inc.',
      description: 'Leading development of enterprise web applications',
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      organization: 'StartupXYZ',
      description: 'Built scalable web applications from ground up',
    },
    {
      year: '2021',
      title: 'Bachelor in Computer Science',
      organization: 'University of Technology',
      description: 'Graduated with First Class Honors',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        {/* Two-column layout for large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - My Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <GraduationCap className="text-blue-600" size={28} />
                My Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a Computer Science background 
                and 3+ years of hands-on experience. I love creating digital solutions 
                that make a real difference in people's lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey began during university when I built my first web application. 
                Since then, I've been constantly learning and adapting to new technologies, 
                always striving to write clean, efficient, and maintainable code.
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed">
                Alongside full-stack development, I actively sharpen my problem-solving skills
                by practicing Data Structures and Algorithms using Java on platforms like LeetCode.
                This helps me write optimized code and prepare for real-world engineering challenges.
              </p>
            </div>
          </div>

          {/* Right Column - Interests & Goals */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="text-teal-600" size={28} />
                Interests & Goals
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Building scalable and performant web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Exploring new technologies and frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Contributing to open source projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Teaching programming to others</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Mentoring junior developers</span>
                </li>
                 <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Crack top tech company interviews (like Microsoft, Google, etc.)</span>
                </li>
                   <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Start a YouTube or blog to teach programming in Hindi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
