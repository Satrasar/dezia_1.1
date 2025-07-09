import React from 'react';
import { Database, ShoppingCart, Calendar, TrendingUp, Eye, DollarSign } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Database,
      title: 'CRM Entegrasyonu',
      description: 'Müşteri verilerini reklam platformlarına otomatik aktarım',
      benefits: ['Müşteri segmentasyonu', 'Kişiselleştirilmiş reklamlar', 'Yaşam döngüsü pazarlama']
    },
    {
      icon: ShoppingCart,
      title: 'E-ticaret Dinamik Reklamlar',
      description: 'Ürün verilerini kullanarak otomatik reklam oluşturma',
      benefits: ['Dinamik ürün reklamları', 'Stok durumu entegrasyonu', 'Fiyat optimizasyonu']
    },
    {
      icon: Calendar,
      title: 'Mevsimsel Kampanya Planlaması',
      description: 'Otomatik sezonsal kampanya yönetimi',
      benefits: ['Tatil kampanyaları', 'Sezon öncesi hazırlık', 'Bütçe planlaması']
    },
    {
      icon: TrendingUp,
      title: 'Envanter Bazlı Otomasyon',
      description: 'Stok durumuna göre otomatik reklam açma/kapatma',
      benefits: ['Stok takibi', 'Otomatik durdurma', 'Yeniden başlatma']
    },
    {
      icon: Eye,
      title: 'Rakip Analizi',
      description: 'Otomatik rakip takibi ve fiyatlandırma',
      benefits: ['Rakip reklam analizi', 'Fiyat karşılaştırması', 'Strateji önerileri']
    },
    {
      icon: DollarSign,
      title: 'Müşteri Değeri Optimizasyonu',
      description: 'Yaşam değeri bazında reklam harcaması optimizasyonu',
      benefits: ['LTV hesaplama', 'Segment bazlı bütçe', 'ROI maksimizasyonu']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-slate-600">
            Gelişmiş Çözümler
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            İleri Seviye Otomasyon Çözümleri
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            İşletmenizin özel ihtiyaçları için tasarlanmış gelişmiş otomasyon araçları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700"
            >
              <div className="bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="h-7 w-7 text-gray-300" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {solution.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {solution.description}
              </p>
              
              <div className="space-y-2">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Özelleştirilmiş Çözümler
              </h3>
              <p className="text-gray-400 mb-6">
                Her işletmenin kendine özgü ihtiyaçları vardır. Sizin için özel çözümler geliştiriyoruz.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-300">50+</div>
                  <div className="text-sm text-gray-400">Özel entegrasyon</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-300">99%</div>
                  <div className="text-sm text-gray-400">Otomasyon oranı</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600">
              <h4 className="font-bold text-white mb-4">Neden Gelişmiş Çözümler?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Tam otomatik işlem akışları</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Gerçek zamanlı veri senkronizasyonu</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Akıllı karar verme algoritmaları</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Öngörülü analitik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;