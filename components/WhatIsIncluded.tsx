import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhatIsIncluded: React.FC = () => {
  const items = [
    "Diseño con criterio comercial",
    "Estructura pensada para vender",
    "Experiencia mobile cuidada",
    "Orden visual y jerarquía de contenido",
    "Mejor percepción de marca",
    "Acompañamiento claro por etapas"
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Qué obtienes al trabajar con nosotros</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
              <span className="text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="inline-block bg-blue-900/20 border border-blue-800/50 rounded-2xl p-6 md:p-8">
          <p className="text-lg md:text-xl text-blue-100 font-medium italic">
            "No vendemos una web bonita por fuera y vacía por dentro. Vendemos una herramienta más fuerte para tu negocio."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIncluded;
