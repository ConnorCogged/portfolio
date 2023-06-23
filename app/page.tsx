import { primaryColors } from '../lib/ColorPalette';
import { Button } from '@/ui/Button';
import { Experience } from '@/ui/Experience';
import { Language } from '@/ui/Language';
import { useEffect, useRef, useState } from "react";

export default function Page() {
  return (
    <div>
      <header className='mt-6 text-center text-4xl font-extrabold'>Introduction</header>
      <hr className='m-8'/>
      <div id='introduction'>
        <p className="cursive text-center text-6xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 background-animate">Connor Johnson</p>
        <p className="text-center">Hey there! I'm a developer based in Thailand and have been developing for <b className='pixel font-extrabold text-pink-400'>4 years</b>,<br/>but I started with basic programming concepts since the age of <b className='pixel font-extrabold text-green-400'>7</b>.</p>
      </div>
      <hr className='m-8'/>
      <div id='experiences'>
        <header className="text-4xl text-center font-extrabold">Experience</header>
        <div className='flex self-center justify-center w-full mb-8'>
          <Experience description='At ICC, I developed Java plugins to help maintain their minigames system.' imagesrc="https://cdn.discordapp.com/icons/914319745770221578/ee72fad7b3e26f0f3a74bfbf9c2f37d6.webp" time='2022-2023'>ICC</Experience>
        </div>
        <p className="text-2xl text-center font-extrabold">It's not a whole lot, but you can help me enlarge it!</p>
        <a href='mailto:hello@connorcogged.com' className='mt-4 text-2xl items-center justify-center flex flex-col mx-auto rounded-md bg-yellow-500 text-white p-2 w-64'>🌠 Contact me!</a>
      </div>
      <hr className='m-8'/>
      <div id='languages'>
        <header className='mt-6 text-center text-4xl font-extrabold'>My stack</header>
        <div className='flex mx-auto justify-center items-center'>
            <Language languageName='Javascript' time='3 years'/>
            <Language languageName='Java' time='2 years'/>
        </div>
      </div>
    </div>
  );
}