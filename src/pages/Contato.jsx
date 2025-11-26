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
              <div className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <MapPin size={24} className="md:w-7 md:h-7 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11" />
              </div>
              <h3 className="text-lg xl:text-xl font-semibold mb-3">Localização</h3>
              <p className="text-gray-100/70 xl:text-lg">
                Rua Tenente Azevedo, 199
                <br />
                Aclimação - São Paulo, SP
                <br />
                Brasil
              </p>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Phone size={24} className="md:w-7 md:h-7 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11" />
              </div>
              <h3 className="text-lg xl:text-xl font-semibold mb-3">Telefone</h3>
              <a
                href="tel:+551132771288"
                className="text-gray-100/70 xl:text-lg hover:text-gray-50 transition-colors block"
              >
                (11) 3277-1288
              </a>
              <a
                href="https://wa.me/5511919749856"
                className="text-gray-100/70 hover:text-gray-50 transition-colors block text-sm xl:text-base mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (11) 91974-9856
              </a>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Mail size={24} className="md:w-7 md:h-7 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11" />
              </div>
              <h3 className="text-lg xl:text-xl font-semibold mb-3">Email</h3>
              <a
                href="mailto:contato@byecupim.com.br"
                className="text-gray-100/70 xl:text-lg hover:text-gray-50 transition-colors"
              >
                contato@byecupim.com.br
              </a>
            </div>

            <div className="text-center p-6 md:p-8 bg-gray-50/5 border border-gray-50/10">
              <div className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full bg-gray-50/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Clock size={24} className="md:w-7 md:h-7 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11" />
              </div>
              <h3 className="text-lg xl:text-xl font-semibold mb-3">Horário</h3>
              <p className="text-gray-100/70 xl:text-lg">
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

      {/* Google Maps */}
      <section className="bg-text-900">
        <div className="h-96 md:h-[500px] lg:h-[600px] border-t border-gray-50/10">
          <iframe
            src="https://maps.google.com/maps?q=Rua+Tenente+Azevedo,+199,+Aclimação,+São+Paulo,+SP,+Brasil&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização ByeCupim - Rua Tenente Azevedo, 199 - Aclimação, São Paulo"
          />
        </div>
      </section>
    </div>
  )
}

export default Contato
