import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contato = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-micro uppercase tracking-[0.3em] text-text-900/60 mb-6">
            Fale Conosco
          </p>
          <h1 className="text-display font-display font-semibold text-text-900 mb-8">
            Consultoria
            <br />
            <span className="text-green-600">Estratégica</span>
          </h1>
          <p className="text-xl text-text-900/70 max-w-3xl mx-auto leading-relaxed">
            Cada projeto é único. Nossa equipe de engenharia está pronta para
            desenvolver a solução ideal para proteger seu patrimônio.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-text-900 text-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <MapPin size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Localização</h3>
              <p className="text-gray-100/70">
                São Paulo, SP
                <br />
                Brasil
              </p>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Phone size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Telefone</h3>
              <a
                href="tel:+5511999999999"
                className="text-gray-100/70 hover:text-gray-50 transition-colors"
              >
                (11) 99999-9999
              </a>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Mail size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Email</h3>
              <a
                href="mailto:contato@byecupim.com.br"
                className="text-gray-100/70 hover:text-gray-50 transition-colors"
              >
                contato@byecupim.com.br
              </a>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Clock size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Horário</h3>
              <p className="text-gray-100/70">
                Seg - Sex: 8h às 18h
                <br />
                Sáb: 9h às 13h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Placeholder */}
      <section className="bg-text-900">
        <div className="h-96 bg-gray-50/5 flex items-center justify-center border-t border-gray-50/10">
          <div className="text-center text-gray-50">
            <MapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-4 opacity-20" />
            <p className="text-gray-100/40 text-sm uppercase tracking-wider">
              Mapa de Localização
            </p>
            <p className="text-gray-100/20 text-xs mt-2">
              Integração com Google Maps
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
