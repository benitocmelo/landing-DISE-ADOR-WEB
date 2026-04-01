import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Landing Flash",
      price: "Desde $290 USD",
    },
    {
      title: "Shopify Catálogo",
      price: "Desde $790 USD",
    },
    {
      title: "Optimización Shopify Express",
      price: "Desde $490 USD",
      highlight: true
    },
    {
      title: "Rediseño + CRO",
      price: "Desde $990 USD",
    },
    {
      title: "Soporte Mensual",
      price: "Desde $120 USD / mes",
    }
  ];

  return (
    <section id="precios" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Servicios e inversión
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Elige la opción que mejor se adapta a tu etapa y al nivel de intervención que necesitas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl p-8 flex flex-col items-center text-center transition-all ${
                plan.highlight 
                  ? 'bg-slate-900 border-2 border-blue-600 shadow-2xl shadow-blue-900/20 transform md:-translate-y-2' 
                  : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-4">{plan.title}</h3>
              <div className="text-lg font-medium text-blue-400 mb-8">{plan.price}</div>
              
              <a 
                href={`https://wa.me/+573015700961?text=Hola,%20me%20interesa%20la%20opción:%20${plan.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-medium transition-colors mt-auto ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-slate-700 text-white hover:bg-slate-800'
                }`}
              >
                Elegir opción
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;