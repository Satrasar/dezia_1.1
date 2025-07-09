import React from 'react';
import { Check, Star, Shield, Headphones, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'STARTER',
      price: '$99',
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Daily performance reports',
        'Budget control system',
        'Basic A/B testing',
        'WhatsApp support',
        '30-day money-back guarantee',
        'Up to 2 ad accounts',
        'Basic dashboard access'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'PROFESSIONAL',
      price: '$249',
      period: 'month',
      description: 'Most popular choice for growing businesses',
      features: [
        'Everything in Starter',
        'Automatic bid optimization',
        'Retargeting automation',
        'Weekly detailed analysis',
        'Priority support',
        'Up to 5 ad accounts',
        'Advanced dashboard',
        'Custom reporting'
      ],
      popular: true,
      color: 'orange'
    },
    {
      name: 'ENTERPRISE',
      price: '$499',
      period: 'month',
      description: 'Complete solution for large businesses',
      features: [
        'Everything in Professional',
        'Multi-platform management',
        'CRM integration',
        'Custom dashboard',
        'Weekly consultations',
        'Unlimited ad accounts',
        'White-label reporting',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    if (popular) {
      return {
        border: 'border-orange-500',
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        light: 'bg-orange-50'
      };
    }
    
    const colors = {
      blue: { border: 'border-blue-200', bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50' },
      orange: { border: 'border-orange-200', bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50' },
      purple: { border: 'border-purple-200', bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Packages and <span className="text-orange-500">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core automation features 
            and come with a 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-orange-500 scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 ${getColorClasses(plan.color, plan.popular).text} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                }`}>
                  {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">30-Day Guarantee</h4>
            <p className="text-gray-600">Not satisfied? Get your money back, no questions asked.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-gray-600">Get help whenever you need it from our expert team.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Setup</h4>
            <p className="text-gray-600">Start seeing results within 48 hours of signup.</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Special Launch Offer
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Get 50% off your first month on any plan. Limited time offer!
          </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">35</div>
              <div className="text-sm">Minutes</div>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
            Claim Your 50% Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;