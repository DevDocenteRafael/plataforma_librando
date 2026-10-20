# Plataforma Librando

Plataforma web responsiva para apresentar espaços acadêmicos e solicitar reservas. A versão atual permite consultar laboratórios e ambientes da Faculdade Anhanguera, verificar horários e preencher pedidos de agendamento.

> **Estado atual:** o projeto publicado ainda corresponde ao sistema de reservas acadêmicas. A integração com Google Sheets é opcional; sem configurá-la, as reservas de demonstração ficam apenas no armazenamento local do navegador.

## Acessar

O site é publicado pelo GitHub Pages:

https://devdocenterafael.github.io/plataforma_librando/

## Funcionalidades atuais

- Página inicial com apresentação dos espaços acadêmicos.
- Formulário para escolher o ambiente, a data e o horário da reserva.
- Validação dos campos e verificação de conflitos de horário.
- Modo de demonstração local, sem compartilhamento de reservas entre dispositivos.
- Integração opcional com Google Sheets por meio de Google Apps Script.
- Recursos de acessibilidade e layout responsivo.

## Executar localmente

Abra `index.html` no navegador ou use a extensão Live Server do Visual Studio Code. Para testar a solicitação de reserva, acesse **Agendar sala** na página inicial.

## Configurar a integração com Google Sheets

1. Crie uma planilha Google e abra **Extensões > Apps Script**.
2. Copie o conteúdo de `integracao/Code.gs` para o Apps Script.
3. Implante o script como **App da Web** e copie a URL gerada.
4. Preencha a propriedade `googleSheetsUrl` em `scripts/config.js` com essa URL.
5. Atualize a implantação do Apps Script e teste a consulta de disponibilidade e o envio de reservas.

Sem essa configuração, os dados permanecem no navegador que criou a reserva. Se o Apps Script aceitar solicitações públicas, qualquer pessoa que acessar o site poderá enviar pedidos; não compartilhe a planilha publicamente.

## Personalizar os espaços

Os dados dos espaços ficam na lista `rooms` em `scripts/config.js`. Atualize `id`, `name`, `description`, `image` e `imageAlt` conforme necessário. Preserve os IDs se já houver reservas associadas a eles na planilha.

As imagens usadas nos cartões estão na pasta `img/`. Os horários disponíveis atualmente vão das 08h às 22h, em intervalos de uma hora.

## Estrutura do projeto

```text
├── html/agendar.html          # Consulta de horários e formulário de reserva
├── img/                       # Imagens, ilustrações e logotipos
├── integracao/Code.gs         # Integração com Google Sheets
├── scripts/config.js          # Configuração e espaços disponíveis
├── scripts/inicio.js          # Cartões de espaços da página inicial
├── scripts/reservas.js        # Consulta, validação e envio de reservas
├── scripts/script.js          # Tema, fonte e controles de acessibilidade
├── styles/                    # Estilos das páginas e componentes
└── index.html                 # Página inicial
```

## Publicação

O GitHub Pages publica a branch `main` a partir da pasta raiz do repositório. Alterações enviadas para essa branch são usadas na publicação do site.
