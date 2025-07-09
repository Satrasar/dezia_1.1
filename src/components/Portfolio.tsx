import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'E-commerce'];

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Apps',
      description: 'Secure and user-friendly banking application',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive marketing strategy for tech startup',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional website for consulting firm',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Strapi'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Apps',
      description: 'On-demand food delivery platform',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Analytics dashboard for SaaS platform',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;