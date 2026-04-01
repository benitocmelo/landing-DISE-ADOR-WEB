import React from 'react';

const WorkProcess: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Diagnóstico",
      desc: "Entendemos tu negocio, tu punto actual y lo que hoy está frenando resultados."
    },
    {
      num: "2",
      title: "Enfoque",
      desc: "Definimos si necesitas lanzar, rediseñar u optimizar."
    },
    {
      num: "3",
      title: "Diseño y ejecución",
      desc: "Construimos una experiencia más clara, profesional y enfocada en conversión."
    },
    {
      num: "4",
      title: "Entrega y ajustes",
      desc: "Revisamos, afinamos y dejamos todo listo para operar."
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Así trabajamos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-slate-800 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-blue-600 flex items-center justify-center text-2xl font-bold text-blue-500 mb-6 shadow-lg shadow-blue-900/20">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
