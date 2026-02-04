import React from 'react';
import { ShieldCheck, Server, RefreshCw, Headphones } from 'lucide-react';

const Maintenance: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-3xl p-6 md:p-12 border border-emerald-100 dark:border-emerald-900/30">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold text-xs md:text-sm uppercase tracking-wide mb-2">
                    Servicio Mensual
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    Tranquilidad Total por <span className="text-emerald-600 dark:text-emerald-400">$15 USD/mes</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Garantía de que tu negocio nunca se detenga. No es un gasto extra, es tu seguro contra problemas técnicos.
                </p>
                
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Seguridad & Monitoreo</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                             <Server className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Disponibilidad 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                             <RefreshCw className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Actualizaciones Pequeñas</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                             <Headphones className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base">Soporte WhatsApp</span>
                    </div>
                </div>
            </div>
            
            <div className="w-full lg:w-1/3 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-700 text-center">
                 <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">¿Por qué es necesario?</h3>
                 <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    "Evita que tu sitio quede obsoleto, sea hackeado o se caiga justo cuando tienes clientes comprando."
                 </p>
                 <div className="w-full py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold rounded-xl text-sm border border-emerald-200 dark:border-emerald-800">
                    Incluido en soporte
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;