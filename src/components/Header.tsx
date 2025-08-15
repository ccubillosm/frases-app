'use client';

import dynamic from 'next/dynamic';

// Importar ThemeToggle de manera dinámica para evitar errores de hidratación
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 bg-white/10 rounded-lg animate-pulse"></div>
  )
});

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 relative">
      {/* Toggle de tema en la esquina superior derecha */}
      <div className="absolute top-4 right-6">
        <ThemeToggle />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Frases Inspiradoras
        </h1>
        <p className="text-xl md:text-2xl font-light opacity-90">
          Descubre sabiduría en cada palabra, acompañada de belleza visual
        </p>
      </div>
    </header>
  );
}
