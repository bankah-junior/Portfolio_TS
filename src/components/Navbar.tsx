import React from 'react';
import { Code2, LineChart } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'tech', label: 'Software' },
  { id: 'finance', label: 'Finance' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-blue-500" />
            <LineChart className="w-6 h-6 text-green-500" />
          </div>
          
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSection === item.id ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}