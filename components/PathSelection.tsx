import React from 'react';
import { Check } from 'lucide-react';

const PathSelection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué necesita tu negocio hoy?</h2>
          <p className="text-lg text-gray-400">Elige la ruta que mejor se adapta a tu etapa actual.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Lanzar una tienda completa</h3>
            <p className="text-gray-400 text-sm mb-6 min-h-[40px]">Quiero una tienda Shopify sólida, profesional y lista para crecer.</p>
            
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Catálogo completo</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Colecciones y productos</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Diseño alineado a marca</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Base lista para escalar</span>
              </li>
            </ul>
            
            <a href="#precios" className="w-full py-3 rounded-lg border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors text-center">
              Ver opción Shopify
            </a>
          </div>

          {/* Card 2 - Destacada */}
          <div className="bg-slate-900 rounded-2xl p-8 border-2 border-blue-600 relative transform md:-translate-y-4 flex flex-col shadow-2xl shadow-blue-900/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Más solicitada
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Optimizar mi tienda actual</h3>
            <p className="text-gray-400 text-sm mb-6 min-h-[40px]">Ya tengo tienda, pero siento que no está convirtiendo como debería.</p>
            
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Mejoras visuales y comerciales</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Menos fricción en la compra</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Optimización mobile</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Enfoque en conversión</span>
              </li>
            </ul>
            
            <a href="#optimizacion" className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-center">
              Ver optimización
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Vender un producto rápido</h3>
            <p className="text-gray-400 text-sm mb-6 min-h-[40px]">Quiero impulsar un producto puntual con una landing enfocada en acción.</p>
            
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Página enfocada en 1 oferta</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Flujo simple y rápido</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>CTA directo a compra o WhatsApp</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Ideal para campañas</span>
              </li>
            </ul>
            
            <a href="#precios" className="w-full py-3 rounded-lg border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors text-center">
              Ver landing flash
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSelection;
