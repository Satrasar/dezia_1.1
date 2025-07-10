import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Çözümler', href: '#solutions' },
    { name: 'Sektörler', href: '#industries' },
    { name: 'İletişim', href: '#contact' }
  ];

  const services = [
    { name: 'Facebook Ads Yönetimi', href: '#facebook-ads' },
    { name: 'Google Ads Optimizasyonu', href: '#google-ads' },
    { name: 'Instagram Reklamları', href: '#instagram-ads' },
    { name: 'Retargeting Kampanyaları', href: '#retargeting' },
    { name: 'A/B Test Otomasyonu', href: '#ab-testing' }
  ];

  const legalLinks = [
    { name: 'Gizlilik Politikası', href: '#privacy' },
    { name: 'Kullanım Şartları', href: '#terms' },
    { name: 'Çerez Politikası', href: '#cookies' },
    { name: 'KVKK', href: '#kvkk' }
  ];

  const socialLinks = [
  ];

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.getElementById(href.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/dezialogo.svg" 
                  alt="Dezia Logo" 
                  className="h-12 w-auto brightness-110 contrast-110 filter drop-shadow-lg"
                  onError={(e) => {
                    console.log('Footer logo yüklenemedi:', e);
                    // Fallback olarak text göster
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-xl font-bold text-white hidden">Dezia</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Türkiye'nin en gelişmiş reklam otomasyon platformu. 
                Reklamlarınızı otopilota alın, büyümenizi hızlandırın.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-400">hello@dezia.info</span>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(service.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Güncel Kalın</h3>
            <p className="text-gray-400 mb-4">
              Reklam dünyasındaki son gelişmeleri ve ipuçlarını kaçırmayın.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-gray-300 text-white placeholder-gray-400"
              />
              <button className="w-full bg-gray-300 hover:bg-gray-200 text-slate-900 py-3 px-4 rounded-lg font-medium transition-all duration-200">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6">
              <p className="text-gray-400">
                © 2025 Dezia. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-4">
                {legalLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-gray-300 hover:text-slate-900 p-3 rounded-lg transition-all duration-200"
              aria-label="Yukarı çık"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;