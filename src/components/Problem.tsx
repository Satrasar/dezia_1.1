import React from 'react';
import { AlertTriangle, Clock, TrendingDown, Search, Settings, Eye } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Having to check ad accounts daily',
      description: 'Constant monitoring takes hours away from your business'
    },
    {
      icon: AlertTriangle,
      title: 'Noticing budget depletion too late',
      description: 'Missing budget alerts leads to wasted spend and lost opportunities'
    },
    {
      icon: TrendingDown,
      title: 'Not knowing which ads actually work',
      description: 'Poor tracking means you can\'t identify winning campaigns'
    },
    {
      icon: Settings,
      title: 'Constant manual optimization',
      description: 'Time-consuming tweaks that should be automated'
    },
    {
      icon: Eye,
      title: 'Unable to track competitor activities',
      description: 'Missing competitive insights hurts your market position'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Is Ad Management <span className="text-orange-500">Wearing You Down?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Running successful ad campaigns shouldn't consume your entire day. 
            These common challenges are holding back your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sound Familiar?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              You're not alone. 89% of businesses struggle with these exact same ad management challenges.
            </p>
            <div className="flex items-center justify-center space-x-8 text-red-600">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Hours per week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm">Budget waste</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">60%</div>
                <div className="text-sm">Missed opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;