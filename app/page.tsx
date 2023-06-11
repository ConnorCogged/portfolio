import { primaryColors } from '../lib/ColorPalette';
import { Button } from '@/ui/Button';

export default function Page() {
  console.log(primaryColors.dark.secondary)
  return (
    <div>
      <div>
        <p className="cursive mb-4 mt-24 ml-16 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 background-animate">Connor Johnson</p>
        <p className="text-white ml-16">Hey there! I'm a developer based in Thailand and have been developing for 4 years, but I started with basic programming concepts since the age of 7.</p>
      </div>
      <div>
        <p className="mt-12 ml-16 text-2xl font-extrabold text-white">Languages I can speak!</p>
      </div>
    </div>
  );
}
