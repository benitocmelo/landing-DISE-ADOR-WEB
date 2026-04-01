import React from 'react';
import { LayoutTemplate, TrendingUp, Smartphone } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <p className="text-lg font-medium text-white">
              No hacemos webs de adorno.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Construimos experiencias Shopify pensadas para verse bien, transmitir confianza y empujar la compra.
            </p>
          </div>
          
          <div className="md:w-2/3 flex flex-col sm:flex-row justify-end gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-300">Pensado para marcas que invierten en tráfico</span>
            </div>
            <div className="flex items-center gap-3">
              <LayoutTemplate className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-300">Estructura clara para vender mejor</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-300">Mejoras visuales, comerciales y funcionales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
