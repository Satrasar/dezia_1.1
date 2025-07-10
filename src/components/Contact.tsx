import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cal.com integration for scheduling - Emir Kayar profile
    window.open('https://cal.com/emir-kayar-upfugr/tanisma-toplantisi-dezia', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const budgetOptions = [
    { value: '', label: 'Aylık reklam bütçenizi seçin' },
    { value: '5000', label: '5.000₺ - 15.000₺' },
    { value: '15000', label: '15.000₺ - 30.000₺' },
    { value: '30000', label: '30.000₺ - 50.000₺' },
    { value: '50000', label: '50.000₺ - 100.000₺' },
    { value: '100000', label: '100.000₺+' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: '+90 544 224 2000',
      description: 'Pazartesi-Cuma 09:00-18:00'
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: 'hello@dezia.info',
      description: 'Online destek'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-slate-600">
            İletişime Geçin
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reklamlarınızı Otomasyona Geçirin
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ücretsiz analiz için hemen iletişime geçin. 24 saat içinde size dönüş yapıyoruz.
          </p>
          
          {/* CTA Button right under the title */}
          <div className="mt-8">
            <button 
              onClick={handleSubmit}
              className="bg-gray-300 hover:bg-gray-200 text-slate-900 py-3 px-6 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Ücretsiz Analiz Talep Et</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Hemen İletişime Geçin
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Reklamlarınızı optimize etmek için bugün başlayın. Uzman ekibimiz size yardımcı olmaya hazır.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-white font-medium">{info.details}</p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-700 rounded-2xl p-6 text-white border border-slate-600">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-8 w-8 text-gray-300" />
                <h4 className="text-xl font-bold">Hızlı Yanıt</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Tüm taleplere 24 saat içinde yanıt veriyoruz. Acil durumlar için telefon ile ulaşabilirsiniz.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Ortalama yanıt süresi: 2 saat</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;