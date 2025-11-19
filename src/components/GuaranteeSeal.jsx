import { Shield, Check } from 'lucide-react'

const GuaranteeSeal = () => {
  return (
    <section className="section-padding bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRpYWdvbmFsIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSI0MCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-600/5 px-4 py-2 rounded-full mb-4">
            <Shield size={16} className="text-green-600" />
            <p className="text-micro uppercase tracking-wider text-green-600 font-medium">
              Compromisso Premium
            </p>
          </div>
          <h2 className="text-display font-display font-semibold text-text-900">
            Garantia de 5 Anos
          </h2>
        </div>

        {/* Seal Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Visual Seal */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                {/* Outer Ring with Animation */}
                <div className="absolute inset-0 rounded-full border-4 border-green-600/10 animate-subtle-pulse"></div>

                {/* Main Seal */}
                <div className="relative bg-green-600 rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-xl">
                  {/* Inner Circle */}
                  <div className="absolute inset-4 md:inset-5 lg:inset-6 rounded-full border-2 border-gray-50/20"></div>

                  {/* Content */}
                  <div className="text-center text-gray-50 z-10">
                    <Shield className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2 md:mb-3 animate-fade-in" />
                    <p className="text-3xl md:text-4xl font-display font-bold mb-1">5</p>
                    <p className="text-xs md:text-sm uppercase tracking-wider">Anos</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80 mt-1">Garantia</p>
                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-t-2 border-gray-50/10 animate-spin" style={{ animationDuration: '20s' }}></div>
                </div>

                {/* Decorative Numbers */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-green-500 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center text-gray-50 font-bold text-base md:text-lg lg:text-xl shadow-lg">
                  25
                </div>
              </div>
            </div>

            {/* Explanation Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-text-900 mb-3">
                  Selo de Qualidade Premium
                </h3>
                <p className="text-text-900/70 leading-relaxed">
                  Nossa garantia de 5 anos é o resultado de 25 anos de excelência
                  em engenharia de proteção. Cada projeto é executado com precisão
                  técnica e metodologia comprovada.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Metodologia validada por 15+ anos',
                  'Tecnologia de blindagem de ponta',
                  'Inspeções periódicas incluídas',
                  'Suporte técnico especializado',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600/10 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <p className="text-sm text-text-900/80">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="/sistema"
                  className="inline-flex items-center gap-2 text-green-600 font-medium link-subtle text-sm"
                >
                  Conheça a metodologia completa
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits Bar */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 border border-text-900/5">
            <p className="text-3xl font-display font-bold text-green-600 mb-1">15+</p>
            <p className="text-sm text-text-900/60">Anos de Sistema Ativo</p>
          </div>
          <div className="text-center p-6 bg-gray-50 border border-text-900/5">
            <p className="text-3xl font-display font-bold text-green-600 mb-1">100%</p>
            <p className="text-sm text-text-900/60">Eficácia Comprovada</p>
          </div>
          <div className="text-center p-6 bg-gray-50 border border-text-900/5">
            <p className="text-3xl font-display font-bold text-green-600 mb-1">24/7</p>
            <p className="text-sm text-text-900/60">Suporte Disponível</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteeSeal
