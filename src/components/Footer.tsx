import { Github, Linkedin, Instagram, Coffee, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/bankah-junior', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/mwlite/in/anthony-bekoe-bankah', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/iam.bankah/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative px-4 py-12 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/50" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold">Bankah</h3>
            <p className="text-gray-400">Software Engineer & Fund Manager</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Icon className="w-5 h-5 text-gray-400 transition-colors hover:text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center space-x-2 text-gray-400 md:justify-end">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}