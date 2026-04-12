import { useState, useEffect } from 'react';
import { supabase, GalleryImage } from '../lib/supabase';

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(9);

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultImages = [
    {
      url: '/imagenes/1.png',
      caption: 'Formación del equipo'
    },
    {
      url: '/imagenes/2.png',
      caption: 'Entrenamiento'
    },
    {
      url: '/imagenes/3.jpeg',
      caption: 'Momentos del partido'
    },
    {
      url: '/imagenes/4.jpeg',
      caption: 'Compromiso y pasión'
    },
    {
      url: '/imagenes/5.png',
      caption: 'Nuestra comunidad'
    },
    {
      url: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Trabajo en equipo'
    },
    {
      url: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Celebrando la victoria'
    },
    {
      url: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Jóvenes promesas'
    },
    {
      url: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Pasión por el fútbol'
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Nuestra <span className="text-green-600">Galería</span>
            </h2>
            <p className="text-lg text-gray-600">
              Capturando la pasión, el esfuerzo y la alegría de nuestra comunidad deportiva en cada momento.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 text-green-700 font-bold">
              <span>Desliza para ver más</span>
              <div className="w-12 h-[2px] bg-green-600"></div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {displayImages.map((item, index) => {
              const imageUrl = 'url' in item ? item.url : item.image_url;
              const imageCaption = 'caption' in item ? item.caption : '';

              return (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-3xl bg-white p-2 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <img
                    src={imageUrl}
                    alt={imageCaption || `Imagen de galería ${index + 1}`}
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {imageCaption || 'Fundación Cerrito FC'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
