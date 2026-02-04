import React, { useState } from 'react';
import { ShoppingBag, Zap, CheckCircle2 } from 'lucide-react';

const NeedsAssessment: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            ¿Qué necesita tu negocio hoy?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">
            Elige la etapa que más resuena contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Card A: Shopify */}
          <a
            href="#pricing"
            className={`block relative p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group text-left
              ${hoveredCard === 'shopify' 
                ? 'border-blue-500 shadow-xl scale-[1.01] md:scale-[1.02] bg-blue-50 dark:bg-blue-900/20' 
                : 'border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900'
              }`}
            onMouseEnter={() => setHoveredCard('shopify')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShoppingBag className="w-24 h-24 md:w-48 md:h-48 text-blue-500" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-blue-600 dark:text-blue-300">
                <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">Visión a Largo Plazo</h3>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 font-medium mb-4 md:mb-6 leading-snug">
                "Quiero mostrar todo mi catálogo y gestionar inventario."
              </p>
              <ul className="space-y-2 md:space-y-3 mb-0 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                  Múltiples categorías y productos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                  Gestión automática de stock
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                  Carrito de compras tradicional
                </li>
              </ul>
            </div>
          </a>

          {/* Card B: Landing */}
          <a
            href="#pricing"
            className={`block relative p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group text-left
              ${hoveredCard === 'landing' 
                ? 'border-purple-500 shadow-xl scale-[1.01] md:scale-[1.02] bg-purple-50 dark:bg-purple-900/20' 
                : 'border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900'
              }`}
            onMouseEnter={() => setHoveredCard('landing')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 md:w-48 md:h-48 text-purple-500" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-purple-600 dark:text-purple-300">
                <Zap className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">Venta Rápida (Flash)</h3>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 font-medium mb-4 md:mb-6 leading-snug">
                "Quiero impulsar un producto ganador y recibir pedidos hoy mismo."
              </p>
              <ul className="space-y-2 md:space-y-3 mb-0 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-purple-500 shrink-0" />
                  Enfoque total en un solo producto
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-purple-500 shrink-0" />
                  Cierre de venta por WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-purple-500 shrink-0" />
                  Velocidad de carga instantánea
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NeedsAssessment;