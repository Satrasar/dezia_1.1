import React from 'react';
import { CheckCircle, Zap, Brain, Shield, Users, BarChart3 } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'Smart Budget Management',
      description: 'Automatically adjust spending based on performance and prevent budget waste',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'Automatic A/B Testing',
      description: 'Continuously test ad variations to find the highest converting combinations',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Performance-Based Optimization',
      description: 'AI-powered optimization that improves your campaigns 24/7',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Inventory Control',
      description: 'Never run out of stock or oversell with intelligent inventory monitoring',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Competitor Tracking',
      description: 'Monitor competitor activities and adjust your strategy accordingly',
      color: 'red'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Reporting',
      description: 'Get instant insights and detailed analytics at your fingertips',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Now There's an <span className="text-orange-500">Automatic System</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform handles all the heavy lifting while you focus on growing your business. 
            Here's how we solve every problem you face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`inline-flex p-4 rounded-lg ${getColorClasses(solution.color)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="mt-6 flex items-center text-orange-500 font-medium">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Fully Automated</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to See the Difference?
              </h3>
              <p className="text-blue-100 mb-6">
                Join thousands of businesses that have transformed their ad performance 
                with our automated system. Get started today and see results within 48 hours.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-500">48h</div>
                <div className="text-sm text-blue-200">Setup Time</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-blue-200">Monitoring</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-500">∞</div>
                <div className="text-sm text-blue-200">Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;