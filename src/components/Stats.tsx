import React from 'react';
import { Users, TrendingUp, Clock, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '1,500+',
      label: 'Happy Clients',
      description: 'Businesses trust us with their advertising',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'Average Performance Increase',
      description: 'Improvement in campaign performance',
      color: 'green'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Uninterrupted Service',
      description: 'Continuous monitoring and optimization',
      color: 'orange'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Customer Satisfaction',
      description: 'Clients recommend our services',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success by <span className="text-orange-500">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the results that matter most 
            to businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center group"
            >
              <div className={`${getColorClasses(stat.color).light} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 ${getColorClasses(stat.color).text}`} />
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proven Results Across Industries
              </h3>
              <p className="text-gray-600 mb-6">
                From e-commerce to SaaS, restaurants to real estate, our automation platform 
                delivers consistent results across all business types and sizes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">$50M+</div>
                  <div className="text-sm text-gray-600">Ad spend managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">2.5M+</div>
                  <div className="text-sm text-gray-600">Optimizations made</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">45%</div>
                  <div className="text-sm text-gray-600">Avg. cost reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">3.2x</div>
                  <div className="text-sm text-gray-600">Avg. ROI improvement</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-blue-600">E-commerce</div>
                <div className="text-sm text-gray-600">40% avg. improvement</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-green-600">SaaS</div>
                <div className="text-sm text-gray-600">55% avg. improvement</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-orange-600">Local Business</div>
                <div className="text-sm text-gray-600">35% avg. improvement</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-purple-600">Services</div>
                <div className="text-sm text-gray-600">42% avg. improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;