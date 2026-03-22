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
      url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Entrenamiento intensivo'
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
    },
    {
      url: 'https://images.pexels.com/photos/274025/pexels-photo-274025.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Competencia amistosa'
    },
    {
      url: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Nuestra cancha'
    },
    {
      url: 'https://images.pexels.com/photos/159555/soccer-balls-soccer-stadium-lighting-night-game-159555.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Listos para jugar'
    },
    {
      url: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Unidos por el deporte'
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Momentos memorables de nuestra fundación, nuestros jugadores y nuestra comunidad.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.map((item, index) => {
              const imageUrl = 'url' in item ? item.url : item.image_url;
              const imageCaption = 'caption' in item ? item.caption : '';

              return (
                <div
                  key={index}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={imageUrl}
                    alt={imageCaption || `Imagen de galería ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {imageCaption && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <p className="text-white font-semibold p-6">{imageCaption}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
