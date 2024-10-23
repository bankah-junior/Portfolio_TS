import React, { useState, useEffect } from 'react';
import { Code2, LineChart, Github, Linkedin, Mail, Instagram, ArrowDown, Briefcase, Brain, Coffee, Target, ChevronDown, ChevronUp } from 'lucide-react';
import ProjectsGrid from './components/ProjectsGrid';
import Navbar from './components/Navbar';
import useScrollSpy from './hooks/useScrollSpy';
import { techProjects, financeProjects } from './data/projects';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
    title: 'Software Engineering'
  },
  {
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070',
    title: 'Fund Management'
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070',
    title: 'Coding'
  },
  {
    url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070',
    title: 'Trading'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTechProjects, setShowTechProjects] = useState(false);
  const [showFinanceProjects, setShowFinanceProjects] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <header id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-10' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-8 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <div className="z-10 text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">Anthony Bekoe Bankah</h1>
          <div className="flex items-center justify-center mb-8 space-x-4">
            <Code2 className="w-8 h-8" />
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <LineChart className="w-8 h-8" />
          </div>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">Software Engineer & Fund Manager</p>
          <div className="flex justify-center mb-12 space-x-4">
            <a href="https://github.com/bankah-junior" className="transition-colors hover:text-blue-400"><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com/mwlite/in/anthony-bekoe-bankah" className="transition-colors hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/iam.bankah/" className="transition-colors hover:text-blue-400"><Instagram className="w-6 h-6" /></a>
          </div>
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
        </div>
      </header>

      {/* Tech Section */}
      <section id="tech" className="px-4 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Software Engineering</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 transition-transform transform bg-gray-900 rounded-lg hover:scale-105">
              <Brain className="w-12 h-12 mb-6 text-blue-500" />
              <h3 className="mb-4 text-xl font-bold">Technical Expertise</h3>
              <p className="text-gray-400">Specialized in full-stack development with a focus on scalable architecture and cloud solutions.</p>
            </div>
            <div className="p-8 transition-transform transform bg-gray-900 rounded-lg hover:scale-105">
              <Code2 className="w-12 h-12 mb-6 text-blue-500" />
              <h3 className="mb-4 text-xl font-bold">Tech Stack</h3>
              <p className="text-gray-400">React, Vue, Node.js, TypeScript, Next.js, MQL, Pinescript, TailwindCSS, Bootstrap, SQL, NoSQL, Figma, Photoshop, Project Management and Modern Development Practices.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowTechProjects(!showTechProjects)}
              className="inline-flex items-center px-6 py-3 transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              {showTechProjects ? 'Hide Projects' : 'View Projects'}
              {showTechProjects ? (
                <ChevronUp className="w-5 h-5 ml-2" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-2" />
              )}
            </button>
          </div>
          {showTechProjects && <ProjectsGrid projects={techProjects} />}
        </div>
      </section>

      {/* Finance Section */}
      <section id="finance" className="px-4 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Fund Management</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 transition-transform transform bg-gray-800 rounded-lg hover:scale-105">
              <Briefcase className="w-12 h-12 mb-6 text-green-500" />
              <h3 className="mb-4 text-xl font-bold">Portfolio Management</h3>
              <p className="text-gray-400">Strategic asset allocation and risk management for optimal returns.</p>
            </div>
            <div className="p-8 transition-transform transform bg-gray-800 rounded-lg hover:scale-105">
              <Target className="w-12 h-12 mb-6 text-green-500" />
              <h3 className="mb-4 text-xl font-bold">Investment Strategy</h3>
              <p className="text-gray-400">Data-driven approach combining technical analysis, sentimental analysis with fundamental research.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowFinanceProjects(!showFinanceProjects)}
              className="inline-flex items-center px-6 py-3 transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
              {showFinanceProjects ? 'Hide Projects' : 'View Projects'}
              {showFinanceProjects ? (
                <ChevronUp className="w-5 h-5 ml-2" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-2" />
              )}
            </button>
          </div>
          {showFinanceProjects && <ProjectsGrid projects={financeProjects} />}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Let's Connect</h2>
          <p className="mb-8 text-gray-400">Available for consulting and investment opportunities</p>
          <a href="mailto:anthonybekoebankah@gmail.com" className="inline-flex items-center px-6 py-3 font-bold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900">
        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
          <p className="mb-4 text-gray-400 md:mb-0">© 2024 Anthony Bekoe Bankah. All rights reserved.</p>
          <div className="flex space-x-6">
            <Coffee className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Github className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Linkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;