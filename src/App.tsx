import React from 'react';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Analytics />
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Industries />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;