# NWL Agents

Projeto desenvolvido durante o evento **Next Level Week (NLW)** da **Rocketseat**, focado em criar uma aplicação de salas interativas utilizando tecnologias modernas do ecossistema React.

## 🚀 Tecnologias

- **React 19** - Framework para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **TailwindCSS v4** - Framework CSS utility-first
- **React Query (TanStack Query)** - Gerenciamento de estado servidor
- **React Router DOM** - Roteamento para SPAs
- **ShadCN UI** - Componentes acessíveis e customizáveis
- **Biome** - Linter e formatter moderno

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── ui/             # Componentes de interface (ShadCN)
├── pages/              # Páginas da aplicação
├── lib/                # Utilitários e configurações
└── app.tsx             # Configuração de rotas e providers
```

## 🎯 Padrões e Arquitetura

- **Component-Based Architecture** - Estrutura modular com componentes reutilizáveis
- **Custom Hooks** - Lógica personalizada com React Query
- **CSS-in-JS** - Estilização com TailwindCSS e class variants
- **Type Safety** - TypeScript em toda aplicação
- **Client-Side Routing** - Navegação SPA com React Router

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd web
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
# Configure a URL da API backend (padrão: http://localhost:3000)
```

4. **Execute o projeto em desenvolvimento**

```bash
npm run dev
```

5. **Build para produção**

```bash
npm run build
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção

## 📋 Funcionalidades

- ✅ Listagem de salas disponíveis
- ✅ Navegação entre salas
- ✅ Interface responsiva e moderna
- ✅ Gerenciamento de estado com React Query

---

Desenvolvido com ❤️ durante o **NLW Agents** da [Rocketseat](https://rocketseat.com.br)
