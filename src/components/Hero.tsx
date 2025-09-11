import React from 'react';
import { ArrowRight, Play, TrendingUp, Clock, Target } from 'lucide-react';
import { trackButtonClick, trackDemoRequest } from '../utils/analytics';

const Hero = () => {
  const handleDemoClick = () => {
    trackButtonClick('hero_demo_button');
    trackDemoRequest();
    // Cal.com integration for scheduling - Emir Kayar profile
    window.open('https://cal.com/ozlemkumtas', '_blank');
  };

  const handleHowItWorksClick = () => {
    trackButtonClick('hero_how_it_works');
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-slate-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Türkiye'nin Tek Reklam Otomasyon Platformu
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Reklamlarınızı{' '}
                <span className="text-gray-300">
                  Otopilota
                </span>{' '}
                Alın
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Facebook, Instagram ve Google Ads reklamlarınızı 24/7 akıllı sistemimizle optimize edin. 
                Günde sadece 5 dakika harcayın, gerisini bize bırakın.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-gray-300" />
                  <span className="text-2xl font-bold text-white">%40</span>
                </div>
                <p className="text-gray-400 text-sm">Daha Az Zaman</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-gray-300" />
                  <span className="text-2xl font-bold text-white">%35</span>
                </div>
                <p className="text-gray-400 text-sm">Daha İyi Performans</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-gray-300" />
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <p className="text-gray-400 text-sm">Otomatik Kontrol</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleDemoClick}
                className="bg-gray-300 hover:bg-gray-200 text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Ücretsiz Demo Talep Et</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={handleHowItWorksClick}
                className="border-2 border-gray-300 text-gray-300 hover:border-gray-200 hover:text-gray-200 px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Nasıl Çalışır?</span>
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
              {/* Mac-style window controls */}
              <div className="absolute top-6 left-6 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white/90 ml-16">Canlı Dashboard</h3>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                    ● CANLI
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300">
                    <p className="text-sm text-gray-400 font-medium mb-2">Aktif Kampanyalar</p>
                    <p className="text-3xl font-bold text-white">24</p>
                  </div>
                  <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300">
                    <p className="text-sm text-gray-400 font-medium mb-2">Tasarruf</p>
                    <p className="text-3xl font-bold text-white">₺18.450</p>
                  </div>
                  <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300">
                    <p className="text-sm text-gray-400 font-medium mb-2">Dönüşüm</p>
                    <p className="text-3xl font-bold text-white">+156%</p>
                  </div>
                  <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300">
                    <p className="text-sm text-gray-400 font-medium mb-2">ROI</p>
                    <p className="text-3xl font-bold text-white">4.2x</p>
                  </div>
                </div>

                <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
                  <p className="text-sm text-gray-400 font-medium mb-4">Performans Trendi</p>
                  <div className="flex items-end space-x-3 h-20">
                    {[40, 60, 35, 80, 45, 90, 70, 100].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-400 hover:to-blue-300"
                        style={{ 
                          height: `${height}%`, 
                          width: '16px',
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-slate-800/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-950 from-slate-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-400">Aylık Büyüme</div>
                  <div className="text-2xl font-bold text-white">+245%</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-slate-800/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-950 from-slate-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-400">Hedef Doğruluk</div>
                  <div className="text-2xl font-bold text-white">98.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;