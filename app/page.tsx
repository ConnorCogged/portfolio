import { primaryColors } from '../lib/ColorPalette';
import { Button } from '@/ui/Button';
import { useEffect, useRef } from "react";

export default function Page() {
  return (
    <div>
      <header className='text-center text-4xl font-extrabold'>Introduction</header>
      <hr className='m-8'/>
      <div id='introduction'>
        <p className="cursive text-center text-6xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 background-animate">Connor Johnson</p>
        <p className="text-center">Hey there! I'm a developer based in Thailand and have been developing for <b className='pixel font-extrabold text-pink-400'>4 years</b>,<br/>but I started with basic programming concepts since the age of <b className='pixel font-extrabold text-green-400'>7</b>.</p>
      </div>
      <hr className='m-8'/>
      <div id='languages'>
        <header className="text-4xl text-center font-extrabold">Languages I can speak!</header>
      </div>
    </div>
  );
}
