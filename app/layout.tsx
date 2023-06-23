//@ts-nocheck
"use client"
/* eslint-disable @next/next/no-head-element */

import { useEffect, useRef } from 'react';

/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
