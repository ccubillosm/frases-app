import { UnsplashImage } from '@/types/frases';

const UNSPLASH_API_BASE = 'https://api.unsplash.com';

export class UnsplashService {
  private accessKey: string;

  constructor() {
    this.accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '';
  }

  async obtenerImagenAleatoria(query?: string): Promise<UnsplashImage> {
    if (!this.accessKey) {
      throw new Error('Unsplash API key no configurada');
    }

    try {
      const searchQuery = query || 'inspiration';
      const response = await fetch(
        `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=30&orientation=landscape`,
        {
          headers: {
            'Authorization': `Client-ID ${this.accessKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la API de Unsplash: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.results || data.results.length === 0) {
        throw new Error('No se encontraron imágenes');
      }

      // Seleccionar una imagen aleatoria de los resultados
      const indiceAleatorio = Math.floor(Math.random() * data.results.length);
      const imagen = data.results[indiceAleatorio];

      return {
        id: imagen.id,
        urls: {
          regular: imagen.urls.regular,
          small: imagen.urls.small,
          thumb: imagen.urls.thumb,
        },
        alt_description: imagen.alt_description || 'Imagen inspiradora',
        description: imagen.description || 'Una imagen hermosa de Unsplash',
        user: {
          name: imagen.user.name,
          username: imagen.user.username,
        },
      };
    } catch (error) {
      console.error('Error al obtener imagen de Unsplash:', error);
      throw error;
    }
  }

  async obtenerImagenPorCategoria(categoria: string): Promise<UnsplashImage> {
    return this.obtenerImagenAleatoria(categoria);
  }
}
