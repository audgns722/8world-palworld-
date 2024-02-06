"use client"

import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="googleAd-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-3131973401944410"
        data-ad-slot="5792448771"
      />
    </div>
  );
};

export default GoogleAd;