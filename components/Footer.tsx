import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Juan MKT</h3>
          <p className="text-gray-400 mt-2 text-sm">Diseño estratégico para negocios que quieren vender.</p>
        </div>
        
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        </div>
        
        <div className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Juan MKT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;