import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'How long does system setup take?',
      answer: 'Our setup process typically takes 24-48 hours. We handle all the technical configuration while you focus on your business. You\'ll start seeing optimizations within the first week of activation.'
    },
    {
      question: 'Which advertising platforms are supported?',
      answer: 'We support all major advertising platforms including Facebook Ads, Instagram Ads, Google Ads, Google Shopping, YouTube Ads, and LinkedIn Ads. We can also integrate with emerging platforms based on your needs.'
    },
    {
      question: 'Will my existing campaigns be affected?',
      answer: 'No, we carefully analyze your existing campaigns before making any changes. We can either optimize your current campaigns or create new ones based on your preferences. All changes are made gradually to ensure stability.'
    },
    {
      question: 'How do I get support?',
      answer: 'We offer 24/7 support through multiple channels including live chat, email, and phone. Professional and Enterprise plans include priority support with dedicated account managers.'
    },
    {
      question: 'What are the cancellation terms?',
      answer: 'You can cancel anytime with 30 days notice. We also offer a 30-day money-back guarantee on all plans. No long-term contracts or hidden fees - just transparent, month-to-month billing.'
    },
    {
      question: 'How does the automation actually work?',
      answer: 'Our AI system continuously monitors your campaigns 24/7, making real-time adjustments to bids, budgets, and targeting. It learns from your campaign data to optimize for your specific goals and industry.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption and never store your payment information. All data is processed securely and we\'re fully compliant with GDPR and other privacy regulations.'
    },
    {
      question: 'Can I still have control over my campaigns?',
      answer: 'Yes, you maintain full control. You can set rules, approve changes, and override any automated decisions. Our dashboard gives you complete visibility into all optimizations made.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions 
            about our advertising automation platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-orange-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 mb-6">
            Can't find the answer you're looking for? Our team is here to help you 
            understand how AutoAd Pro can transform your advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full font-semibold transition-all duration-200">
              Live Chat Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;