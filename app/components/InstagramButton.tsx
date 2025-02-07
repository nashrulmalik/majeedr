'use client'
import { Instagram } from 'lucide-react';

export default function InstagramButton() {
  return (
    <button 
      onClick={() => window.open('https://www.instagram.com/majeedr1/?hl=en', '_blank')}
      className="bg-[#6424B8] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 inline-flex items-center gap-2 cursor-pointer"
    >
      <div className="flex -space-x-2 mr-1">
        <Instagram className="w-8 h-8" />
      </div>
      @majeedr
    </button>
  );
}
