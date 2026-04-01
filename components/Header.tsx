import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-white tracking-tight">Juan MKT</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Servicios</a>
            <a href="#optimizacion" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Optimización</a>
            <a href="#proceso" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Proceso</a>
            <a href="#precios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Precios</a>
            <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center">
            <a 
              href="https://wa.me/+573015700961" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Solicitar propuesta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
