import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-slate-800 last:border-0">
      <button 
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200 group-hover:text-blue-600'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-4">
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
      question: "¿Por qué cobrar mantenimiento mensual?",
      answer: "El mundo digital cambia rápido. El mantenimiento garantiza que tu sitio esté siempre seguro, que el hosting (en el caso de la Landing) esté activo, y que tengas a nuestro equipo disponible si algo falla o necesitas un cambio pequeño."
    },
    {
      question: "¿Puedo tener ambas opciones?",
      answer: "¡Claro! Es el combo ideal. Muchas marcas usan Shopify como su 'Base Central' y crean Landings específicas para lanzamientos de productos estrella para maximizar el ROAS en publicidad."
    },
    {
      question: "¿Necesito comprar el dominio?",
      answer: "Sí, el dominio es tuyo y debe estar a tu nombre por seguridad de tu marca. Pero no te preocupes, en Juan MKT te guiamos paso a paso en cómo comprarlo (cuesta aprox $10-$15 USD al año)."
    },
    {
      question: "¿Cuánto tiempo tardan en entregar?",
      answer: "Para la Landing Page 'Producto Ganador', el tiempo estimado es de 3 a 5 días hábiles una vez tengamos la información. Para la tienda Shopify completa, suele tomar entre 10 y 15 días hábiles."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
          <p className="text-gray-600 dark:text-gray-400">Resolvemos tus dudas antes de empezar.</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 md:p-8">
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