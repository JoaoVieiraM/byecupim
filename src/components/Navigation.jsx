import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/empresa', label: 'Empresa' },
    { to: '/sistema', label: 'Sistema' },
    { to: '/tipos-cupins', label: 'Tipos de Cupins' },
    { to: '/contato', label: 'Contato' },
  ]

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-100/95 backdrop-blur-sm border-b border-text-900/10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-semibold text-text-900">
            ByeCupim
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-900 transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-100 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="px-6 md:px-12 lg:px-16 py-6 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-text-900 transition-transform duration-300 hover:scale-110"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-8 text-center">
              {navLinks.map((link, index) => (
                <li
                  key={link.to}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-text-900 transition-all duration-300 hover:text-green-600 hover:translate-x-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Info */}
          <div className="px-6 md:px-12 lg:px-16 py-12 border-t border-text-900/10">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <p className="text-micro uppercase tracking-wider text-text-900/60 mb-2">
                  25 Anos de Experiência
                </p>
                <p className="text-sm text-text-900">
                  Engenharia de Proteção Premium
                </p>
              </div>
              <div>
                <p className="text-micro uppercase tracking-wider text-text-900/60 mb-2">
                  Contato
                </p>
                <p className="text-sm text-text-900">
                  contato@byecupim.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
