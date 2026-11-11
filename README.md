# OpenBoard — Quadro de Vagas de Tecnologia

> 🚧 **Em desenvolvimento.** Projeto da aula de Front-End (2026), ainda sendo finalizado.

Aplicação front-end de um quadro de vagas para startups de tecnologia, construída com **React**. Simula um job board com login, listagem de vagas, página de detalhe de cada vaga, newsletter e depoimentos.

## Funcionalidades

- Tela de login
- Home com destaque (hero), listagem de vagas, newsletter e depoimentos
- Página de detalhe da vaga (`/vaga/:id`)
- Página 404 personalizada
- Interface dividida em componentes reutilizáveis

## Tecnologias

- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- ESLint

## Como rodar localmente

```bash
git clone https://github.com/filipid43-rgb/vaga-react-quarta.git
cd vaga-react-quarta
npm install
npm run dev
```

## Estrutura do projeto

```
src/
├── components/   # Componentes reutilizáveis
├── data/         # Dados das vagas
├── pages/        # Login, Home, VagaDetalhe, Page404
├── App.jsx       # Rotas da aplicação
└── main.jsx      # Ponto de entrada
```

## Autor

**Filipi** — [GitHub](https://github.com/filipid43-rgb)
