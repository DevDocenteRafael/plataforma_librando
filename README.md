# Librando

Librando é uma plataforma de descoberta de expressões em Libras. A página inicial apresenta nove temas para começar; o catálogo permite pesquisar expressões, filtrar por categoria e navegar pelas páginas. Cada card abre uma busca relacionada no YouTube.

## Acessar

https://devdocenterafael.github.io/plataforma_librando/

## Executar localmente

Abra `index.html` no navegador ou use uma extensão como Live Server no Visual Studio Code. O catálogo e os filtros são executados no navegador, sem servidor, conta ou integração de dados.

## Conteúdo

Os temas, descrições, categorias e destaques da página inicial estão definidos em `scripts/videos.js`. Os links dos cards são buscas do YouTube geradas a partir do nome de cada expressão, para que seja possível escolher um vídeo adequado sem fixar um vídeo específico.

## Estrutura

```text
├── img/Logo_Librando.jpg     # Identidade visual da plataforma
├── scripts/videos.js         # Expressões, busca, filtros e paginação
├── styles/librando.css       # Layout responsivo da plataforma
├── index.html                # Página inicial com nove expressões
└── videos.html               # Catálogo de vídeos e filtros
```

## Publicação

O GitHub Pages publica a branch `main` a partir da pasta raiz do repositório.
