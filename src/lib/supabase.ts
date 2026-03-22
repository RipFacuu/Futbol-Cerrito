/**
 * Mock Supabase Client
 * This file replaces the real Supabase client to allow the app to run without
 * a database connection or environment variables.
 */

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  category: 'News' | 'Events' | 'Training';
  author: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  image_url: string;
  caption: string | null;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

// Mock data
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Nueva temporada de entrenamientos',
    content: 'Comenzamos la nueva temporada con mucha energía y nuevos proyectos para la comunidad.',
    excerpt: 'Comenzamos la nueva temporada con mucha energía...',
    category: 'Training',
    author: 'Admin',
    image_url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Torneo Relámpago este Sábado',
    content: 'Invitamos a todos los jóvenes a participar en nuestro próximo torneo relámpago.',
    excerpt: 'Invitamos a todos los jóvenes a participar en nuestro próximo torneo...',
    category: 'Events',
    author: 'Coordinador',
    image_url: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const mockGallery: GalleryImage[] = [
  {
    id: '1',
    image_url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Entrenamiento intensivo',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    image_url: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Trabajo en equipo',
    created_at: new Date().toISOString()
  }
];

// Mock Supabase client
export const supabase = {
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        order: () => Promise.resolve({ data: table === 'blog_posts' ? mockPosts : table === 'gallery_images' ? mockGallery : [], error: null }),
        limit: () => Promise.resolve({ data: table === 'blog_posts' ? mockPosts : table === 'gallery_images' ? mockGallery : [], error: null }),
        single: () => Promise.resolve({ data: null, error: null }),
      }),
      order: () => ({
        limit: () => Promise.resolve({ data: table === 'blog_posts' ? mockPosts : table === 'gallery_images' ? mockGallery : [], error: null }),
        single: () => Promise.resolve({ data: null, error: null }),
      }),
    }),
    insert: (data: any) => {
      console.log(`Mock insert into ${table}:`, data);
      return Promise.resolve({ data, error: null });
    },
    update: (data: any) => {
      console.log(`Mock update in ${table}:`, data);
      return {
        eq: () => Promise.resolve({ data, error: null })
      };
    },
    delete: () => ({
      eq: () => Promise.resolve({ data: null, error: null })
    })
  }),
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: { user: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
} as any;
