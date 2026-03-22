import { Heart, Eye, History } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Fundación Cerrito Fútbol Club es más que un equipo. Somos una familia dedicada al desarrollo integral de nuestra comunidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de Cerrito FC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Misión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fomentar el desarrollo integral de niños y jóvenes de Cerrito mediante el fútbol, promoviendo valores como el respeto, la disciplina, el trabajo en equipo y la superación personal. Buscamos crear oportunidades de crecimiento deportivo, social y educativo para toda nuestra comunidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Visión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ser reconocidos como una institución referente en la formación de jóvenes futbolistas y ciudadanos comprometidos, contribuyendo al desarrollo deportivo y social de Uruguay. Aspiramos a ser un modelo de gestión deportiva inclusiva y sostenible.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <History className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Historia de Cerrito</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fundado en el corazón de nuestra ciudad, el Cerrito Fútbol Club tiene una rica historia de tradición y pasión por el fútbol. A través de los años, hemos formado generaciones de jugadores que han llevado nuestros colores con orgullo y han dejado su huella en el deporte uruguayo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-green-100">Jóvenes Formados</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-green-100">Años de Trayectoria</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-green-100">Entrenadores Certificados</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-green-100">Compromiso Social</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
