import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden py-12 md:py-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-64 h-64 md:w-96 md:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-xs md:text-sm mb-2 border border-blue-200 dark:border-blue-800 shadow-sm">
          🚀 La Promesa
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white pb-2 leading-[1.15]">
          Soluciones de Venta Digital: <br className="hidden md:block" />
          <span className="text-blue-600 dark:text-blue-400 block mt-2 md:inline md:mt-0">Estructura técnica y persuasiva</span>
        </h1>
        
        <p className="text-base md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
          Una propuesta diseñada para que dejes de preocuparte por la tecnología y te enfoques en vender.
        </p>
      </div>
    </section>
  );
};

export default Hero;