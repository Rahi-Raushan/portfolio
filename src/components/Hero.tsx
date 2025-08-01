import React from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import RahiPhoto from './Rahi copy.jpg';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Raushan kumar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                I build modern and scalable web applications
              </p>
              <p className="text-lg text-gray-500 max-w-2xl">
                Passionate Full Stack Developer with 3+ years of experience creating 
                innovative digital solutions. I specialize in React, Node.js, and modern 
                web technologies to bring ideas to life.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl">
                I am a Java Programmer with a strong foundation in Data Structures and 
                Algorithms.I regularly solve problems on platforms like LeetCode,
                GeeksforGeeks, and Codeforces
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={scrollToProjects}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                View Projects
              </button>
              <a
                href="https://drive.google.com/file/d/1F8ON0_Lenu1mgPdGdCRCZi7AQiLnO_wM/view?usp=drivesdk"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/Rahi-Raushan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raushan-kumar-297974290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:raushan952524@gmail.com"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 p-2">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={RahiPhoto}
                    alt="Raushan-kumar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                React
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                JS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;