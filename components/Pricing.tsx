import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Opciones de Inversión
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Elige la opción que mejor se adapte a tu etapa actual. Ambos planes incluyen soporte continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-start">
          
          {/* Plan A (Vercel) */}
          <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 md:p-8 border-2 border-purple-500 shadow-2xl scale-100 md:scale-105 z-10 flex flex-col relative transition-all hover:shadow-purple-500/20">
            <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wide">
              Plan A
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">Landing Venta Única</h3>
            <div className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">(Vercel)</div>
            
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">$180</span>
                <span className="text-lg md:text-xl font-medium text-gray-500">USD</span>
            </div>
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">+ $15 USD / mes (Soporte y Alojamiento)</div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 border-b border-gray-100 dark:border-slate-800 pb-6 md:pb-8 min-h-[auto] md:min-h-[48px] text-sm md:text-base">
              Ideal para pautar un producto específico y recibir pedidos por WhatsApp.
            </p>
            
            <ul className="space-y-3 md:space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span className="font-semibold">Landing Page estratégica (Next.js)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span>Copywriting persuasivo incluido</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span>Hosting en Vercel (Velocidad extrema)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span>Botón flotante de WhatsApp</span>
              </li>
            </ul>
            <a href="https://wa.me/+573015700961?text=Hola,%20me%20interesa%20el%20Plan%20A:%20Landing%20de%20Venta" target="_blank" rel="noopener noreferrer" className="w-full py-3 md:py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-colors shadow-lg shadow-purple-500/30 text-center block">
              Elegir Plan A
            </a>
          </div>

          {/* Plan B (Shopify) */}
          <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-slate-800 flex flex-col relative transition-all hover:border-blue-500/50">
             <div className="absolute top-0 right-0 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wide">
              Plan B
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">Tienda Catálogo</h3>
            <div className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">(Shopify)</div>
            
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">$350</span>
                <span className="text-lg md:text-xl font-medium text-gray-500">USD</span>
            </div>
             <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">+ $15 USD / mes (Soporte Adicional)</div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 border-b border-gray-100 dark:border-slate-800 pb-6 md:pb-8 min-h-[auto] md:min-h-[48px] text-sm md:text-base">
              Ideal para organizar todos tus productos en un solo lugar profesional.
            </p>

            <ul className="space-y-3 md:space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Creación de tienda Shopify completa</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Configuración de pasarelas de pago</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Diseño de marca adaptado</span>
              </li>
               <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Carga de primeros 20 productos</span>
              </li>
            </ul>
            <a href="https://wa.me/+573015700961?text=Hola,%20me%20interesa%20el%20Plan%20B:%20Tienda%20Shopify" target="_blank" rel="noopener noreferrer" className="w-full py-3 md:py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center block">
              Elegir Plan B
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;