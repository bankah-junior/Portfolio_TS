import { useState, useEffect } from 'react';
import { Code2, LineChart, Github, Linkedin, Instagram, ArrowDown, Briefcase, Target, ChevronDown, ChevronUp } from 'lucide-react';
import ProjectsGrid from './components/ProjectsGrid';
import TechCard from './components/TechCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import useScrollSpy from './hooks/useScrollSpy';
import { techProjects } from './data/projects';
import TradeHistoryGalleryCard from './components/TradeHistoryGalleryCard';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
    title: 'Software Engineering',
    description: 'Building scalable solutions'
  },
  {
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070',
    title: 'Fund Management',
    description: 'Strategic investment planning'
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070',
    title: 'Coding',
    description: 'Crafting elegant code'
  },
  {
    url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070',
    title: 'Trading',
    description: 'Data-driven decisions'
  }
];

const techItems = [
  {
    title: "Development",
    icon: Code2,
    color: "blue",
    items: [
      {
        label: "Frontend",
        techs: ["HTML / CSS", "JavaScript", "React", "Vue", "TypeScript", "Next.js"]
      },
      {
        label: "Backend",
        techs: ["Node.js", "Express", "MongoDB", "SQL"]
      },
      {
        label: "Mobile",
        techs: ["Flutter", "Dart"]
      },
      {
        label: "Design",
        techs: ["Figma", "Adobe Photoshop", "Canva"]
      }
    ]
  },
  {
    title: "Trading Systems",
    icon: LineChart,
    color: "green",
    items: [
      {
        label: "Analysis",
        techs: ["Technical", "Fundamental", "Sentiment"]
      },
      {
        label: "Automation",
        techs: ["MQL5", "PineScript"]
      },
      {
        label: "Risk Management",
        techs: ["Portfolio", "Strategy", "Backtesting"]
      },
      {
        label: "Trading Platforms",
        techs: ["TradingView", "MT5", "CTrader"]
      }
    ]
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
      <header id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlide === index
                ? 'opacity-20 scale-105'
                : 'opacity-0 scale-100'
                }`}
              style={{
                backgroundImage: `url('${slide.url}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
        </div>

        <div className="container z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center mb-6 space-x-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20">
                  <Code2 className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20">
                  <LineChart className="w-8 h-8 text-green-400" />
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Anthony Bekoe Bankah
              </h1>

              <div className="relative h-20 mb-8 overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full transition-all duration-500 transform ${currentSlide === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                      }`}
                  >
                    <h2 className="mb-2 text-2xl font-medium md:text-3xl">{slide.title}</h2>
                    <p className="text-gray-400">{slide.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-12 space-x-6">
                <a
                  href="https://github.com/bankah-junior"
                  className="transition-transform transform hover:scale-110"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Github className="w-6 h-6" />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/mwlite/in/anthony-bekoe-bankah"
                  className="transition-transform transform hover:scale-110"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Linkedin className="w-6 h-6" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/iam.bankah/"
                  className="transition-transform transform hover:scale-110"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Instagram className="w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </header>

      {/* Tech Section */}
      <section id="tech" className="px-4 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Expertise</h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Combining software engineering excellence with financial market insights
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {techItems.map((item) => (
              <TechCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                items={item.items}
                color={item.color}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowTechProjects(!showTechProjects)}
              className="inline-flex items-center px-6 py-3 transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
            >
              {showTechProjects ? 'Hide Projects' : 'View Projects'}
              {showTechProjects ? (
                <ChevronUp className="w-5 h-5 ml-2" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-2" />
              )}
            </button>
          </div>

          {showTechProjects && (
            <div className="mt-12 transition-all duration-500 transform">
              <ProjectsGrid projects={techProjects} />
            </div>
          )}
        </div>
      </section>

      {/* Finance Section */}
      <section id="finance" className="px-4 py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Fund Management</h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Data-driven investment strategies with comprehensive risk management
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 transition-all duration-500 group bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-center mb-6 space-x-5">
                <div className="flex items-center justify-center w-16 h-16 transition-transform transform rounded-xl bg-green-500/10 group-hover:scale-110 group-hover:rotate-6">
                  <Briefcase className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Portfolio Management</h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2 transition-all duration-300 transform hover:translate-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Strategic asset allocation</span>
                </li>
                <li className="flex items-center space-x-2 transition-all duration-300 transform hover:translate-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Risk assessment and mitigation</span>
                </li>
                <li className="flex items-center space-x-2 transition-all duration-300 transform hover:translate-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>

            <div className="p-8 transition-all duration-500 group bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-center mb-6 space-x-5">
                <div className="flex items-center justify-center w-16 h-16 transition-transform transform rounded-xl bg-green-500/10 group-hover:scale-110 group-hover:rotate-6">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Investment Strategy</h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2 transition-all duration-300 transform hover:translate-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Technical analysis integration</span>
                </li>
                <li className="flex items-center space-x-2 transition-all duration-300 transform hover:translate-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Market sentiment analysis</span>
                </li>
                <li className="flex items-center space-x-2 transition-all duration-300 transform hover:translate-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Fundamental research</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowFinanceProjects(!showFinanceProjects)}
              className="inline-flex items-center px-6 py-3 transition-all duration-300 transform bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105"
            >
              {showFinanceProjects ? 'Hide Trades' : 'View Trades'}
              {showFinanceProjects ? (
                <ChevronUp className="w-5 h-5 ml-2" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-2" />
              )}
            </button>
          </div>

          {showFinanceProjects && <TradeHistoryGalleryCard />}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let's Connect</h2>
            <p className="text-gray-400">
              Available for consulting and investment opportunities
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;