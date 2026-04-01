import React from 'react';
import { Search } from 'lucide-react';

const AuditOrBeforeAfter: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/30 mb-8">
          <Search className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Detectamos qué está frenando tu tienda y te proponemos la ruta correcta.
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Si ya tienes Shopify, podemos revisar tu tienda y decirte qué está fallando en estructura, claridad, confianza o conversión.
        </p>
        <a 
          href="https://wa.me/+573015700961?text=Hola,%20quiero%20solicitar%20una%20revisión%20de%20mi%20tienda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-lg shadow-blue-600/20"
        >
          Solicitar revisión
        </a>
      </div>
    </section>
  );
};

export default AuditOrBeforeAfter;
