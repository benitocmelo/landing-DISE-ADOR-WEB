import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/+573015700961"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95 group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold hidden md:inline">¿Hablamos de tu opción ideal?</span>
      <span className="font-bold md:hidden">Hablemos</span>
    </a>
  );
};

export default FloatingCTA;