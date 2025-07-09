import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    adBudget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const budgetOptions = [
    { value: '', label: 'Select your monthly ad budget' },
    { value: '1000', label: 'Under $1,000' },
    { value: '5000', label: '$1,000 - $5,000' },
    { value: '10000', label: '$5,000 - $10,000' },
    { value: '25000', label: '$10,000 - $25,000' },
    { value: '50000', label: '$25,000 - $50,000' },
    { value: '50000+', label: 'Over $50,000' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Switch Your Ads to <span className="text-orange-500">Automation</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              50% off first month. Start now, see the difference immediately.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">Setup completed in 24-48 hours</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">See improvements within first week</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">No long-term contracts required</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-semibold">30-Day Money-Back Guarantee</h3>
              </div>
              <p className="text-blue-100">
                Not satisfied with the results? Get a full refund within 30 days. 
                No questions asked, no hassle.
              </p>
            </div>

            <div className="bg-orange-500 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-8 w-8 text-white" />
                <h3 className="text-xl font-semibold text-white">Limited Time Offer</h3>
              </div>
              <p className="text-orange-100">
                Get 50% off your first month when you sign up today. 
                This exclusive offer won't last long!
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get Started Today
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="adBudget" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Ad Budget *
                </label>
                <select
                  id="adBudget"
                  name="adBudget"
                  value={formData.adBudget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  {budgetOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get My Free Analysis</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-orange-500 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
              </p>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• We'll analyze your current ad performance</li>
                <li>• Schedule a strategy call within 24 hours</li>
                <li>• Provide a custom optimization plan</li>
                <li>• Start seeing results within 48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;