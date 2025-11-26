import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').optional(),
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    reset()
  }

  return (
    <section className="section-padding bg-gray-100 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImNpcmNsZXMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjaXJjbGVzKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-600/5 px-4 py-2 rounded-full mb-4">
              <p className="text-micro uppercase tracking-wider text-green-600 font-medium">
                Consultoria Estratégica
              </p>
            </div>
            <h2 className="text-display font-display font-semibold text-text-900 mb-6">
              Proteja Seu
              <br />
              Patrimônio
            </h2>
            <p className="text-lg text-text-900/70 leading-relaxed mb-8">
              Cada projeto é único. Nossa equipe está pronta para desenvolver
              uma solução customizada para sua estrutura.
            </p>

            <div className="space-y-4 text-text-900/80">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-600 mt-2"></div>
                <div>
                  <p className="font-medium mb-1 text-sm">Resposta em 24 horas</p>
                  <p className="text-sm text-text-900/60">
                    Retorno garantido em até um dia útil
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-600 mt-2"></div>
                <div>
                  <p className="font-medium mb-1 text-sm">Vistoria técnica especializada</p>
                  <p className="text-sm text-text-900/60">
                    Análise completa e detalhada
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-600 mt-2"></div>
                <div>
                  <p className="font-medium mb-1 text-sm">Proposta personalizada</p>
                  <p className="text-sm text-text-900/60">
                    Solução específica para sua necessidade
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 p-6 md:p-8 border border-text-900/10 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-micro uppercase tracking-wider text-text-900/60 mb-3">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-0 py-3 border-0 border-b border-text-900/20 bg-transparent text-text-900 placeholder:text-text-900/30 focus:outline-none focus:border-green-600 transition-colors"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-micro uppercase tracking-wider text-text-900/60 mb-3">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-0 py-3 border-0 border-b border-text-900/20 bg-transparent text-text-900 placeholder:text-text-900/30 focus:outline-none focus:border-green-600 transition-colors"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-micro uppercase tracking-wider text-text-900/60 mb-3">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full px-0 py-3 border-0 border-b border-text-900/20 bg-transparent text-text-900 placeholder:text-text-900/30 focus:outline-none focus:border-green-600 transition-colors"
                  placeholder="(11) 99999-9999"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-micro uppercase tracking-wider text-text-900/60 mb-3">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows="4"
                  className="w-full px-0 py-3 border-0 border-b border-text-900/20 bg-transparent text-text-900 placeholder:text-text-900/30 focus:outline-none focus:border-green-600 transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Consultoria'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
