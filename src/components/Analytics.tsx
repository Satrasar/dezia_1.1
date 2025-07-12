import React, { useEffect } from 'react';
import { initGA, trackScrollDepth } from '../utils/analytics';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics'i başlat
    initGA();
    
    // Scroll takibini başlat
    const removeScrollListener = trackScrollDepth();
    
    // Component unmount olduğunda listener'ı temizle
    return () => {
      removeScrollListener();
    };
  }, []);

  return null; // Bu component görsel bir şey render etmez
};

export default Analytics;