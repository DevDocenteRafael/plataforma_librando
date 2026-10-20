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
  { title: 'Família', category: 'cotidiano', description: 'Converse sobre a sua família.' },
  { title: 'Amigo(a)', category: 'cotidiano', description: 'Um sinal para falar sobre amizade.' },
  { title: 'Hoje', category: 'cotidiano', description: 'Localize uma conversa no dia de hoje.' },
  { title: 'Amanhã', category: 'cotidiano', description: 'Combine alguma coisa para o dia seguinte.' },
  { title: 'Onde fica?', category: 'cotidiano', description: 'Pergunte onde está um lugar ou objeto.' },
  { title: 'Feliz', category: 'emocoes', description: 'Aprenda a expressar alegria em Libras.' },
  { title: 'Triste', category: 'emocoes', description: 'Fale sobre como está se sentindo.' },
  { title: 'Tudo certo', category: 'emocoes', description: 'Uma expressão para dizer que está tudo bem.' },
  { title: 'Saudade', category: 'emocoes', description: 'Converse sobre sentir falta de alguém.' },
  { title: 'Celular', category: 'tecnologia', description: 'Fale sobre telefone celular e comunicação.' },
  { title: 'Computador', category: 'tecnologia', description: 'Aprenda o sinal de computador.' },
  { title: 'Internet', category: 'tecnologia', description: 'Converse sobre acesso à internet.' },
  { title: 'E-mail', category: 'tecnologia', description: 'Fale sobre mensagens por e-mail.' },
  { title: 'Senha', category: 'tecnologia', description: 'Use o sinal ao falar de senhas e acesso.' },
  { title: 'Aplicativo', category: 'tecnologia', description: 'Converse sobre aplicativos no celular.' },
  { title: 'Médico(a)', category: 'saude', description: 'Converse sobre atendimento médico.' },
  { title: 'Hospital', category: 'saude', description: 'Fale sobre hospitais e atendimento.' },
  { title: 'Dor', category: 'saude', description: 'Comunique que está sentindo dor.' },
  { title: 'Remédio', category: 'saude', description: 'Fale sobre medicamentos e cuidados.' },
  { title: 'Saúde', category: 'saude', description: 'Converse sobre saúde e bem-estar.' },
  { title: 'Consulta', category: 'saude', description: 'Fale sobre uma consulta ou atendimento.' },
  { title: 'Escola', category: 'educacao', description: 'Converse sobre escola e aprendizagem.' },
  { title: 'Aprender', category: 'educacao', description: 'Fale sobre aprender coisas novas.' },
  { title: 'Professor(a)', category: 'educacao', description: 'Fale sobre professores e educação.' },
  { title: 'Estudar', category: 'educacao', description: 'Converse sobre estudo e aprendizagem.' },
  { title: 'Livro', category: 'educacao', description: 'Fale sobre livros e leitura.' },
  { title: 'Universidade', category: 'educacao', description: 'Converse sobre ensino superior.' },
  { title: 'Água', category: 'alimentacao', description: 'Um sinal útil para pedir água.' },
  { title: 'Comida', category: 'alimentacao', description: 'Fale sobre comida e refeições.' },
  { title: 'Café', category: 'alimentacao', description: 'Converse sobre café e bebidas.' },
  { title: 'Pão', category: 'alimentacao', description: 'Aprenda um sinal relacionado a alimentos.' },
  { title: 'Fruta', category: 'alimentacao', description: 'Fale sobre frutas e alimentação.' },
  { title: 'Almoço', category: 'alimentacao', description: 'Converse sobre a refeição do meio do dia.' },
  { title: 'Ônibus', category: 'transporte', description: 'Fale sobre transporte público.' },
  { title: 'Carro', category: 'transporte', description: 'Converse sobre carros e deslocamentos.' },
  { title: 'Bicicleta', category: 'transporte', description: 'Fale sobre bicicleta e mobilidade.' },
  { title: 'Metrô', category: 'transporte', description: 'Converse sobre transporte sobre trilhos.' },
  { title: 'Rua', category: 'transporte', description: 'Fale sobre ruas e caminhos.' },
  { title: 'Trabalho', category: 'trabalho', description: 'Fale sobre trabalho e profissão.' },
  { title: 'Profissão', category: 'trabalho', description: 'Converse sobre ocupações e carreira.' },
  { title: 'Reunião', category: 'trabalho', description: 'Fale sobre reuniões no trabalho.' },
  { title: 'Escritório', category: 'trabalho', description: 'Converse sobre o ambiente de trabalho.' },
];

const youtubeVideoIds = {
  'Bom dia': 'vcxT4j9QjJU',
  'Boa tarde': 'uut5Fhiqk08',
  'Boa noite': 'iP95LXct_aw',
  'Olá': 'y0sfAnvxY8s',
  'Tudo bem?': '8f_hrn6EHhE',
  'Como você está?': 'XEaQnV4LnR8',
  'Prazer em conhecer': 'gTuUJll9U_I',
  'Até logo': 'hKtpY2lPk6E',
  'Tchau': 'XH9p1e9UuMM',
  'Por favor': '-8g9LCo5lRA',
  'Obrigado(a)': 's73yj4lSf94',
  'Com licença': 'pMxXGaVaP9U',
  'Desculpa': '9k79Y9o3Xw0',
  'Qual é o seu nome?': '0-StCSjqt_0',
  'Meu nome é...': 'UqEHluZllJs',
  'Você pode repetir?': 'xO_eFolzl4k',
  'Sim': '4_gsOiAvvoI',
  'Não': '7tGVlbFm_sU',
  'Você pode me ajudar?': 'RDeRh4EK2ug',
  'Água': 'TAw3TDqto8w',
  'Comida': '6-oBzlqnkb0',
  'Banheiro': '9wJx-50SVZo',
  'Casa': 'GEGS6Exwy7Y',
  'Família': 'i0OHj_FS69Q',
  'Amigo(a)': 'oIQ97AHEakg',
  'Hoje': 'oh7p6_Q1JEk',
  'Amanhã': 'M61ZOGGjtSQ',
  'Onde fica?': 'sVGn8oelNw4',
  'Feliz': 'iTZyCEDbopo',
  'Triste': 'pmYSePvG4OM',
  'Tudo certo': '9zS7NlvFpCU',
  'Saudade': 'I2I5eHr1sx4',
  'Celular': 'DRwGx7OWJn8',
  'Computador': 'KFN62eO5K9I',
  'Internet': 'gLnMBjaEnqs',
  'E-mail': 'bL8IDnsGaCA',
  'Senha': 'yKbVsDyziDI',
  'Aplicativo': 'XgzrxtUQTfM',
  'Médico(a)': 'EGGlC2UD2fs',
  'Hospital': 'pjkf5UBjuHQ',
  'Dor': 'MjIHxtTQKEw',
  'Remédio': 'dH9UOVRDAz0',
  'Saúde': 'Pt3X-3WR0ng',
  'Consulta': 'LF-pct8Z6NY',
  'Escola': 'iA_E605MVmM',
  'Aprender': 'lAJdptl9fFk',
  'Professor(a)': 'vpPMi-zhkC4',
  'Estudar': 'zHk9LpXwfEA',
  'Livro': 'rdsMq_r_lsY',
  'Universidade': 'BdGVxo6Nmos',
  'Café': 'cW3vpuecfH8',
  'Pão': 'd-LNs31SDr8',
  'Fruta': '8822cCKR4CA',
  'Almoço': '3c84Adv2xgE',
  'Ônibus': 'bX5mpMIg6YE',
  'Carro': 'qFryM7DRuGE',
  'Bicicleta': '0qwIoxGGJek',
  'Metrô': '4PL-Cp89m6E',
  'Rua': '1ee6KRVrErA',
  'Trabalho': 'gBPdaHlnZrU',
  'Profissão': 'zTcWqoFwt40',
  'Reunião': '_CVdvS_KZoc',
  'Escritório': 'Sn49n_eAHRg',
};

videos.forEach((video) => {
  video.youtubeId = youtubeVideoIds[video.title];
  if (!video.youtubeId) throw new Error(`Nenhum vídeo do YouTube foi definido para "${video.title}".`);
});

const categoryNames = {
  cumprimentos: 'Cumprimentos',
  cortesia: 'Cortesia',
  conversa: 'Conversação',
  cotidiano: 'Cotidiano',
  emocoes: 'Emoções',
  tecnologia: 'Tecnologia',
  saude: 'Saúde',
  educacao: 'Educação',
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  trabalho: 'Trabalho',
};

let activePlayback = null;
let expandedPlayback = null;
const videoBackdrop = document.createElement('div');
videoBackdrop.className = 'video-modal-backdrop';
videoBackdrop.hidden = true;
videoBackdrop.setAttribute('aria-hidden', 'true');
document.body.append(videoBackdrop);

function closeExpandedVideo() {
  if (!expandedPlayback) return;
  const playback = expandedPlayback;
  playback.card.classList.remove('video-card--expanded');
  playback.card.removeAttribute('role');
  playback.card.removeAttribute('aria-modal');
  playback.card.removeAttribute('aria-label');
  playback.expandButton.textContent = 'Ampliar vídeo';
  playback.expandButton.setAttribute('aria-label', `Ampliar vídeo de ${playback.title}`);
  playback.expandButton.setAttribute('aria-expanded', 'false');
  playback.coverExpandButton.setAttribute('aria-expanded', 'false');
  playback.frameExpandButton.setAttribute('aria-expanded', 'false');
  videoBackdrop.hidden = true;
  document.body.classList.remove('video-modal-open');
  expandedPlayback = null;
  playback.expandButton.focus();
}

function expandPlayback(playback) {
  if (expandedPlayback === playback) return;
  if (expandedPlayback) closeExpandedVideo();
  playback.card.classList.add('video-card--expanded');
  playback.card.setAttribute('role', 'dialog');
  playback.card.setAttribute('aria-modal', 'true');
  playback.card.setAttribute('aria-label', `Vídeo ampliado: ${playback.title} em Libras`);
  playback.expandButton.textContent = 'Reduzir vídeo';
  playback.expandButton.setAttribute('aria-label', `Reduzir vídeo de ${playback.title}`);
  playback.expandButton.setAttribute('aria-expanded', 'true');
  playback.coverExpandButton.setAttribute('aria-expanded', 'true');
  playback.frameExpandButton.setAttribute('aria-expanded', 'true');
  videoBackdrop.hidden = false;
  document.body.classList.add('video-modal-open');
  expandedPlayback = playback;
  playback.expandButton.focus();
}

function stopActivePlayback() {
  if (!activePlayback) return;
  if (expandedPlayback === activePlayback) closeExpandedVideo();
  activePlayback.frame.remove();
  activePlayback.player.hidden = true;
  activePlayback.cover.hidden = false;
  activePlayback = null;
}

videoBackdrop.addEventListener('click', closeExpandedVideo);

document.addEventListener('keydown', (event) => {
  if (!expandedPlayback) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeExpandedVideo();
    return;
  }
  if (event.key !== 'Tab') return;

  const focusableElements = [...expandedPlayback.card.querySelectorAll('a[href], button:not(:disabled)')];
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

document.addEventListener('focusin', (event) => {
  if (expandedPlayback && !expandedPlayback.card.contains(event.target)) {
    expandedPlayback.expandButton.focus();
  }
});

// Build cards with safe text nodes and a direct YouTube player for each expression.
function createVideoCard(video, index) {
  const card = document.createElement('article');
  card.className = 'video-card';
  card.id = `video-card-${index + 1}`;
  const cover = document.createElement('div');
  cover.className = `video-cover cover-${video.category}`;

  const poster = document.createElement('img');
  poster.className = 'video-poster';
  poster.src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
  poster.alt = '';
  poster.loading = 'lazy';
  poster.decoding = 'async';
  poster.addEventListener('error', () => poster.remove(), { once: true });

  const number = document.createElement('span');
  number.className = 'cover-number';
  number.setAttribute('aria-hidden', 'true');
  number.textContent = String(index + 1).padStart(2, '0');

  const title = document.createElement('span');
  title.className = 'cover-word';
  title.textContent = video.title;

  const previewExpandButton = document.createElement('button');
  previewExpandButton.className = 'video-preview-expand';
  previewExpandButton.type = 'button';
  previewExpandButton.setAttribute('aria-controls', card.id);
  previewExpandButton.setAttribute('aria-expanded', 'false');
  previewExpandButton.setAttribute('aria-label', `Reproduzir ${video.title} em tamanho ampliado`);
  const previewExpandLabel = document.createElement('span');
  previewExpandLabel.setAttribute('aria-hidden', 'true');
  previewExpandLabel.textContent = '⛶ Ampliar';
  previewExpandButton.append(previewExpandLabel);

  const playButton = document.createElement('button');
  playButton.className = 'play-button';
  playButton.type = 'button';
  playButton.dataset.playVideo = '';
  playButton.setAttribute('aria-label', `Reproduzir ${video.title} em Libras nesta página`);
  playButton.textContent = '▶';

  const youtubeLabel = document.createElement('span');
  youtubeLabel.className = 'youtube-label';
  const youtubeLink = document.createElement('a');
  youtubeLink.href = `https://www.youtube.com/watch?v=${video.youtubeId}`;
  youtubeLink.target = '_blank';
  youtubeLink.rel = 'noopener noreferrer';
  const youtubeIcon = document.createElement('span');
  youtubeIcon.setAttribute('aria-hidden', 'true');
  youtubeIcon.textContent = '▶';
  youtubeLink.append(youtubeIcon, ' Abrir no YouTube');
  youtubeLabel.append(youtubeLink);
  cover.append(poster, number, title, previewExpandButton, playButton, youtubeLabel);

  const player = document.createElement('div');
  player.className = 'video-player';
  player.hidden = true;
  const frame = document.createElement('div');
  frame.className = 'video-player-frame';
  const frameExpandButton = document.createElement('button');
  frameExpandButton.className = 'video-frame-expand';
  frameExpandButton.type = 'button';
  frameExpandButton.setAttribute('aria-controls', card.id);
  frameExpandButton.setAttribute('aria-expanded', 'false');
  frameExpandButton.setAttribute('aria-label', `Ampliar vídeo de ${video.title}`);
  frameExpandButton.textContent = '⛶';
  frameExpandButton.addEventListener('click', () => {
    if (activePlayback?.frame === frame) expandPlayback(activePlayback);
  });
  frame.append(frameExpandButton);
  const controls = document.createElement('div');
  controls.className = 'video-player-controls';
  const sourceLink = document.createElement('a');
  sourceLink.className = 'video-source-link';
  sourceLink.href = youtubeLink.href;
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';
  sourceLink.textContent = 'Assistir no YouTube ↗';
  const expandButton = document.createElement('button');
  expandButton.className = 'video-expand-button';
  expandButton.type = 'button';
  expandButton.setAttribute('aria-controls', card.id);
  expandButton.setAttribute('aria-expanded', 'false');
  expandButton.setAttribute('aria-label', `Ampliar vídeo de ${video.title}`);
  expandButton.textContent = 'Ampliar vídeo';
  expandButton.addEventListener('click', () => {
    if (!activePlayback || activePlayback.frame !== frame) return;
    if (expandedPlayback === activePlayback) {
      closeExpandedVideo();
      return;
    }
    expandPlayback(activePlayback);
  });
  const stopButton = document.createElement('button');
  stopButton.className = 'video-stop-button';
  stopButton.type = 'button';
  stopButton.textContent = 'Parar vídeo';
  stopButton.addEventListener('click', stopActivePlayback);
  controls.append(sourceLink, expandButton, stopButton);
  player.append(frame, controls);

  function startPlayback(expand = false) {
    stopActivePlayback();
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&rel=0`;
    iframe.title = `${video.title} em Libras`;
    iframe.loading = 'eager';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.replaceChildren(iframe, frameExpandButton);
    cover.hidden = true;
    player.hidden = false;
    activePlayback = {
      card,
      cover,
      player,
      frame,
      controls,
      expandButton,
      coverExpandButton: previewExpandButton,
      frameExpandButton,
      title: video.title,
    };
    if (expand) expandPlayback(activePlayback);
  }

  playButton.addEventListener('click', () => startPlayback());
  previewExpandButton.addEventListener('click', () => startPlayback(true));

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
  card.append(cover, player, info);
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

    stopActivePlayback();
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
