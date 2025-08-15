'use client';

import { useFrases } from '@/hooks/useFrases';
import Header from '@/components/Header';
import FraseCard from '@/components/FraseCard';
import Footer from '@/components/Footer';

export default function HomePage() {
  const { fraseConImagen, cargando, error, generarNuevaFrase } = useFrases();

  if (error && !fraseConImagen) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Error al cargar la aplicación
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              {error}
            </p>
            <button
              onClick={generarNuevaFrase}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Intentar de nuevo
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        {fraseConImagen ? (
          <FraseCard
            fraseConImagen={fraseConImagen}
            cargando={cargando}
            onGenerarNueva={generarNuevaFrase}
          />
        ) : (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Cargando frase inspiradora...</p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
