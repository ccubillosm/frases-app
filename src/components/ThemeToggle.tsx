'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-lg
        bg-white/10 hover:bg-white/20 
        dark:bg-gray-800/50 dark:hover:bg-gray-700/50
        text-white transition-all duration-300
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/50
        dark:focus:ring-gray-400/50
      "
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
      title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      <div className="relative w-6 h-6">
        {/* Icono del sol */}
        <SunIcon 
          className={`
            absolute inset-0 w-6 h-6 transition-all duration-500
            ${theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
            }
          `}
        />
        
        {/* Icono de la luna */}
        <MoonIcon 
          className={`
            absolute inset-0 w-6 h-6 transition-all duration-500
            ${theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
            }
          `}
        />
      </div>
    </button>
  );
}
