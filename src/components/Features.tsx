import React from 'react';
import { Zap, Shield, Clock, BarChart3, Bell, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Hızlı Kurulum',
      description: '24-48 saat içinde sisteminiz hazır',
      color: 'gray'
    },
    {
      icon: Shield,
      title: 'Güvenli Entegrasyon',
      description: 'Verileriniz tamamen güvende',
      color: 'gray'
    },
    {
      icon: Clock,
      title: '7/24 Monitoring',
      description: 'Kesintisiz izleme ve optimizasyon',
      color: 'gray'
    },
    {
      icon: BarChart3,
      title: 'Detaylı Raporlama',
      description: 'Günlük, haftalık ve aylık raporlar',
      color: 'gray'
    },
    {
      icon: Bell,
      title: 'Akıllı Uyarılar',
      description: 'Önemli değişiklikler için anında bildirim',
      color: 'gray'
    },
    {
      icon: Headphones,
      title: 'Uzman Destek',
      description: 'Türkçe teknik destek hizmeti',
      color: 'gray'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-slate-600">
            Platform Özellikleri
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Neden Dezia'yı Seçmelisiniz?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Reklamlarınızı yönetmek hiç bu kadar kolay olmamıştı
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-slate-700"
            >
              <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-gray-300" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Güvenilir Hizmet
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profesyonel ekibimiz ve güvenilir teknolojimizle yanınızdayız
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2">100+</div>
              <div className="text-sm text-gray-400">Başarılı Kampanya</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2">%95</div>
              <div className="text-sm text-gray-400">Başarı Oranı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2">2 Saat</div>
              <div className="text-sm text-gray-400">Teknik Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;