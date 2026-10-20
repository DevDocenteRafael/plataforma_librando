# Librando

Plataforma para descobrir expressões em Libras por meio de vídeos do YouTube. A página inicial destaca nove sinais; o catálogo permite pesquisar, filtrar por categoria e navegar pelas páginas. Não há integração com banco de dados ou serviço de reservas.

## Acessar

https://devdocenterafael.github.io/plataforma_librando/

## Executar localmente

Abra `index.html` no navegador ou use a extensão Live Server no Visual Studio Code. O projeto é estático e não exige instalação de dependências.

## Acessibilidade

As duas páginas oferecem controles para alternar entre os temas claro e escuro e para diminuir, restaurar ou aumentar o tamanho da fonte. As preferências ficam salvas localmente no navegador.

## Comentários no código

Os comentários destacam a organização das páginas, a origem dos dados e o comportamento dos controles compartilhados. Os nomes semânticos das funções, classes e diretórios descrevem as demais responsabilidades.

## Manutenção do conteúdo

As expressões, descrições, categorias e destaques ficam em `assets/js/videos.js`. Os cards encaminham para uma busca da expressão no YouTube; os endereços são gerados no navegador. O layout, as cores, os temas e as adaptações responsivas ficam em `assets/css/librando.css`.

## Estrutura

```text
├── assets/
│   ├── css/
│   │   └── librando.css          # Layout, temas e responsividade
│   ├── images/
│   │   └── librando-logo.png     # Logo recortada, sem fundo branco
│   └── js/
│       ├── accessibility.js      # Tema e tamanho de fonte
│       └── videos.js             # Conteúdo, busca, filtros e paginação
├── pages/
│   └── videos.html               # Catálogo completo
├── index.html                    # Página inicial
└── README.md                     # Documentação
```

O GitHub Pages publica a branch `main` a partir da pasta raiz.
