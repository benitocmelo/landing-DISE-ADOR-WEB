import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Tu tienda no debería frenar lo que tu marca podría vender.
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Si necesitas lanzar, corregir o optimizar tu Shopify, podemos ayudarte a construir una experiencia más clara, más sólida y más preparada para convertir.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/+573015700961?text=Hola,%20quiero%20solicitar%20una%20propuesta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-600/20 text-lg"
          >
            Solicitar propuesta
          </a>
          <a 
            href="#optimizacion"
            className="inline-flex justify-center items-center px-8 py-4 rounded-lg border border-gray-600 hover:border-gray-400 text-white font-semibold transition-colors text-lg"
          >
            Quiero optimizar mi tienda
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
