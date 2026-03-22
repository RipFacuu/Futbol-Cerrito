import { Heart, DollarSign, Users, GraduationCap } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Impacto Social
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu apoyo nos permite seguir transformando vidas. Descubre cómo puedes ser parte del cambio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Cómo puedes ayudar?
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Donaciones</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Tus aportes nos ayudan a mantener las instalaciones, comprar equipamiento y ofrecer becas a jóvenes con talento pero recursos limitados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Voluntariado</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Únete a nuestro equipo de voluntarios. Compartí tus habilidades como entrenador, tutor académico o apoyo organizativo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Patrocinio</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Las empresas pueden patrocinar equipos, eventos o programas específicos, obteniendo visibilidad mientras apoyan a la comunidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-600 rounded-2xl p-10 text-white">
            <div className="text-center mb-8">
              <Heart size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Hace la Diferencia</h3>
              <p className="text-green-100 leading-relaxed">
                Cada aporte, por pequeño que sea, tiene un impacto real en la vida de nuestros jóvenes atletas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-700 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$500</div>
                <p className="text-green-100">Equipa a un jugador por una temporada completa</p>
              </div>

              <div className="bg-green-700 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$1,500</div>
                <p className="text-green-100">Beca mensual para un joven talento</p>
              </div>

              <div className="bg-green-700 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$5,000</div>
                <p className="text-green-100">Mantiene un programa de entrenamiento durante un año</p>
              </div>
            </div>

            <button className="w-full mt-8 bg-white text-green-600 font-bold py-4 rounded-lg hover:bg-green-50 transition-colors">
              Donar Ahora
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nuestro Impacto en Números
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">De nuestros jóvenes continúan sus estudios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-gray-600">Becas otorgadas anualmente</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <p className="text-gray-600">Jugadores en equipos profesionales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1,000+</div>
              <p className="text-gray-600">Familias beneficiadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
