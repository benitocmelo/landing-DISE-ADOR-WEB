import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-200 group-hover:text-blue-400'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed pr-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Trabajan solo con Shopify?",
      answer: "Sí. Nos especializamos en Shopify para construir y optimizar tiendas con más foco."
    },
    {
      question: "¿Pueden mejorar una tienda que ya existe?",
      answer: "Sí. Podemos intervenir una tienda actual para mejorar diseño, claridad y experiencia de compra."
    },
    {
      question: "¿Qué necesito para empezar?",
      answer: "Tener clara tu marca, tus productos y el objetivo principal del proyecto. Nosotros te guiamos en el resto."
    },
    {
      question: "¿La optimización incluye rediseño completo?",
      answer: "No siempre. La optimización express corrige puntos clave. Si tu tienda necesita una intervención profunda, te recomendaremos un rediseño + CRO."
    },
    {
      question: "¿Trabajan mobile-first?",
      answer: "Sí. Priorizamos que la experiencia en celular sea clara, ordenada y funcional."
    },
    {
      question: "¿Ofrecen soporte después de entregar?",
      answer: "Sí. Tenemos opción de soporte y mejora continua mensual."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-900/30 rounded-full mb-4">
                <HelpCircle className="w-6 h-6 text-blue-500" />
            </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Preguntas Frecuentes</h2>
          <p className="text-gray-400">Resolvemos tus dudas antes de empezar.</p>
        </div>
        
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;