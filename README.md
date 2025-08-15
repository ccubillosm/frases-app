# Frases Inspiradoras

Una aplicación web moderna que genera frases famosas aleatorias acompañadas de hermosas imágenes de Unsplash. Desarrollada con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- **Frases aleatorias**: Genera frases inspiradoras de autores célebres
- **Imágenes de Unsplash**: Cada frase viene acompañada de una imagen relacionada
- **Diseño responsivo**: Adaptado para dispositivos móviles y de escritorio
- **Interfaz moderna**: UI elegante con Tailwind CSS y animaciones suaves
- **Manejo de errores**: Placeholder elegante cuando las imágenes no cargan
- **Generación instantánea**: Botón para obtener nuevas frases e imágenes

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework CSS utility-first
- **Unsplash API** - Imágenes de alta calidad
- **Heroicons** - Iconos SVG modernos

## 📋 Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn
- Cuenta de desarrollador en Unsplash (para API key)

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ccubillosm/frases-app.git
   cd frases-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Edita el archivo `.env.local` y agrega tu API key de Unsplash:
   ```env
   NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=tu_api_key_aqui
   UNSPLASH_ACCESS_KEY=tu_api_key_aqui
   ```

4. **Obtener API Key de Unsplash**
   - Ve a [Unsplash Developers](https://unsplash.com/developers)
   - Crea una nueva aplicación
   - Copia tu Access Key
   - Pega la key en el archivo `.env.local`

## 🚀 Ejecutar la aplicación

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Producción
```bash
npm run build
npm start
```

## 📱 Uso de la Aplicación

1. **Carga inicial**: Al abrir la aplicación, se muestra automáticamente una frase aleatoria con su imagen correspondiente
2. **Generar nueva frase**: Haz clic en el botón "Generar nueva frase" para obtener una nueva combinación
3. **Navegación**: Las imágenes incluyen enlaces a los fotógrafos en Unsplash

## 🏗️ Estructura del Proyecto

```
frases-app/
├── src/
│   ├── app/                 # App Router de Next.js
│   ├── components/          # Componentes React reutilizables
│   ├── hooks/              # Hooks personalizados
│   ├── services/           # Servicios para APIs externas
│   ├── types/              # Definiciones de tipos TypeScript
│   └── data/               # Datos estáticos (frases)
├── public/                 # Archivos estáticos
├── output/                 # Directorio de salida
└── env.example            # Ejemplo de variables de entorno
```

## 🎨 Componentes Principales

- **Header**: Encabezado con título y descripción
- **FraseCard**: Tarjeta principal que muestra la frase y la imagen
- **Footer**: Pie de página con información de la aplicación
- **useFrases**: Hook personalizado para manejar el estado

## 🔌 API de Unsplash

La aplicación utiliza la API de Unsplash para obtener imágenes relacionadas con cada frase. Las imágenes se seleccionan basándose en la categoría de la frase para mantener coherencia visual.

### Endpoints utilizados:
- `GET /search/photos` - Búsqueda de imágenes por categoría
- Parámetros: `query`, `per_page`, `orientation`

## 🚨 Manejo de Errores

- **Error de API**: Si la API de Unsplash falla, se muestra un placeholder elegante
- **Imagen no disponible**: Placeholder visual cuando las imágenes no cargan
- **Reintento automático**: Botón para reintentar en caso de errores

## 📱 Responsividad

La aplicación está completamente optimizada para:
- Dispositivos móviles (320px+)
- Tablets (768px+)
- Escritorio (1024px+)
- Pantallas grandes (1280px+)

## 🎯 Criterios de Aceptación Cumplidos

✅ **Carga inicial**: Muestra frase aleatoria con imagen al cargar  
✅ **Generación de nuevas frases**: Botón funcional para obtener nuevas combinaciones  
✅ **Diseño responsivo**: Adaptado para móviles y escritorio con Tailwind CSS  
✅ **Manejo de errores**: Placeholder elegante en caso de fallos de imagen  
✅ **Integración Unsplash**: API oficial para imágenes aleatorias relacionadas  

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Unsplash](https://unsplash.com) por proporcionar imágenes de alta calidad
- [Next.js](https://nextjs.org) por el framework increíble
- [Tailwind CSS](https://tailwindcss.com) por el sistema de diseño
- [Heroicons](https://heroicons.com) por los iconos SVG

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio de GitHub.

---

**Desarrollado con ❤️ usando tecnologías modernas**
