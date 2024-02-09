'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function HeadCom() {
  return (
    <Head>
      
      <>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4313698984582740`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4313698984582740"
          crossorigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-4313698984582740"
        ></meta>
      </>
    </Head>
  );
}
