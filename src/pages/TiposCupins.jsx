import { AlertTriangle } from 'lucide-react'
import cupimMadeiraSeca from '../assets/cupimicone-removebg-preview.png'
import cupimSubterraneo from '../assets/cupimicone2-removebg-preview.png'

const TiposCupins = () => {
  const tipos = [
    {
      image: cupimMadeiraSeca,
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
      image: cupimSubterraneo,
      nome: 'Cupim Subterrâneo',
      nomeLatim: 'Coptotermes gestroi',
      descricao: 'A espécie mais destrutiva em áreas urbanas. Constrói ninhos no solo ou em locais úmidos e se desloca até a madeira através de túneis protegidos. Requer umidade constante para sobreviver.',
      caracteristicas: [
        'Túneis de lama (caminhos de barro) em paredes e estruturas',
        'Grandes colônias que se multiplicam rapidamente',
        'Bolhas na pintura de paredes e estruturas',
        'Compromete rapidamente estruturas em poucos meses',
      ],
      risco: 'Muito Alto',
    },
  ]

  const sinais = [
    'Grânulos fecais (frass): pequenas bolinhas secas parecidas com serragem ou areia',
    'Pequenos orifícios de expulsão na superfície da madeira',
    'Túneis de lama (caminhos de barro) em paredes, rodapés e estruturas',
    'Asas descartadas próximas a janelas e portas após revoadas',
    'Madeira que soa oca e fica frágil ao toque',
    'Bolhas na pintura indicando consumo interno da madeira',
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
                    <div className="mb-8 flex justify-center">
                      <img
                        src={tipo.image}
                        alt={tipo.nome}
                        className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl xl:text-4xl font-display font-semibold mb-2">
                      {tipo.nome}
                    </h3>
                    <p className="text-sm xl:text-base italic text-gray-100/60 mb-6">
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
              <div className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full bg-gray-50/10 flex items-center justify-center mb-8">
                <AlertTriangle size={32} className="md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
              </div>
              <h2 className="text-display font-display font-semibold mb-8">
                Sinais de
                <br />
                Infestação
              </h2>
              <p className="text-xl text-gray-100/70 leading-relaxed">
                A detecção precoce é fundamental para minimizar danos estruturais.
                Nossa equipe realiza inspeções técnicas especializadas para diagnóstico preciso.
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

      {/* Prevenção Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-micro uppercase tracking-[0.3em] text-text-900/60 mb-4">
              Proteção Estratégica
            </p>
            <h2 className="text-display font-display font-semibold text-text-900 mb-6">
              Prevenção e Ação
            </h2>
            <p className="text-xl text-text-900/70 max-w-2xl mx-auto leading-relaxed">
              A melhor forma de proteger seu patrimônio é através da prevenção
              e da ação imediata ao primeiro sinal de infestação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-6 border border-text-900/10">
              <div className="text-3xl font-display font-bold text-green-600/20 mb-4">01</div>
              <h3 className="text-xl font-semibold text-text-900 mb-3">
                Inspeção Periódica
              </h3>
              <p className="text-text-900/70 leading-relaxed">
                Verifique regularmente móveis, portas, janelas e estruturas de madeira,
                especialmente em áreas úmidas ou próximas ao solo.
              </p>
            </div>

            <div className="bg-gray-100 p-6 border border-text-900/10">
              <div className="text-3xl font-display font-bold text-green-600/20 mb-4">02</div>
              <h3 className="text-xl font-semibold text-text-900 mb-3">
                Controle de Umidade
              </h3>
              <p className="text-text-900/70 leading-relaxed">
                Reduza a umidade em casa, consertando vazamentos e garantindo
                boa ventilação crucial para prevenir o cupim subterrâneo.
              </p>
            </div>

            <div className="bg-gray-100 p-6 border border-text-900/10">
              <div className="text-3xl font-display font-bold text-green-600/20 mb-4">03</div>
              <h3 className="text-xl font-semibold text-text-900 mb-3">
                Tratamento Preventivo
              </h3>
              <p className="text-text-900/70 leading-relaxed">
                Madeira utilizada em construções e reformas deve ser tratada
                preventivamente para máxima proteção estrutural.
              </p>
            </div>

            <div className="bg-gray-100 p-6 border border-text-900/10">
              <div className="text-3xl font-display font-bold text-green-600/20 mb-4">04</div>
              <h3 className="text-xl font-semibold text-text-900 mb-3">
                Descupinização Profissional
              </h3>
              <p className="text-text-900/70 leading-relaxed">
                Tratamento caseiro raramente elimina a colônia por completo.
                A solução profissional é a mais eficaz e duradoura.
              </p>
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
            Nossa equipe técnica realiza vistoria especializada com diagnóstico preciso
            e proposta customizada de tratamento.
          </p>
          <a href="/contato" className="btn-primary inline-block bg-gray-50 text-green-600 hover:bg-gray-100">
            Solicite uma Vistoria
          </a>
        </div>
      </section>
    </div>
  )
}

export default TiposCupins
