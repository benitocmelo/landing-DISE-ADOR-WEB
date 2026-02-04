import React from 'react';
import { PenTool, Zap, Layout, MessageCircle, TrendingUp } from 'lucide-react';

const ValueProp: React.FC = () => {
  const deliverables = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Estrategia de Ventas",
      desc: "Estructura pensada en el recorrido del cliente, no solo en la estética.",
      color: "blue"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Copywriting Profesional",
      desc: "Textos escritos para persuadir y convertir visitantes en clientes.",
      color: "pink"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Diseño Adaptable",
      desc: "Tu página se verá perfecta en celulares (donde ocurre el 90% de las ventas).",
      color: "purple"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Optimización de Velocidad",
      desc: "Configuración técnica para que la página cargue al instante.",
      color: "amber"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Integración con WhatsApp",
      desc: "Configuración directa del canal principal de cierre de ventas.",
      color: "green"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-xs mb-2 block">Entregables</span>
          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-gray-900 dark:text-white">
            Lo que vas a recibir
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
             Más que una página web, es un sistema integral para captar y cerrar clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {deliverables.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 
                ${item.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 
                  item.color === 'pink' ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' :
                  item.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                  item.color === 'amber' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' :
                  'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;