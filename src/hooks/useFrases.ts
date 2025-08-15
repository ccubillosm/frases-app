import { useState, useEffect, useCallback } from 'react';
import { FraseConImagen } from '@/types/frases';
import { obtenerFraseAleatoria } from '@/data/frases';
import { UnsplashService } from '@/services/unsplash';

export function useFrases() {
  const [fraseConImagen, setFraseConImagen] = useState<FraseConImagen | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unsplashService] = useState(() => new UnsplashService());

  const generarNuevaFrase = useCallback(async () => {
    try {
      setCargando(true);
      setError(null);

      // Obtener frase aleatoria
      const frase = obtenerFraseAleatoria();
      
      // Obtener imagen relacionada con la categoría de la frase
      const imagen = await unsplashService.obtenerImagenPorCategoria(
        frase.categoria || 'inspiration'
      );

      setFraseConImagen({ frase, imagen });
    } catch (err) {
      console.error('Error al generar nueva frase:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
      
      // Si hay error con la imagen, mostrar solo la frase
      const frase = obtenerFraseAleatoria();
      setFraseConImagen({ 
        frase, 
        imagen: {
          id: 'placeholder',
          urls: {
            regular: '/placeholder-image.jpg',
            small: '/placeholder-image.jpg',
            thumb: '/placeholder-image.jpg',
          },
          alt_description: 'Imagen placeholder',
          description: 'Imagen de respaldo',
          user: {
            name: 'Sistema',
            username: 'placeholder',
          },
        }
      });
    } finally {
      setCargando(false);
    }
  }, [unsplashService]);

  useEffect(() => {
    generarNuevaFrase();
  }, [generarNuevaFrase]);

  return {
    fraseConImagen,
    cargando,
    error,
    generarNuevaFrase,
  };
}
