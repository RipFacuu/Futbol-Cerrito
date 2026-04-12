import { ArrowRight, Target, Users, Trophy } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gray-950 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-green-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 bg-green-600/20 backdrop-blur-md text-green-400 border border-green-500/30 rounded-full text-sm font-semibold tracking-wide">
                Fundación Cerrito Fútbol Club
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Transformando vidas a través del{' '}
              <span className="text-green-500">fútbol</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Construyendo comunidad, desarrollando talento y formando campeones dentro y fuera del campo en Cerrito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('impact')}
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-green-900/40"
              >
                <span>Cómo Ayudar</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Conocer Más
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                  <Trophy className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white uppercase">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Jóvenes</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                  <Users className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white uppercase">100%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Comunidad</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Main Shield Image - Fully visible */}
            <div className="relative z-10 w-full max-w-[400px] lg:max-w-[500px] animate-float">
              <img
                src="/imagenes/1.png"
                alt="Escudo Fundación Cerrito"
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(34,197,94,0.3)] object-contain"
              />
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-600/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
