import React from 'react';
import { Check } from 'lucide-react';

const MainServices: React.FC = () => {
  const services = [
    {
      title: "Landing Flash",
      price: "Desde $290 USD",
      desc: "Landing enfocada en un solo producto o una sola oferta, pensada para campañas rápidas y respuesta directa.",
      includes: [
        "Diseño de landing comercial",
        "Copy base orientado a acción",
        "Estructura enfocada en 1 objetivo",
        "Botón a compra o WhatsApp",
        "Diseño responsive"
      ],
      btnText: "Quiero esta opción"
    },
    {
      title: "Shopify Catálogo",
      price: "Desde $790 USD",
      desc: "Tienda Shopify completa para marcas que necesitan presencia sólida, catálogo organizado y base lista para crecer.",
      includes: [
        "Home principal",
        "Páginas esenciales",
        "Configuración visual de tienda",
        "Carga inicial de productos",
        "Diseño responsive",
        "Estructura base de navegación"
      ],
      btnText: "Quiero mi tienda"
    },
    {
      title: "Optimización Shopify Express",
      price: "Desde $490 USD",
      badge: "Más vendida",
      desc: "Mejora urgente para tiendas que ya existen pero están perdiendo fuerza visual, claridad o conversión.",
      includes: [
        "Auditoría rápida de la tienda actual",
        "Mejora de home y producto",
        "Optimización mobile",
        "Ajustes de confianza y CTA",
        "Reducción de fricción visual",
        "Revisión comercial general"
      ],
      btnText: "Quiero optimizar mi tienda",
      highlight: true
    },
    {
      title: "Rediseño + CRO",
      price: "Desde $990 USD",
      desc: "Rediseño más profundo para marcas que necesitan una experiencia más sólida, más clara y mejor preparada para convertir.",
      includes: [
        "Rediseño visual estratégico",
        "Mejora de home, PDP y colección",
        "Reordenamiento de contenido",
        "UX más comercial",
        "Mayor claridad de compra",
        "Enfoque en percepción de marca + conversión"
      ],
      btnText: "Quiero rediseñar mi tienda"
    },
    {
      title: "Soporte Mensual",
      price: "Desde $120 USD / mes",
      desc: "Para marcas que necesitan acompañamiento, ajustes, mejoras y soporte continuo sin depender de un equipo interno.",
      includes: [
        "Ajustes mensuales",
        "Nuevas secciones",
        "Cambios visuales",
        "Soporte técnico ligero",
        "Mejoras continuas"
      ],
      btnText: "Quiero soporte mensual"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluciones según la etapa de tu marca</h2>
          <p className="text-lg text-gray-400">Desde una landing puntual hasta una optimización profunda de Shopify.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              id={service.title.includes('Optimización') ? 'optimizacion' : undefined}
              className={`rounded-2xl p-8 flex flex-col ${
                service.highlight 
                  ? 'bg-slate-900 border-2 border-blue-600 shadow-2xl shadow-blue-900/20 relative md:-translate-y-2' 
                  : 'bg-slate-900 border border-slate-800'
              }`}
            >
              {service.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  {service.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <div className="text-blue-400 font-medium mb-4">{service.price}</div>
              <p className="text-gray-400 text-sm mb-6 min-h-[60px]">{service.desc}</p>
              
              <div className="mb-4 text-sm font-semibold text-white">Incluye:</div>
              <ul className="space-y-3 mb-8 flex-1">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/+573015700961?text=Hola,%20me%20interesa%20la%20opción:%20${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-medium text-center transition-colors ${
                  service.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-slate-700 text-white hover:bg-slate-800'
                }`}
              >
                {service.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
