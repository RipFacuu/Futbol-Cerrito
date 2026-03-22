import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
