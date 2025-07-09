import React from 'react';
import { Search, Settings, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Analysis',
      subtitle: 'We analyze your current ads',
      description: 'Our experts conduct a comprehensive audit of your existing campaigns, identifying opportunities for improvement and optimization.',
      details: [
        'Performance analysis of current campaigns',
        'Competitor research and benchmarking',
        'Audience analysis and segmentation',
        'Budget allocation review'
      ],
      color: 'blue'
    },
    {
      step: 2,
      icon: Settings,
      title: 'Setup',
      subtitle: 'We install the automation system',
      description: 'Our team configures the automation system tailored to your business needs and connects all your advertising platforms.',
      details: [
        'Platform integration and setup',
        'Custom rule configuration',
        'Automated workflows creation',
        'Testing and validation'
      ],
      color: 'orange'
    },
    {
      step: 3,
      icon: TrendingUp,
      title: 'Optimization',
      subtitle: 'System continuously learns and improves',
      description: 'Our AI-powered system continuously monitors performance and makes real-time adjustments to maximize your ROI.',
      details: [
        'Real-time bid optimization',
        'Automatic A/B testing',
        'Budget reallocation',
        'Performance-based adjustments'
      ],
      color: 'green'
    },
    {
      step: 4,
      icon: BarChart3,
      title: 'Reporting',
      subtitle: 'You receive results regularly',
      description: 'Get detailed reports and insights delivered to your preferred communication channel, keeping you informed every step of the way.',
      details: [
        'Daily performance reports',
        'Weekly detailed analysis',
        'Monthly strategic insights',
        'Real-time alerts and notifications'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-100' },
      green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Our proven 4-step process ensures your campaigns 
            are optimized for success from day one.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className={`${getColorClasses(step.color).bg} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className={`${getColorClasses(step.color).text} font-medium`}>{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${getColorClasses(step.color).bg} rounded-full`}></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`${getColorClasses(step.color).light} rounded-2xl p-8 shadow-lg`}>
                    <div className="flex items-center justify-center mb-6">
                      <div className={`${getColorClasses(step.color).bg} p-6 rounded-full`}>
                        <step.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Progress</span>
                          <span className="text-sm font-medium text-gray-900">{step.step * 25}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${getColorClasses(step.color).bg} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${step.step * 25}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                          <div className="text-2xl font-bold text-gray-900">{step.step * 2}h</div>
                          <div className="text-xs text-gray-600">Setup Time</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                          <div className="text-2xl font-bold text-gray-900">{step.step * 10}+</div>
                          <div className="text-xs text-gray-600">Tasks Done</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="bg-gray-200 rounded-full p-3">
                    <ArrowRight className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              The entire process takes less than 48 hours to complete. 
              You'll start seeing improvements in your campaigns within the first week.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
              Start Your Free Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;