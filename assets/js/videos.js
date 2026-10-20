// Centralized video metadata feeds both the featured grid and searchable catalog.
const videos = [
  { title: 'Bom dia', category: 'cumprimentos', description: 'Comece uma conversa desejando um bom dia.', featured: true },
  { title: 'Boa tarde', category: 'cumprimentos', description: 'Aprenda a cumprimentar alguém durante a tarde.', featured: true },
  { title: 'Boa noite', category: 'cumprimentos', description: 'Um cumprimento para o fim do dia ou da noite.', featured: true },
  { title: 'Olá', category: 'cumprimentos', description: 'Um jeito simples de iniciar uma conversa.', featured: true },
  { title: 'Tudo bem?', category: 'cumprimentos', description: 'Pergunte como alguém está.', featured: true },
  { title: 'Como você está?', category: 'cumprimentos', description: 'Demonstre interesse e pergunte como vai.', featured: true },
  { title: 'Prazer em conhecer', category: 'cumprimentos', description: 'Uma expressão para conhecer alguém.', featured: true },
  { title: 'Até logo', category: 'cumprimentos', description: 'Despeça-se e diga que espera rever a pessoa.', featured: true },
  { title: 'Tchau', category: 'cumprimentos', description: 'Um sinal para se despedir.', featured: true },
  { title: 'Por favor', category: 'cortesia', description: 'Use uma expressão gentil ao fazer um pedido.' },
  { title: 'Obrigado(a)', category: 'cortesia', description: 'Agradeça a alguém em Libras.' },
  { title: 'Com licença', category: 'cortesia', description: 'Peça passagem ou atenção com educação.' },
  { title: 'Desculpa', category: 'cortesia', description: 'Aprenda uma forma de pedir desculpas.' },
  { title: 'Qual é o seu nome?', category: 'conversa', description: 'Pergunte o nome da pessoa com quem conversa.' },
  { title: 'Meu nome é...', category: 'conversa', description: 'Apresente-se e conte seu nome.' },
  { title: 'Você pode repetir?', category: 'conversa', description: 'Peça para a pessoa repetir uma informação.' },
  { title: 'Sim', category: 'conversa', description: 'Um sinal curto para responder afirmativamente.' },
  { title: 'Não', category: 'conversa', description: 'Aprenda a responder negativamente.' },
  { title: 'Você pode me ajudar?', category: 'conversa', description: 'Peça ajuda durante uma conversa.' },
  { title: 'Água', category: 'cotidiano', description: 'Um sinal útil para pedir água.' },
  { title: 'Comida', category: 'cotidiano', description: 'Fale sobre comida e refeições.' },
  { title: 'Banheiro', category: 'cotidiano', description: 'Pergunte onde fica o banheiro.' },
  { title: 'Casa', category: 'cotidiano', description: 'Aprenda o sinal relacionado à casa.' },
  { title: 'Escola', category: 'cotidiano', description: 'Converse sobre escola e aprendizagem.' },
  { title: 'Trabalho', category: 'cotidiano', description: 'Fale sobre trabalho e profissão.' },
  { title: 'Família', category: 'cotidiano', description: 'Converse sobre a sua família.' },
  { title: 'Amigo(a)', category: 'cotidiano', description: 'Um sinal para falar sobre amizade.' },
  { title: 'Aprender', category: 'cotidiano', description: 'Fale sobre aprender coisas novas.' },
  { title: 'Hoje', category: 'cotidiano', description: 'Localize uma conversa no dia de hoje.' },
  { title: 'Amanhã', category: 'cotidiano', description: 'Combine alguma coisa para o dia seguinte.' },
  { title: 'Onde fica?', category: 'cotidiano', description: 'Pergunte onde está um lugar ou objeto.' },
  { title: 'Feliz', category: 'emocoes', description: 'Aprenda a expressar alegria em Libras.' },
  { title: 'Triste', category: 'emocoes', description: 'Fale sobre como está se sentindo.' },
  { title: 'Tudo certo', category: 'emocoes', description: 'Uma expressão para dizer que está tudo bem.' },
  { title: 'Saudade', category: 'emocoes', description: 'Converse sobre sentir falta de alguém.' },
];

const categoryNames = {
  cumprimentos: 'Cumprimentos',
  cortesia: 'Cortesia',
  conversa: 'Conversação',
  cotidiano: 'Cotidiano',
  emocoes: 'Emoções',
};

// Build cards with safe text nodes and a YouTube search link for each expression.
function createVideoCard(video, index) {
  const card = document.createElement('article');
  card.className = 'video-card';
  const link = document.createElement('a');
  link.className = `video-cover cover-${video.category}`;
  link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${video.title} em Libras como sinalizar`)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Buscar ${video.title} em Libras no YouTube`);

  const number = document.createElement('span');
  number.className = 'cover-number';
  number.setAttribute('aria-hidden', 'true');
  number.textContent = String(index + 1).padStart(2, '0');

  const title = document.createElement('span');
  title.className = 'cover-word';
  title.setAttribute('aria-hidden', 'true');
  title.textContent = video.title;

  const playButton = document.createElement('span');
  playButton.className = 'play-button';
  playButton.setAttribute('aria-hidden', 'true');
  playButton.textContent = '▶';

  const youtubeLabel = document.createElement('span');
  youtubeLabel.className = 'youtube-label';
  const youtubeIcon = document.createElement('span');
  youtubeIcon.setAttribute('aria-hidden', 'true');
  youtubeIcon.textContent = '▶';
  youtubeLabel.append(youtubeIcon, ' Ver no YouTube');
  link.append(number, title, playButton, youtubeLabel);

  const info = document.createElement('div');
  info.className = 'video-info';
  const category = document.createElement('span');
  category.className = `category-tag tag-${video.category}`;
  category.textContent = categoryNames[video.category];
  const heading = document.createElement('h3');
  heading.textContent = video.title;
  const description = document.createElement('p');
  description.textContent = video.description;
  info.append(category, heading, description);
  card.append(link, info);
  return card;
}

const featuredContainer = document.querySelector('#featured-videos');
if (featuredContainer) {
  videos.filter((video) => video.featured).forEach((video, index) => {
    featuredContainer.append(createVideoCard(video, index));
  });
}

const catalogContainer = document.querySelector('#all-videos');
if (catalogContainer) {
  const searchInput = document.querySelector('#video-search');
  const categoryFilter = document.querySelector('#category-filter');
  const pagination = document.querySelector('#pagination');
  const resultsSummary = document.querySelector('#results-summary');
  const emptyState = document.querySelector('#empty-state');
  const pageSize = 9;
  let currentPage = 1;

  // Apply search and category together before slicing the active page.
  function renderCatalog() {
    const query = searchInput.value.trim().toLocaleLowerCase('pt-BR');
    const category = categoryFilter.value;
    const filteredVideos = videos.filter((video) => {
      const matchesQuery = `${video.title} ${video.description} ${categoryNames[video.category]}`
        .toLocaleLowerCase('pt-BR')
        .includes(query);
      return matchesQuery && (category === 'all' || video.category === category);
    });
    const pageCount = Math.ceil(filteredVideos.length / pageSize);
    currentPage = Math.min(currentPage, Math.max(pageCount, 1));
    const startIndex = (currentPage - 1) * pageSize;
    const pageVideos = filteredVideos.slice(startIndex, startIndex + pageSize);

    catalogContainer.replaceChildren(...pageVideos.map((video, index) =>
      createVideoCard(video, startIndex + index)));
    resultsSummary.textContent = `${filteredVideos.length} ${filteredVideos.length === 1 ? 'sinal encontrado' : 'sinais encontrados'}`;
    emptyState.hidden = filteredVideos.length > 0;
    pagination.replaceChildren();

    if (pageCount < 2) return;

    // Keep pagination controls native so they work with keyboards and screen readers.
    const previous = createPageButton('← Anterior', currentPage - 1, currentPage === 1);
    pagination.append(previous);
    for (let page = 1; page <= pageCount; page += 1) {
      const button = createPageButton(String(page), page, false);
      button.setAttribute('aria-label', `Página ${page}`);
      if (page === currentPage) button.setAttribute('aria-current', 'page');
      pagination.append(button);
    }
    pagination.append(createPageButton('Próxima →', currentPage + 1, currentPage === pageCount));
  }

  function createPageButton(label, page, disabled) {
    const button = document.createElement('button');
    button.className = 'page-button';
    button.type = 'button';
    button.textContent = label;
    button.disabled = disabled;
    button.addEventListener('click', () => {
      currentPage = page;
      renderCatalog();
      document.querySelector('#catalog-title').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return button;
  }

  searchInput.addEventListener('input', () => {
    currentPage = 1;
    renderCatalog();
  });
  categoryFilter.addEventListener('change', () => {
    currentPage = 1;
    renderCatalog();
  });
  renderCatalog();
}
