import React from 'react';
import { Download, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const experiences = [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2024 - Present',
      description: [
        'Led development team of 5 developers in building enterprise-level web applications',
        'Architected and implemented microservices using Node.js and Docker',
        'Improved application performance by 40% through code optimization and caching strategies',
        'Mentored junior developers and conducted technical interviews'
      ]
    },
    {
      position: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2022 - 2024',
      description: [
        'Built and maintained React-based web applications serving 10,000+ users',
        'Developed RESTful APIs using Express.js and MongoDB',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with product team to define technical requirements'
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'WebSolutions Co.',
      period: '2021 - 2022',
      description: [
        'Created responsive web interfaces using React and modern CSS frameworks',
        'Optimized website performance achieving 95+ Lighthouse scores',
        'Worked closely with UX/UI designers to implement pixel-perfect designs',
        'Maintained and updated legacy codebase to modern standards'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2017 - 2021',
      details: 'First Class Honors, GPA: 3.8/4.0'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My professional journey and educational background
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <Download size={20} />
              Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              <ExternalLink size={20} />
              View Online
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={28} />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{exp.position}</h4>
                      <span className="text-blue-600 font-medium">2024</span>
                    </div>
                    <p className="text-lg text-gray-700 font-medium mb-4">Room Finding Website</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul> 
                  </div>
                  
                  
                  {index < experiences.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <div className="w-0.5 h-8 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-teal-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">B.tech(CSE)</h4>
                  <p className="text-lg text-gray-700 font-medium mb-2">Rungta College Of Engineering and Technology</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-teal-600 font-medium">2023-2027</span>
                    <span className="text-gray-600">7.5+ CGPA</span>
                  </div>
                </div>
               
                
              ))}
          
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">12th (Science)</h4>
                <p className="text-lg text-gray-700 font-medium mb-2">MS College Motihari</p>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-teal-600 font-medium">2020-2022</span>
                  <span className="text-gray-600">82%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">10th BSEB</h4>
                <p className="text-lg text-gray-700 font-medium mb-2">Noneya High School</p>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-teal-600 font-medium">2018-2020</span>
                  <span className="text-gray-600">7089%</span>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h4>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Solved 100+ DSA problems on LeetCode using Java.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Participated in coding contests and hackathons.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Mentored 8+ junior developers in modern web technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Completed NPTEL Java Programming course with 72%.</span>
                  </li>
                      <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Completed NPTEL Python for Data Science course with 80%.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;