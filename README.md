# ByeCupim - Site Premium de Engenharia de Proteção

Site institucional premium para a ByeCupim, empresa com 25 anos de experiência em proteção contra cupins e pragas. Design focado em minimalismo de luxo, branding sofisticado e posicionamento de autoridade.

## 🎨 Conceito de Design

- **Minimalismo de Luxo**: >50% de espaço negativo, foco em qualidade vs. quantidade
- **Tipografia Editorial**: Hierarquia exagerada com fontes serif (Playfair Display) para títulos
- **Paleta Orgânica**: Tons de creme/bege, azul navy profundo, preto carvão
- **Sistema de Espaçamento**: Grid de 8 pontos para consistência premium
- **Animações Sutis**: Micro-interações para "Tactile Maximalism"

## 🚀 Tecnologias

- **React 19** - Biblioteca UI
- **Vite 7** - Build tool e dev server
- **React Router DOM 7** - Navegação SPA
- **Tailwind CSS 4** - Sistema de design utilitário
- **Radix UI** - Componentes acessíveis headless
- **React Hook Form + Zod** - Gerenciamento e validação de formulários
- **Lucide React** - Ícones minimalistas lineares

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🏗️ Estrutura do Projeto

```
byecupim0/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navigation.jsx   # Menu overlay full-screen
│   │   ├── Footer.jsx       # Rodapé robusto
│   │   ├── Hero.jsx         # Seção hero com tipografia colossal
│   │   ├── GuaranteeSeal.jsx # Selo de garantia com animação
│   │   ├── CaseStudies.jsx  # Portfólio de projetos
│   │   └── ContactForm.jsx  # Formulário minimalista validado
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.jsx         # Página inicial
│   │   ├── Sistema.jsx      # Sistema ByeCupim
│   │   ├── Empresa.jsx      # História e valores
│   │   ├── TiposCupins.jsx  # Educacional sobre cupins
│   │   └── Contato.jsx      # Página de contato
│   ├── layouts/
│   │   └── Layout.jsx       # Layout principal com Nav/Footer
│   ├── styles/
│   │   └── index.css        # Estilos globais e Tailwind
│   ├── App.jsx              # Configuração de rotas
│   └── main.jsx             # Entry point
├── tailwind.config.js       # Configuração do design system
├── vite.config.js           # Configuração do Vite
├── CLAUDE.md                # Documentação para Claude Code
└── README.md                # Este arquivo
```

## 🎯 Características Principais

### Design System
- **Cores**: Paleta premium (cream, navy, charcoal, olive, terracotta)
- **Tipografia**: Playfair Display (display) + Montserrat (body)
- **Espaçamento**: Sistema de 8 pontos (8px, 16px, 24px, 32px...)
- **Grid**: Sistema de 24 colunas para layouts quebrados elegantes

### Componentes Principais

#### Navigation
- Menu hamburger elegante
- Overlay full-screen com animação fade-in
- Tipografia editorial grande
- Links com hover suave

#### Hero Section
- Tipografia colossal (até 8rem)
- Micro-texto para propostas de valor
- CTAs sutis (não agressivos)
- Animações escalonadas

#### Guarantee Seal
- Animação subtle-pulse
- Design circular premium
- Hover com scale transform
- Lista de benefícios com ícones

#### Case Studies
- Grid de projetos de referência
- Cards com hover elevação
- Estatísticas de impacto
- Foco em clientes corporativos/premium

#### Contact Form
- Validação com Zod schema
- Campos minimalistas (border-bottom only)
- Estados de loading
- Feedback visual sutil

## 🌐 Navegação

- `/` - Home (Hero + Case Studies + Seal + Form)
- `/empresa` - História, valores e marcos históricos
- `/sistema` - Metodologia técnica e especificações
- `/tipos-cupins` - Educacional sobre tipos de cupins
- `/contato` - Formulário e informações de contato

## 🎨 Paleta de Cores

```css
cream-50:    #fafaf8
cream-100:   #f5f5dc
navy-900:    #0f3460
navy-950:    #0a2342
charcoal-900: #1a1a2e
charcoal-950: #121220
olive-500:   #6b7f5e
terracotta-400: #c9a88a
```

## 📱 Responsividade

- **Mobile-first**: Design otimizado para mobile desde o início
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch targets**: Mínimo de 44x44px para elementos clicáveis
- **Tipografia fluida**: clamp() para escalas responsivas automáticas

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (localhost:5173)
npm run build    # Build de produção (dist/)
npm run preview  # Preview da build
npm run lint     # ESLint
```

## 📄 Licença

Propriedade da ByeCupim. Todos os direitos reservados.

---

**Desenvolvido com foco em excelência de design e experiência premium** ✨
