import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
      liveDemo: 'https://demo-ecommerce.com',
      github: 'https://github.com/alexjohnson/ecommerce-platform',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced filtering. Includes drag-and-drop functionality and deadline tracking.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveDemo: 'https://taskmanager-demo.com',
      github: 'https://github.com/alexjohnson/task-manager',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts. Features include 7-day forecasts and weather pattern visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      liveDemo: 'https://weather-dashboard-demo.com',
      github: 'https://github.com/alexjohnson/weather-dashboard',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media performance tracking. Includes data visualization, engagement metrics, and automated reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['Next.js', 'PostgreSQL', 'D3.js', 'Prisma'],
      liveDemo: 'https://analytics-demo.com',
      github: 'https://github.com/alexjohnson/social-analytics',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                <div className={`${project.featured ? 'lg:w-1/2' : ''} relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Rahi-Raushan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;