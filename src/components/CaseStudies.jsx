import { Building2, Home, Warehouse } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      icon: Building2,
      category: 'Corporativo',
      title: 'Edifício Premium Jardins',
      client: 'Construtora Referência',
      description: 'Blindagem estrutural completa em edifício comercial de alto padrão. Sistema preventivo com 15 anos de operação contínua.',
      stats: [
        { label: 'Área Protegida', value: '12.500m²' },
        { label: 'Tempo de Sistema', value: '15 Anos' },
      ],
    },
    {
      icon: Home,
      category: 'Residencial de Luxo',
      title: 'Residência Alphaville',
      client: 'Arquiteto João Silva',
      description: 'Proteção integrada desde a fundação. Design invisível que preserva a estética arquitetônica sem comprometer a eficácia.',
      stats: [
        { label: 'Área Protegida', value: '850m²' },
        { label: 'Tempo de Sistema', value: '8 Anos' },
      ],
    },
    {
      icon: Warehouse,
      category: 'Administração Patrimonial',
      title: 'Complexo Logístico',
      client: 'Administradora Premium',
      description: 'Manutenção preventiva em múltiplas unidades. Protocolo de inspeção trimestral com zero incidências em 10 anos.',
      stats: [
        { label: 'Unidades', value: '24' },
        { label: 'Tempo de Contrato', value: '10 Anos' },
      ],
    },
  ]

  return (
    <section className="section-padding bg-text-900 text-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-50/10 px-4 py-2 rounded-full mb-4">
            <p className="text-micro uppercase tracking-wider text-gray-100/70">
              Portfólio de Excelência
            </p>
          </div>
          <h2 className="text-display font-display font-semibold text-gray-50 mb-4">
            Projetos de Referência
          </h2>
          <p className="text-gray-100/70 max-w-2xl mx-auto leading-relaxed">
            Mais de duas décadas protegendo patrimônios de alto valor
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon
            return (
              <div
                key={index}
                className="group bg-gray-50 text-text-900 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-green-600/5 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 group-hover:bg-green-600 group-hover:scale-110">
                  <IconComponent size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-green-600 transition-colors duration-300 group-hover:text-gray-50" />
                </div>

                {/* Category Badge */}
                <div className="inline-block bg-green-600/5 px-3 py-1 rounded-full mb-4">
                  <p className="text-micro uppercase tracking-wider text-green-600 font-medium">
                    {caseStudy.category}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-xl xl:text-2xl font-display font-semibold mb-2">
                  {caseStudy.title}
                </h3>

                {/* Client */}
                <p className="text-sm xl:text-base text-text-900/60 mb-4">
                  {caseStudy.client}
                </p>

                {/* Description */}
                <p className="text-sm xl:text-base text-text-900/80 leading-relaxed mb-6">
                  {caseStudy.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-text-900/10">
                  {caseStudy.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <p className="text-xl font-display font-semibold text-green-600 mb-0.5">
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-text-900/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-50/10">
          <p className="text-gray-100/70 mb-5 text-lg">
            Seu projeto merece o mesmo nível de excelência
          </p>
          <a href="/contato" className="btn-primary inline-block">
            Agende uma Consultoria Estratégica
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
