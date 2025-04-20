import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import About from './components/About';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="min-h-screen">
        <Hero />
	<About />  
        <Projects />
	<Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;

