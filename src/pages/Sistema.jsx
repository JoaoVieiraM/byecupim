import { Shield, Layers, Target, Clock } from 'lucide-react'

const Sistema = () => {
  const metodologia = [
    {
      icon: Target,
      title: 'Diagnóstico Preciso',
      description: 'Mapeamento detalhado da estrutura com tecnologia de ponta. Identificação de vulnerabilidades e pontos críticos antes da intervenção.',
    },
    {
      icon: Shield,
      title: 'Blindagem Estrutural',
      description: 'Aplicação de barreira química de alta performance. Sistema de proteção invisível que preserva a estética arquitetônica.',
    },
    {
      icon: Layers,
      title: 'Monitoramento Contínuo',
      description: 'Protocolo de inspeção trimestral incluído na garantia. Manutenção preventiva para assegurar eficácia permanente.',
    },
    {
      icon: Clock,
      title: 'Garantia Estendida',
      description: '5 anos de proteção garantida por contrato. Suporte técnico especializado durante todo o período.',
    },
  ]

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-micro uppercase tracking-[0.3em] text-text-900/60 mb-6">
              Tecnologia Premium
            </p>
            <h1 className="text-display font-display font-semibold text-text-900 mb-8">
              Sistema ByeCupim:
              <br />
              <span className="text-green-600">Engenharia de Proteção</span>
            </h1>
            <p className="text-xl text-text-900/70 leading-relaxed">
              Mais do que um tratamento uma solução de engenharia que adiciona
              valor permanente à sua estrutura. 15+ anos de sistema ativo comprovam
              a eficácia da nossa metodologia.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="section-padding bg-text-900 text-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <p className="text-micro uppercase tracking-[0.3em] text-gray-100/60 mb-4">
              Processo Técnico
            </p>
            <h2 className="text-display font-display font-semibold mb-6">
              Metodologia em 4 Etapas
            </h2>
            <p className="text-gray-100/70 max-w-2xl mx-auto">
              Abordagem sistemática desenvolvida e refinada ao longo de 25 anos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metodologia.map((etapa, index) => {
              const IconComponent = etapa.icon
              return (
                <div key={index} className="text-center group">
                  <div className="mb-6 md:mb-8 flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50/5 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-50 group-hover:scale-110">
                      <IconComponent size={28} className="md:w-9 md:h-9 text-gray-50 transition-colors duration-300 group-hover:text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gray-50/10 mb-3 md:mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {etapa.title}
                  </h3>
                  <p className="text-gray-100/70 leading-relaxed">
                    {etapa.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section-padding bg-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-display font-display font-semibold text-text-900 mb-8">
                Especificações
                <br />
                Técnicas
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Durabilidade Comprovada</h3>
                  <p className="text-text-900/70">
                    Sistema ativo por 15+ anos em projetos de referência.
                    Tecnologia validada em diferentes condições climáticas e estruturais.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Aplicação Não-Invasiva</h3>
                  <p className="text-text-900/70">
                    Preservação total da estética arquitetônica. Barreira invisível
                    que não compromete acabamentos ou design interior.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
                  <p className="text-text-900/70">
                    Produtos de baixo impacto ambiental. Protocolo eco-eficiente
                    alinhado com certificações internacionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-text-900 text-gray-50 p-8 md:p-12 lg:p-16">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">15+</p>
                  <p className="text-gray-100/70">Anos de sistema ativo em operação contínua</p>
                </div>
                <div className="border-t border-gray-50/10 pt-8 md:pt-12">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">5</p>
                  <p className="text-gray-100/70">Anos de garantia estendida em todos os projetos</p>
                </div>
                <div className="border-t border-gray-50/10 pt-8 md:pt-12">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">100%</p>
                  <p className="text-gray-100/70">Eficácia comprovada em projetos residenciais e corporativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-display font-display font-semibold mb-8">
            Pronto para Proteger Seu Patrimônio?
          </h2>
          <p className="text-xl text-gray-100/70 mb-12 leading-relaxed">
            Nossa equipe de engenharia está pronta para desenvolver
            uma solução customizada para seu projeto.
          </p>
          <a href="/contato" className="btn-primary inline-block bg-gray-50 text-green-600 hover:bg-gray-100">
            Solicite uma Consultoria
          </a>
        </div>
      </section>
    </div>
  )
}

export default Sistema
