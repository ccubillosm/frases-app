export interface Frase {
  id: number;
  texto: string;
  autor: string;
  categoria?: string;
}

export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    username: string;
  };
}

export interface FraseConImagen {
  frase: Frase;
  imagen: UnsplashImage;
}
