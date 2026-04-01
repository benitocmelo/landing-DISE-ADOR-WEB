import React from 'react';
import { XCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Tu web puede estar frenando tus ventas sin que lo notes.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              No siempre el problema es el tráfico. Muchas veces la tienda se ve débil, confusa o poco convincente, y eso hace que el cliente dude, abandone o no avance.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <ul className="space-y-4">
                {[
                  "Se ve poco profesional",
                  "El producto no se entiende rápido",
                  "La versión móvil no ayuda a comprar",
                  "La página no transmite confianza",
                  "Hay demasiados pasos o distracciones",
                  "No hay jerarquía ni enfoque comercial"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-300">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
