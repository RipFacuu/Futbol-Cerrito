import { Heart, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 bg-white p-4">
              <img
                src="/imagenes/2.png"
                alt="Equipo de Fundación Cerrito FC"
                className="w-full h-full object-contain aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full -z-0 opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-green-50 rounded-full -z-0"></div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Más que un club, somos una <span className="text-green-600">comunidad</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                La Fundación Cerrito Fútbol Club nació con el sueño de transformar la realidad de nuestros jóvenes a través del deporte, los valores y la educación.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="group flex items-start space-x-5">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <Heart className="text-green-600 group-hover:text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Misión</h3>
                  <p className="text-gray-600">Fomentar el desarrollo integral mediante el fútbol, promoviendo el respeto, la disciplina y la superación personal.</p>
                </div>
              </div>

              <div className="group flex items-start space-x-5">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <Eye className="text-green-600 group-hover:text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visión</h3>
                  <p className="text-gray-600">Ser una institución referente en la formación de ciudadanos comprometidos y talentos deportivos en Uruguay.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center space-x-2 text-green-700 font-bold text-lg">
                <div className="w-12 h-[2px] bg-green-600"></div>
                <span>Nuestra Historia</span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed italic">
                "Fundado en el corazón de nuestra ciudad, el Cerrito Fútbol Club tiene una rica historia de tradición y pasión que une a generaciones."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-600 rounded-3xl p-12 text-white shadow-2xl shadow-green-900/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">Jóvenes Formados</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">Años de Trayectoria</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">20+</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">Entrenadores</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">Compromiso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
