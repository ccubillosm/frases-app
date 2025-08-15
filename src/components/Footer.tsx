export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frases Inspiradoras</h3>
            <p className="text-gray-400">
              Una aplicación para inspirar y motivar con frases célebres y hermosas imágenes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tecnologías</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Next.js 14</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Unsplash API</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a 
                  href="https://unsplash.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Unsplash
                </a>
              </li>
              <li>
                <a 
                  href="https://nextjs.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Next.js
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400">
            © 2024 Frases Inspiradoras. Desarrollado con ❤️ usando tecnologías modernas.
          </p>
        </div>
      </div>
    </footer>
  );
}
