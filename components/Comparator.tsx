import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Comparator: React.FC = () => {
  const comparisonData = [
    {
      role: "Copywriter",
      task: "Redacción de textos persuasivos",
      price: "$80 - $150 USD"
    },
    {
      role: "Diseñador Web",
      task: "Creación de la interfaz visual",
      price: "$150 - $300 USD"
    },
    {
      role: "Implementador",
      task: "Configuración técnica y dominio",
      price: "$100 - $200 USD"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            Comparativa de inversión: Servicios por separado vs. Nuestra propuesta integral.
          </p>
        </div>

        {/* --- MOBILE VIEW (Optimized Cards) --- */}
        <div className="md:hidden space-y-6">
          <div className="space-y-4">
            {comparisonData.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">{item.role}</h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">Individual</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{item.task}</p>
                <div className="flex justify-end border-t border-gray-100 dark:border-slate-700 pt-3">
                  <span className="font-bold text-gray-800 dark:text-gray-200">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Summary Card (Competitor Total) */}
          <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-2xl border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-red-600 dark:text-red-400 font-bold uppercase text-xs mb-1">Total por aparte</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400 decoration-wavy line-through decoration-red-400/50">
              $330 - $650 USD
            </div>
          </div>

          {/* Mobile Summary Card (My Offer) */}
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-500/30 text-white relative overflow-hidden">
             <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-200" />
                  <span className="font-bold text-lg uppercase tracking-wider">Nuestra Propuesta</span>
                </div>
                <p className="text-blue-100 text-xs mb-4">Todo el ecosistema Juan MKT</p>
                <div className="text-4xl font-extrabold mb-2">$180 - $350 USD</div>
                <div className="text-xs text-blue-200 bg-blue-700/50 inline-block px-3 py-1 rounded-full">
                  ¡Ahorro garantizado!
                </div>
             </div>
          </div>
        </div>

        {/* --- DESKTOP VIEW (Table with Safe Overflow) --- */}
        <div className="hidden md:block overflow-x-auto rounded-3xl shadow-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 dark:bg-slate-900/50">
                <th className="p-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Especialista</th>
                <th className="p-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trabajo a realizar</th>
                <th className="p-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Costo Mercado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
              {comparisonData.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-6 font-semibold text-gray-800 dark:text-gray-200">{item.role}</td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">{item.task}</td>
                  <td className="p-6 text-right font-medium text-gray-800 dark:text-gray-200">{item.price}</td>
                </tr>
              ))}
              
              <tr className="bg-red-50 dark:bg-red-900/10">
                <td colSpan={2} className="p-6 font-bold text-red-600 dark:text-red-400 uppercase text-right">Total por aparte</td>
                <td className="p-6 text-right font-bold text-red-600 dark:text-red-400 text-lg decoration-wavy line-through decoration-red-400/50">$330 - $650 USD</td>
              </tr>
              <tr className="bg-blue-600 text-white relative overflow-hidden">
                <td colSpan={2} className="p-6 align-middle relative z-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-blue-200" />
                    <div>
                      <div className="font-bold text-xl uppercase">Nuestra Propuesta</div>
                      <div className="text-blue-100 text-sm">Todo incluido en un solo lugar</div>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-right align-middle relative z-10">
                  <div className="font-extrabold text-3xl">$180 - $350 USD</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 italic px-4">
          * Al trabajar con Juan MKT, aseguras coherencia total en tu marca desde el día 1.
        </p>
      </div>
    </section>
  );
};

export default Comparator;