import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react'

const Empresa = () => {
  const valores = [
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Compromisso inabalável com a precisão em cada projeto. Nossa reputação foi construída sobre 25 anos de entregas impecáveis.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Engenheiros e técnicos com certificações internacionais. Formação contínua nas últimas tecnologias de proteção estrutural.',
    },
    {
      icon: TrendingUp,
      title: 'Inovação Constante',
      description: 'Investimento em pesquisa e desenvolvimento. Metodologia atualizada com as mais recentes descobertas em engenharia de proteção.',
    },
  ]

  const marcos = [
    { ano: '2000', evento: 'Fundação da ByeCupim com foco em engenharia premium' },
    { ano: '2008', evento: 'Primeira certificação internacional em controle de pragas estruturais' },
    { ano: '2012', evento: 'Desenvolvimento do Sistema ByeCupim de blindagem de longa duração' },
    { ano: '2018', evento: 'Expansão para segmento corporativo e administração patrimonial' },
    { ano: '2025', evento: 'Líder em proteção premium com 1000+ projetos executados' },
  ]

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-micro uppercase tracking-[0.3em] text-text-900/60 mb-6">
              25 Anos de História
            </p>
            <h1 className="text-display font-display font-semibold text-text-900 mb-8">
              Construindo Legado
              <br />
              em <span className="text-green-600">Proteção Premium</span>
            </h1>
            <p className="text-xl text-text-900/70 leading-relaxed mb-12">
              Desde 2000, a ByeCupim tem sido sinônimo de excelência em engenharia
              de proteção. Transformamos a prevenção de pragas em uma ciência precisa,
              combinando tecnologia de ponta com metodologia comprovada.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section-padding bg-text-900 text-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <p className="text-micro uppercase tracking-[0.3em] text-gray-100/60 mb-4">
              Nossos Pilares
            </p>
            <h2 className="text-display font-display font-semibold">
              O Que Nos Define
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
            {valores.map((valor, index) => {
              const IconComponent = valor.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 mx-auto mb-8 rounded-full bg-gray-50/5 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 text-gray-50" />
                  </div>
                  <h3 className="text-2xl xl:text-3xl font-display font-semibold mb-4">
                    {valor.title}
                  </h3>
                  <p className="text-gray-100/70 xl:text-lg leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-micro uppercase tracking-[0.3em] text-text-900/60 mb-4">
              Nossa Jornada
            </p>
            <h2 className="text-display font-display font-semibold text-text-900">
              Marcos Históricos
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-10">
              {marcos.map((marco, index) => (
                <div key={index} className="flex gap-3 md:gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 md:w-24 text-right">
                      <p className="text-2xl md:text-4xl font-display font-bold text-green-600/20 group-hover:text-green-600 transition-colors">
                        {marco.ano}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-600 group-hover:scale-150 transition-transform"></div>
                    {index < marcos.length - 1 && (
                      <div className="w-0.5 flex-1 bg-green-600/20 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6 md:pb-10">
                    <div className="bg-gray-50 p-4 md:p-6 border border-text-900/10 group-hover:border-green-600/30 transition-colors">
                      <p className="text-sm md:text-base text-text-900/80 leading-relaxed">
                        {marco.evento}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-green-600 text-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 md:gap-10 lg:gap-12 text-center">
            <div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">25</p>
              <p className="text-gray-100/70 uppercase tracking-wider text-sm">
                Anos de Mercado
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">1000+</p>
              <p className="text-gray-100/70 uppercase tracking-wider text-sm">
                Projetos Executados
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">98%</p>
              <p className="text-gray-100/70 uppercase tracking-wider text-sm">
                Satisfação dos Clientes
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">5</p>
              <p className="text-gray-100/70 uppercase tracking-wider text-sm">
                Anos de Garantia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-display font-display font-semibold text-text-900 mb-8">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-text-900/70 mb-12 leading-relaxed">
            Descubra como nossa experiência pode proteger seu patrimônio
          </p>
          <a href="/contato" className="btn-primary inline-block">
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  )
}

export default Empresa
