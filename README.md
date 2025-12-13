# 📚 Ionic Vercel App - Harry Potter Books

Aplicação mobile híbrida desenvolvida com **Ionic 7 + Angular** que consome a API pública de livros de Harry Potter. O projeto permite visualizar livros aleatórios da série, explorar seus detalhes e salvar favoritos localmente.

## 🎯 Objetivo

Projeto acadêmico desenvolvido para a disciplina de **Códigos de Alta Performance – Mobile**, focando em:

- Consumo de API REST com HttpClient
- Navegação entre páginas no Ionic
- Gerenciamento de estado entre telas
- Persistência local com localStorage
- Publicação no Vercel
- Versionamento com Git e GitHub

## 🛠️ Tecnologias Utilizadas

- **Ionic Framework**: 8.0.0
- **Angular**: 20.0.0
- **Node.js**: 20.19.6
- **Ionic CLI**: 7.2.0
- **TypeScript**: 5.9.0
- **RxJS**: 7.8.0
- **Capacitor**: 8.0.0

## 🌐 API Utilizada

**Potter API** by Fedeperin
- Endpoint: `https://potterapi-fedeperin.vercel.app/en/books/random`
- Documentação: [GitHub - fedeperin/potterapi](https://github.com/fedeperin/potterapi)

A API retorna dados sobre os livros de Harry Potter, incluindo capa, título, data de publicação, número de páginas e descrição.

## ✨ Funcionalidades

### 📖 Tela Inicial (Home)
- Exibe um livro aleatório da série Harry Potter
- Mostra a capa do livro com animações interativas
- Exibe o título no formato: "Livro # - TITULO"
- Ao clicar na capa, navega para os detalhes do livro
- Recarrega um novo livro aleatório ao retornar da tela de detalhes
- Botão de acesso rápido aos favoritos no header

### 📝 Tela de Detalhes
- Exibe todas as informações do livro selecionado:
  - Capa em alta qualidade
  - Título original em inglês
  - Data de publicação
  - Número de páginas
  - Descrição completa
- **Botão "Favoritar"**: Adiciona o livro aos favoritos com feedback visual (alerta)
- **Botão "Voltar"**: Retorna à tela inicial e carrega um novo livro aleatório

### ⭐ Tela de Favoritos
- Lista todos os livros salvos como favoritos
- Exibe miniatura da capa, título e número do livro
- Permite remover livros da lista
- Ao clicar em um livro, abre seus detalhes
- Mensagem amigável quando não há favoritos salvos
- Persistência dos dados usando localStorage

## 🎨 Design e Tema

O projeto utiliza um **tema inspirado no universo Harry Potter**, com:

- **Cores principais**:
  - Roxo profundo (`#5b21b6`) - Remetendo à magia
  - Dourado elegante (`#d4af37`) - Inspirado em Gryffindor
- **Efeitos visuais**:
  - Gradientes mágicos no background
  - Sombras e bordas douradas nos cards
  - Animações suaves de hover e transição
  - Ícones do Ionicons para melhor UX

## 📂 Estrutura do Projeto

```
ionic_vercel_app/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/          # Tela inicial com livro aleatório
│   │   │   ├── details/       # Detalhes do livro
│   │   │   └── favorites/     # Lista de favoritos
│   │   ├── services/
│   │   │   ├── hp.service.ts       # Serviço de consumo da API
│   │   │   └── favorites.service.ts # Gerenciamento de favoritos
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/               # Recursos estáticos
│   ├── theme/                # Variáveis de tema customizado
│   ├── global.scss           # Estilos globais
│   └── index.html
├── vercel.json               # Configuração de deploy no Vercel
├── package.json
├── ionic.config.json
├── angular.json
└── README.md
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 20.19.6)
- npm ou yarn
- Ionic CLI (versão 7.2.0)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jsantana-dev/ionic_vercel_app.git
cd ionic_vercel_app
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
ionic serve
```

ou

```bash
npm start
```

4. Acesse no navegador:
```
http://localhost:8100
```

## 🏗️ Build para Produção

Para gerar o build de produção:

```bash
ionic build --prod
```

ou

```bash
npm run build
```

Os arquivos compilados estarão na pasta `www/`.

## 📱 Screenshots

### Tela Inicial - Home
![Tela Home](./screenshots/home.png)
*Página inicial exibindo um livro aleatório de Harry Potter com design mágico*

### Tela de Detalhes
![Tela Detalhes](./screenshots/details.png)
*Detalhes completos do livro com opções de favoritar e voltar*

### Tela de Favoritos
![Tela Favoritos](./screenshots/favorites.png)
*Lista de livros favoritos salvos localmente com opção de remover*

## 📦 Persistência de Dados

O projeto utiliza **localStorage** do navegador para persistir os livros favoritos. Os dados são salvos no formato JSON e permanecem disponíveis mesmo após fechar o aplicativo.

**Chave de armazenamento**: `favoriteBooks`

## 🌍 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel através do arquivo `vercel.json`.

**Link da aplicação**: [Adicione aqui o link do seu Vercel]

### Como fazer deploy:

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Execute o deploy:
```bash
vercel
```

## 📄 Licença

Este projeto está licenciado sob a **Creative Commons Attribution 4.0 International License (CC BY 4.0)**.

Você é livre para:
- Compartilhar — copiar e redistribuir o material em qualquer meio ou formato
- Adaptar — remixar, transformar e construir sobre o material para qualquer propósito, mesmo comercialmente

Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Autor

**[Jamylle da Silva Santana]**

Projeto desenvolvido como atividade avaliativa da disciplina de Códigos de Alta Performance – Mobile.

**Professor**: João Ferreira

## 🤝 Contribuições

Este é um projeto acadêmico individual. Contribuições externas não são aceitas conforme regras da atividade.

## 📞 Contato

Para dúvidas ou sugestões:
- GitHub: jsantana-dev (https://github.com/jsantana-dev)
- Email: milysnap@gmail.com

---

⚡ Desenvolvido com Ionic + Angular | 🪄 Tema inspirado no universo Harry Potter.