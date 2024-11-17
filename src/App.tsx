import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-gray-50 py-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Arif Şahin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;