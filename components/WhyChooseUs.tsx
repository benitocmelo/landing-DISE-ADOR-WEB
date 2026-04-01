import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    "Entendemos marketing, no solo estética",
    "Diseñamos con intención comercial",
    "Pensamos primero en claridad, confianza y acción",
    "Adaptamos la solución a tu etapa real",
    "Buscamos que tu web acompañe tu crecimiento"
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Por qué trabajar con nosotros?</h2>
          <p className="text-lg text-gray-400">
            Porque no vemos tu tienda como un diseño aislado, sino como una pieza clave de tu sistema de ventas.
          </p>
        </div>

        <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-4 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
