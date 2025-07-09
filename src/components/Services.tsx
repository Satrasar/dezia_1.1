import React from 'react';
import { Facebook, Search, Users, BarChart3, Target, Repeat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Facebook,
      title: 'Facebook/Instagram Reklam Yönetimi',
      description: 'Otomatik kampanya yönetimi ve optimizasyonu',
      features: ['Otomatik bütçe dağılımı', 'Hedef kitle optimizasyonu', 'A/B test otomasyonu', 'Performans raporlama'],
      color: 'gray'
    },
    {
      icon: Search,
      title: 'Google Ads Optimizasyonu',
      description: 'Arama ve görüntülü reklam kampanyalarınızı optimize edin',
      features: ['Anahtar kelime optimizasyonu', 'Teklif yönetimi', 'Kalite skoru iyileştirme', 'Dönüşüm takibi'],
      color: 'gray'
    },
    {
      icon: Users,
      title: 'Müşteri Segmentasyonu',
      description: 'Gelişmiş hedef kitle oluşturma ve yönetimi',
      features: ['Davranışsal segmentasyon', 'Lookalike audience', 'Custom audience', 'Retargeting listeleri'],
      color: 'gray'
    },
    {
      icon: BarChart3,
      title: 'Performans Analizi',
      description: 'Detaylı raporlama ve veri analizi',
      features: ['Gerçek zamanlı raporlar', 'ROI analizi', 'Dönüşüm takibi', 'Rakip analizi'],
      color: 'gray'
    },
    {
      icon: Target,
      title: 'A/B Test Otomasyonu',
      description: 'Otomatik test yönetimi ve optimizasyon',
      features: ['Kreatif testleri', 'Hedef kitle testleri', 'Bütçe testleri', 'Otomatik kazanan seçimi'],
      color: 'gray'
    },
    {
      icon: Repeat,
      title: 'Retargeting Kampanyaları',
      description: 'Akıllı yeniden hedefleme stratejileri',
      features: ['Dinamik retargeting', 'Sepet terk kampanyaları', 'Cross-sell/upsell', 'Müşteri yaşam döngüsü'],
      color: 'gray'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-slate-700">
            Temel Hizmetlerimiz
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reklam Otomasyonu Hizmetleri
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Facebook, Instagram ve Google Ads reklamlarınızı otomatik yönetim ile optimize ediyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 group"
            >
              <div className="bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-gray-300" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;