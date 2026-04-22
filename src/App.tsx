import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Arif Şahin. All rights reserved.
          </p>
          <p className="text-xs text-gray-300">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;