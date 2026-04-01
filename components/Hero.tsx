import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-left md:text-center px-4 overflow-hidden py-16 md:py-24 bg-slate-950">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Diseñamos, rediseñamos y optimizamos tiendas Shopify para vender mejor.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Creamos tiendas desde cero, mejoramos tiendas que ya existen y corregimos los puntos que hoy están frenando tus ventas.
            </p>

            <p className="text-sm md:text-base text-blue-400 font-medium">
              Ideal para marcas que quieren lanzar con fuerza o dejar de perder ventas por una web floja.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#precios" 
              className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-600/20"
            >
              Quiero una propuesta
            </a>
            <a 
              href="#optimizacion" 
              className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg border border-gray-600 hover:border-gray-400 text-white font-semibold transition-colors"
            >
              Quiero optimizar mi tienda
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Shopify desde cero o sobre tienda existente</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Diseño comercial enfocado en conversión</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Mobile-first + experiencia clara de compra</span>
            </div>
          </div>
        </div>

        <div className="flex-1 hidden lg:block relative">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20 bg-slate-900 p-2">
            <div className="absolute top-0 left-0 w-full h-8 bg-slate-800/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            {/* Placeholder for a premium dashboard/store mockup */}
            <div className="mt-8 aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded border border-slate-700/50 flex flex-col items-center justify-center p-6">
              <div className="w-full flex gap-4 mb-4">
                <div className="w-1/3 h-24 bg-slate-700/50 rounded-lg"></div>
                <div className="w-2/3 h-24 bg-slate-700/50 rounded-lg"></div>
              </div>
              <div className="w-full h-48 bg-slate-700/50 rounded-lg mb-4"></div>
              <div className="w-full flex gap-4">
                <div className="w-1/4 h-16 bg-slate-700/50 rounded-lg"></div>
                <div className="w-1/4 h-16 bg-slate-700/50 rounded-lg"></div>
                <div className="w-1/4 h-16 bg-slate-700/50 rounded-lg"></div>
                <div className="w-1/4 h-16 bg-slate-700/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;