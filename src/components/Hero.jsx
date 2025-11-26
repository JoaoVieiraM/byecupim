import { ArrowRight, Shield, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const stats = [
    { icon: Shield, value: '25', label: 'Anos de Mercado' },
    { icon: Award, value: '1000+', label: 'Projetos Entregues' },
    { icon: Users, value: '98%', label: 'Satisfação' },
  ]

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Texture Layer */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-transparent to-transparent"></div>

        {/* Decorative Large Number */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <p className="text-[20rem] font-display font-bold text-green-600 leading-none">25</p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Content - Text */}
          <div className="lg:col-span-7">
            {/* Micro-text Badge */}
            <div className="inline-flex items-center gap-2 bg-green-600/5 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 animate-fade-in">
              <Shield size={14} className="text-green-600 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              <p className="text-micro uppercase tracking-wider text-green-600 font-medium">
                Garantia de 5 Anos
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-hero font-display font-semibold mb-4 md:mb-6 leading-[1.1] text-text-900 animate-slide-up">
              25 Anos de
              <br />
              <span className="text-green-600">Engenharia</span>
              {' '}de Proteção
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg lg:text-xl max-w-xl text-text-900/70 leading-relaxed mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Transformamos estruturas em santuários protegidos com precisão técnica
              e metodologia comprovada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Link to="/sistema" className="btn-primary group inline-flex items-center justify-center gap-3">
                Descubra o Sistema ByeCupim
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
              <Link to="/contato" className="btn-ghost inline-flex items-center justify-center">
                Consultoria Estratégica
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 md:gap-5 text-xs md:text-sm text-text-900/60 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span>Certificação Internacional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span>Vistoria Especializada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span>Atendimento 24h</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50/80 backdrop-blur-sm border border-text-900/5 p-4 md:p-6 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full bg-green-600/5 flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={20} className="text-green-600 group-hover:text-gray-50 transition-colors md:w-6 md:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-display font-bold text-green-600">{stat.value}</p>
                        <p className="text-xs md:text-sm xl:text-base text-text-900/60">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
