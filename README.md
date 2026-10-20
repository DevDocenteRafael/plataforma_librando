# Librando

Plataforma para descobrir expressões em Libras por meio de vídeos públicos do YouTube. A página inicial destaca nove sinais; o catálogo permite pesquisar, filtrar por categorias como tecnologia, saúde, educação, alimentação, transporte e trabalho, e navegar pelas páginas. Cada card mostra uma miniatura do vídeo, permite reproduzi-lo na própria página em tamanho compacto ou ampliado e oferece um link direto para o YouTube. Não há integração com banco de dados ou serviço de reservas.

## Acessar

https://devdocenterafael.github.io/plataforma_librando/

## Executar localmente

O projeto é estático e não exige instalação de dependências. Para reproduzir vídeos incorporados, abra pelo GitHub Pages ou sirva a pasta com a extensão Live Server no Visual Studio Code; a reprodução do YouTube não funciona ao abrir o arquivo diretamente por `file://`.

## Acessibilidade

As duas páginas oferecem um botão **Acessibilidade** com opções para alternar entre os temas claro e escuro e para diminuir, restaurar ou aumentar o tamanho da fonte. O painel pode ser usado por teclado, e as preferências ficam salvas localmente no navegador.

## Comentários no código

Os comentários destacam a organização das páginas, a origem dos dados e o comportamento dos controles compartilhados. Os nomes semânticos das funções, classes e diretórios descrevem as demais responsabilidades.

## Manutenção do conteúdo

As expressões, descrições, categorias, destaques e IDs dos vídeos do YouTube ficam em `assets/js/videos.js`. O layout, as cores, os temas e as adaptações responsivas ficam em `assets/css/librando.css`.

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
