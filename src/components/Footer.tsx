import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-600 shadow-lg shadow-green-900/20">
                <img 
                  src="/imagenes/logo.jpeg" 
                  alt="Logo Cerrito Futbol Club" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-2xl tracking-tighter">Cerrito Futbol Club</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg max-w-md">
Propendemos al desarrollo integral de niños, niñas y adolescentes a través de Programas Educativos, Deportivos y Sociales, Construyendo comunidad y desarrollando talentos            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/FundacionCerrito?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 group"
              >
                <Facebook size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/fundacioncerrito/?hl=es%2F" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 group"
              >
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                  <MapPin size={20} className="text-green-500" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Adolfo Scandroglio 8752</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                  <Phone size={20} className="text-green-500" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+54 9 351379-5552</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                  <Mail size={20} className="text-green-500" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">cristhianabranchi@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Navegación</h3>
            <div className="grid grid-cols-1 gap-3">
              {['Inicio', 'Noticias', 'Nosotros', 'Galería', 'Impacto', 'Contacto'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-green-500 transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Fundación Cerrito Fútbol Club. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
