import React from 'react';
import { ShoppingBag, Monitor, Home, GraduationCap, Heart, Car } from 'lucide-react';

const Industries = () => {
  const handleScheduleCall = () => {
    // Cal.com integration for scheduling - Emir Kayar profile
    window.open('https://cal.com/emir-kayar-upfugr/tanisma-toplantisi-dezia', '_blank');
  };

  const primaryIndustries = [
    {
      icon: ShoppingBag,
      title: 'E-ticaret Şirketleri',
      description: '10-500 çalışanlı e-ticaret firmaları',
      features: ['Ürün katalog entegrasyonu', 'Dinamik reklam oluşturma', 'Sepet terk kampanyaları', 'Cross-sell optimizasyonu'],
      improvement: '+65%',
      color: 'gray'
    },
    {
      icon: Monitor,
      title: 'Dijital Ajanslar',
      description: 'Alt hizmet sağlayıcısı olarak çalışma',
      features: ['White-label çözümler', 'Müşteri raporlama', 'Çoklu hesap yönetimi', 'Ajans dashboard'],
      improvement: '+40%',
      color: 'gray'
    },
    {
      icon: Monitor,
      title: 'SaaS Şirketleri',
      description: 'Yazılım hizmeti sunan şirketler',
      features: ['Lead generation', 'Free trial kampanyaları', 'Churn azaltma', 'Upsell otomasyonu'],
      improvement: '+80%',
      color: 'gray'
    }
  ];

  const secondaryIndustries = [
    {
      icon: Home,
      title: 'Emlak Firmaları',
      description: 'Gayrimenkul satış ve kiralama',
      improvement: '+55%'
    },
    {
      icon: GraduationCap,
      title: 'Eğitim Kurumları',
      description: 'Online ve offline eğitim hizmetleri',
      improvement: '+45%'
    },
    {
      icon: Heart,
      title: 'Sağlık/Estetik Klinikleri',
      description: 'Özel sağlık hizmetleri',
      improvement: '+70%'
    },
    {
      icon: Car,
      title: 'Otomotiv Bayileri',
      description: 'Araç satış ve servis hizmetleri',
      improvement: '+35%'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-slate-700">
            Hedef Sektörler
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hangi Sektörlere Hizmet Veriyoruz
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Farklı sektörlerdeki işletmelerin özel ihtiyaçlarına yönelik çözümler sunuyoruz
          </p>
        </div>

        {/* Primary Industries */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Öncelikli Hedef Sektörler</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryIndustries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700"
              >
                <div className="bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <industry.icon className="h-7 w-7 text-gray-300" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">
                  {industry.title}
                </h4>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {industry.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-700 rounded-lg p-3 text-center border border-slate-600">
                  <div className="text-2xl font-bold text-gray-300">
                    {industry.improvement}
                  </div>
                  <div className="text-sm text-gray-400">Ortalama İyileştirme</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Industries */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Diğer Hizmet Verdiğimiz Sektörler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryIndustries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 hover:shadow-lg transition-all duration-300 text-center border border-slate-700"
              >
                <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <industry.icon className="h-6 w-6 text-gray-300" />
                </div>
                
                <h4 className="font-bold text-white mb-2 text-sm">
                  {industry.title}
                </h4>
                
                <p className="text-gray-400 text-xs mb-3">
                  {industry.description}
                </p>
                
                <div className="text-lg font-bold text-gray-300">
                  {industry.improvement}
                </div>
                <div className="text-xs text-gray-400">Ortalama İyileştirme</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-slate-800 rounded-2xl p-8 text-white text-center border border-slate-700">
          <h3 className="text-2xl font-bold mb-4">
            Sektörünüz Listede Yok mu?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Her sektörden işletmelere hizmet veriyoruz. Sizin için de özel çözümler geliştirebiliriz.
          </p>
          <button 
            onClick={handleScheduleCall}
            className="bg-gray-300 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
          >
            Sektörünüz İçin Çözüm Alın
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;