import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Fundación Cerrito FC</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Noticias
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Galería
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Impacto
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contacto
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-medium text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-green-600 font-medium text-left">
                Noticias
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-green-600 font-medium text-left">
                Galería
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-green-600 font-medium text-left">
                Impacto
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 font-medium text-left">
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
