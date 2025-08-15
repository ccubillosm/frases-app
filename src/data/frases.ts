import { Frase } from '@/types/frases';

export const frases: Frase[] = [
  {
    id: 1,
    texto: "La vida es lo que pasa mientras estás ocupado haciendo otros planes",
    autor: "John Lennon",
    categoria: "vida"
  },
  {
    id: 2,
    texto: "El éxito no es final, el fracaso no es fatal: es el coraje para continuar lo que cuenta",
    autor: "Winston Churchill",
    categoria: "exito"
  },
  {
    id: 3,
    texto: "La creatividad es la inteligencia divirtiéndose",
    autor: "Albert Einstein",
    categoria: "creatividad"
  },
  {
    id: 4,
    texto: "El futuro pertenece a quienes creen en la belleza de sus sueños",
    autor: "Eleanor Roosevelt",
    categoria: "sueños"
  },
  {
    id: 5,
    texto: "La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente",
    autor: "Jim Rohn",
    categoria: "felicidad"
  },
  {
    id: 6,
    texto: "El único modo de hacer un gran trabajo es amar lo que haces",
    autor: "Steve Jobs",
    categoria: "trabajo"
  },
  {
    id: 7,
    texto: "La educación es el arma más poderosa que puedes usar para cambiar el mundo",
    autor: "Nelson Mandela",
    categoria: "educacion"
  },
  {
    id: 8,
    texto: "La belleza está en los ojos del que mira",
    autor: "Margaret Wolfe Hungerford",
    categoria: "belleza"
  },
  {
    id: 9,
    texto: "El tiempo es el recurso más valioso que tenemos",
    autor: "Theophrastus",
    categoria: "tiempo"
  },
  {
    id: 10,
    texto: "La sabiduría comienza en la admiración",
    autor: "Sócrates",
    categoria: "sabiduria"
  },
  {
    id: 11,
    texto: "La paciencia es amarga, pero su fruto es dulce",
    autor: "Jean-Jacques Rousseau",
    categoria: "paciencia"
  },
  {
    id: 12,
    texto: "El amor es la poesía de los sentidos",
    autor: "Honoré de Balzac",
    categoria: "amor"
  },
  {
    id: 13,
    texto: "La libertad no tiene precio",
    autor: "Nelson Mandela",
    categoria: "libertad"
  },
  {
    id: 14,
    texto: "El conocimiento es poder",
    autor: "Francis Bacon",
    categoria: "conocimiento"
  },
  {
    id: 15,
    texto: "La esperanza es el sueño del hombre despierto",
    autor: "Aristóteles",
    categoria: "esperanza"
  }
];

export function obtenerFraseAleatoria(): Frase {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  return frases[indiceAleatorio];
}
