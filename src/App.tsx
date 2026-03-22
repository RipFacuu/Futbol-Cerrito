import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import About from './components/About';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { Settings } from 'lucide-react';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return (
      <>
        <button
          onClick={() => setShowAdmin(false)}
          className="fixed top-4 right-4 z-50 bg-white text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 font-semibold"
        >
          <span>Ver Sitio Público</span>
        </button>
        <Admin />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Blog />
      <About />
      <Gallery />
      <Impact />
      <Contact />
      <Footer />

      <button
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-green-700 transition-all z-50"
        title="Panel de Administración"
      >
        <Settings size={24} />
      </button>
    </div>
  );
}

export default App;
