'use client';

import { useState } from 'react';
import { FraseConImagen } from '@/types/frases';
import { ArrowPathIcon, PhotoIcon } from '@heroicons/react/24/outline';

interface FraseCardProps {
  fraseConImagen: FraseConImagen;
  cargando: boolean;
  onGenerarNueva: () => void;
}

export default function FraseCard({ fraseConImagen, cargando, onGenerarNueva }: FraseCardProps) {
  const [imagenCargando, setImagenCargando] = useState(true);
  const [errorImagen, setErrorImagen] = useState(false);

  const handleImagenLoad = () => {
    setImagenCargando(false);
    setErrorImagen(false);
  };

  const handleImagenError = () => {
    setImagenCargando(false);
    setErrorImagen(true);
  };

  const { frase, imagen } = fraseConImagen;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700 transition-all duration-300">
        {/* Imagen */}
        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-700 dark:to-slate-800">
          {imagenCargando && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
            </div>
          )}
          
          {errorImagen ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-600 dark:to-slate-700">
              <div className="text-center">
                <PhotoIcon className="h-24 w-24 text-gray-400 dark:text-slate-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-slate-400 text-lg">Imagen no disponible</p>
              </div>
            </div>
          ) : (
            <img
              src={imagen.urls.regular}
              alt={imagen.alt_description}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imagenCargando ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={handleImagenLoad}
              onError={handleImagenError}
            />
          )}
          
          {/* Overlay con gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Contenido de la frase */}
        <div className="p-8">
          <div className="text-center mb-8">
            <blockquote className="text-3xl md:text-4xl font-light text-gray-800 dark:text-slate-200 leading-relaxed mb-6">
              &ldquo;{frase.texto}&rdquo;
            </blockquote>
            
            <cite className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
              — {frase.autor}
            </cite>
            
            {frase.categoria && (
              <div className="mt-4">
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">
                  {frase.categoria}
                </span>
              </div>
            )}
          </div>

          {/* Información de la imagen */}
          <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <span>Foto por</span>
                <a
                  href={`https://unsplash.com/@${imagen.user.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  {imagen.user.username}
                </a>
                <span>en</span>
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>

          {/* Botón de acción */}
          <div className="mt-8 text-center">
            <button
              onClick={onGenerarNueva}
              disabled={cargando}
              className={`
                inline-flex items-center px-8 py-4 text-lg font-medium rounded-full
                transition-all duration-300 transform hover:scale-105
                ${cargando
                  ? 'bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 shadow-lg hover:shadow-xl'
                }
              `}
            >
              {cargando ? (
                <>
                  <ArrowPathIcon className="animate-spin h-6 w-6 mr-3" />
                  Generando...
                </>
              ) : (
                <>
                  <ArrowPathIcon className="h-6 w-6 mr-3" />
                  Generar nueva frase
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
