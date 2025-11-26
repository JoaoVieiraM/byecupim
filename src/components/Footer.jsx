import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/Gemini_Generated_Image_cw60fbcw60fbcw60-removebg-preview.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-900 text-gray-50">
      <div className="max-w-screen-2xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="ByeCupim Logo"
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-display font-semibold">ByeCupim</h3>
            </div>
            <p className="text-gray-100/70 leading-relaxed mb-6">
              25 anos dedicados à engenharia de proteção premium.
              Garantia de 5 anos em todos os serviços.
            </p>
            <div className="flex gap-4">
              {/* Add social media links here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-micro uppercase tracking-wider text-gray-100/60 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-100/70 hover:text-gray-50 transition-colors link-subtle">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="text-gray-100/70 hover:text-gray-50 transition-colors link-subtle">
                  Empresa
                </Link>
              </li>
              <li>
                <Link to="/sistema" className="text-gray-100/70 hover:text-gray-50 transition-colors link-subtle">
                  Sistema ByeCupim
                </Link>
              </li>
              <li>
                <Link to="/tipos-cupins" className="text-gray-100/70 hover:text-gray-50 transition-colors link-subtle">
                  Tipos de Cupins
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-100/70 hover:text-gray-50 transition-colors link-subtle">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-micro uppercase tracking-wider text-gray-100/60 mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-gray-100/60 mt-1 flex-shrink-0 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                <a
                  href="mailto:contato@byecupim.com.br"
                  className="text-gray-100/70 hover:text-gray-50 transition-colors xl:text-lg"
                >
                  contato@byecupim.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-gray-100/60 mt-1 flex-shrink-0 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                <div className="text-gray-100/70 xl:text-lg">
                  <a
                    href="tel:+551132771288"
                    className="hover:text-gray-50 transition-colors block"
                  >
                    (11) 3277-1288
                  </a>
                  <a
                    href="https://wa.me/5511919749856"
                    className="hover:text-gray-50 transition-colors block text-sm xl:text-base mt-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: (11) 91974-9856
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gray-100/60 mt-1 flex-shrink-0 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                <address className="text-gray-100/70 not-italic xl:text-lg">
                  Rua Tenente Azevedo, 199
                  <br />
                  Aclimação - São Paulo, SP
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-100/60">
          <p>
            &copy; {currentYear} ByeCupim. Todos os direitos reservados.
          </p>
          <p className="text-micro">
            Engenharia de Proteção Premium
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
