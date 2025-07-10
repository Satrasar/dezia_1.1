import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCTAClick = () => {
    // Cal.com integration for scheduling - Emir Kayar profile
    window.open('https://cal.com/emir-kayar-upfugr', '_blank');
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-3">
        <div className="bg-slate-800/90 backdrop-blur-md rounded-full border border-slate-700 shadow-lg max-w-lg w-full">
          <div className="flex items-center justify-between px-8 py-1.5">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/dezialogo.svg" 
                alt="Dezia Logo" 
                className="h-14 w-auto brightness-110 contrast-110"
                onError={(e) => {
                  console.log('Logo yüklenemedi:', e);
                  // Fallback olarak text göster
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="text-xl font-bold text-white hidden">Dezia</span>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex">
              <button 
                onClick={handleCTAClick}
                className="bg-gray-300 hover:bg-gray-200 text-slate-900 px-5 py-1.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-sm"
              >
                Hemen Başlayın
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-1.5 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden border-t border-slate-700">
              <div className="flex flex-col p-3">
                <button 
                  onClick={handleCTAClick}
                  className="bg-gray-300 text-slate-900 px-5 py-1.5 rounded-full font-medium transition-all duration-200 text-sm"
                >
                  Hemen Başlayın
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;