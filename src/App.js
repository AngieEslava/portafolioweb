import React from 'react';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
