import { Home, TreePine, Droplets, AlertTriangle } from 'lucide-react'

const TiposCupins = () => {
  const tipos = [
    {
      icon: Home,
      nome: 'Cupim de Madeira Seca',
      nomeLatim: 'Cryptotermes brevis',
      descricao: 'Infesta madeiras com baixo teor de umidade. Comum em móveis, estruturas de telhado e esquadrias. Não requer contato com o solo.',
      caracteristicas: [
        'Presença de pequenos grânulos (fezes) próximos à madeira',
        'Pequenos orifícios circulares na superfície da madeira',
        'Não necessita de umidade externa',
        'Colônias menores mas altamente destrutivas',
      ],
      risco: 'Alto',
    },
    {
      icon: TreePine,
      nome: 'Cupim Subterrâneo',
      nomeLatim: 'Coptotermes spp.',
      descricao: 'Vive em colônias no solo e constrói túneis de acesso. Ataca madeiras e outros materiais celulósicos. Requer umidade constante.',
      caracteristicas: [
        'Túneis de barro na superfície de paredes e estruturas',
        'Grandes colônias (milhões de indivíduos)',
        'Necessita de contato com o solo',
        'Alta capacidade destrutiva em curto período',
      ],
      risco: 'Muito Alto',
    },
    {
      icon: Droplets,
      nome: 'Cupim Arborícola',
      nomeLatim: 'Nasutitermes spp.',
      descricao: 'Constrói ninhos aparentes (cupinzeiros) em árvores e estruturas. Menos destrutivo para edificações, mas pode causar danos estéticos.',
      caracteristicas: [
        'Ninhos escuros e visíveis em troncos ou paredes',
        'Trabalha principalmente em madeira morta externa',
        'Menor risco estrutural para edificações',
        'Pode danificar jardins e áreas verdes',
      ],
      risco: 'Moderado',
    },
  ]

  const sinais = [
    'Presença de "pó" fino próximo a móveis ou estruturas de madeira',
    'Pequenos orifícios ou galerias visíveis na madeira',
    'Túneis de barro em paredes, rodapés ou estruturas',
    'Asas de cupins (revoadas) próximas a janelas e portas',
    'Madeira que soa oca quando tocada',
    'Ninhos aparentes em árvores ou estruturas externas',
  ]

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-micro uppercase tracking-[0.3em] text-text-900/60 mb-6">
              Conhecimento Técnico
            </p>
            <h1 className="text-display font-display font-semibold text-text-900 mb-8">
              Tipos de Cupins:
              <br />
              <span className="text-green-600">Identificação e Riscos</span>
            </h1>
            <p className="text-xl text-text-900/70 leading-relaxed">
              Compreender o tipo de cupim é fundamental para desenvolver uma
              estratégia de proteção eficaz. Cada espécie possui comportamento
              e necessidades distintas.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos Section */}
      <section className="section-padding bg-gray-100">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          {tipos.map((tipo, index) => {
            const IconComponent = tipo.icon
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Icon & Title */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-text-900 text-gray-50 p-6 md:p-10 lg:p-12 min-h-[400px] flex flex-col justify-center">
                    <div className="w-20 h-20 rounded-full bg-gray-50/10 flex items-center justify-center mb-8">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-3xl font-display font-semibold mb-2">
                      {tipo.nome}
                    </h3>
                    <p className="text-sm italic text-gray-100/60 mb-6">
                      {tipo.nomeLatim}
                    </p>
                    <div className={`inline-block px-4 py-2 rounded-full text-xs uppercase tracking-wider mb-6 ${
                      tipo.risco === 'Muito Alto' ? 'bg-red-500/20 text-red-300' :
                      tipo.risco === 'Alto' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      Risco: {tipo.risco}
                    </div>
                    <p className="text-gray-100/80 leading-relaxed">
                      {tipo.descricao}
                    </p>
                  </div>
                </div>

                {/* Características */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 p-6 md:p-10 lg:p-12 border border-text-900/10">
                    <h4 className="text-micro uppercase tracking-wider text-text-900/60 mb-6">
                      Características de Identificação
                    </h4>
                    <ul className="space-y-4">
                      {tipo.caracteristicas.map((carac, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                          <p className="text-text-900/80">{carac}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Sinais de Infestação */}
      <section className="section-padding bg-text-900 text-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-gray-50/10 flex items-center justify-center mb-8">
                <AlertTriangle size={32} />
              </div>
              <h2 className="text-display font-display font-semibold mb-8">
                Sinais de
                <br />
                Infestação
              </h2>
              <p className="text-xl text-gray-100/70 leading-relaxed">
                A detecção precoce é fundamental para minimizar danos estruturais.
                Nossa equipe realiza inspeções técnicas gratuitas para diagnóstico preciso.
              </p>
            </div>

            <div>
              <ul className="space-y-6">
                {sinais.map((sinal, index) => (
                  <li key={index} className="flex items-start gap-4 bg-gray-50/5 p-6 border border-gray-50/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50/10 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-100/80 pt-1">{sinal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-display font-display font-semibold mb-8">
            Suspeita de Infestação?
          </h2>
          <p className="text-xl text-gray-100/70 mb-12 leading-relaxed">
            Nossa equipe técnica realiza vistoria gratuita com diagnóstico preciso
            e proposta customizada de tratamento.
          </p>
          <a href="/contato" className="btn-primary inline-block bg-gray-50 text-green-600 hover:bg-gray-100">
            Agende uma Vistoria Gratuita
          </a>
        </div>
      </section>
    </div>
  )
}

export default TiposCupins
