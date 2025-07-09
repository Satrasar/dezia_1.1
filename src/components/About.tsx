import React from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive your business forward'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and use cutting-edge technologies'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority, and we work as an extension of your team'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Magnevo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We're a Team of Digital Experts Passionate About Growth
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2019, Magnevo has been at the forefront of digital transformation, 
                helping businesses of all sizes achieve their online goals through innovative 
                strategies and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines creativity with data-driven insights to deliver solutions 
                that not only look great but also drive real business results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;