<<<<<<< HEAD
//@ts-nocheck
"use client"
/* eslint-disable @next/next/no-head-element */

import { useEffect, useRef } from 'react';
=======
/* eslint-disable @next/next/no-head-element */
>>>>>>> main
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const text = document.createElement("h5", "test")
      text.parentElement = document.body
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [ref]);
=======
>>>>>>> main
  return (
    <html>
      <head>
      </head>
      <body>{children}</body>
    </html>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> main
}
