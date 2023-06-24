//@ts-nocheck
"use client"
/* eslint-disable @next/next/no-head-element */

import { useEffect, useRef } from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Script from 'next/script';

/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <Script
        src="/public.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly`)
        }
        />
      </head>
      <body className='dark:bg-slate-900 bg-white'>
      <div>
        <CookieConsent
            location="bottom"
            buttonText="I consent"
            cookieName="cookiesAccepted"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
        {children}
      </div>
      </body>
    </html>
  )
}
