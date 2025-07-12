// Google Analytics yardımcı fonksiyonları
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics ID'nizi buraya yazın
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Bu kısmı kendi Analytics ID'nizle değiştirin

// Google Analytics'i başlat
export const initGA = () => {
  // Google Analytics script'ini head'e ekle
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);

  // gtag fonksiyonunu başlat
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Sayfa görüntüleme takibi
export const trackPageView = (url: string, title?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Özel etkinlik takibi
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Form gönderimi takibi
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Buton tıklama takibi
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'engagement', buttonName);
};

// Telefon numarası tıklama takibi
export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'phone_number');
};

// Email tıklama takibi
export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'email_address');
};

// Demo talep etme takibi
export const trackDemoRequest = () => {
  trackEvent('demo_request', 'conversion', 'demo_form');
};

// Scroll derinliği takibi
export const trackScrollDepth = () => {
  let maxScroll = 0;
  
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      trackEvent('scroll', 'engagement', `${scrollPercent}%`);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};