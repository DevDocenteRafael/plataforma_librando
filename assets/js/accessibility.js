// Restaura as preferências de apresentação salvas neste navegador.
const savedTheme = localStorage.getItem('librando-theme') || 'light';
const savedFontScale = Number(localStorage.getItem('librando-font-scale')) || 1;
const themeButtons = document.querySelectorAll('[data-theme-toggle]');
const fontButtons = document.querySelectorAll('[data-font-action]');
const fontScaleOutput = document.querySelector('[data-font-scale]');
const accessibilityTrigger = document.querySelector('[data-accessibility-toggle]');
const accessibilityPanel = document.querySelector('#accessibility-panel');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const accessibilityStatus = document.querySelector('[data-accessibility-status]');

// Atualiza as cores e os rótulos do controle de tema em qualquer página.
function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeMeta?.setAttribute('content', isDark ? '#202329' : '#ffffff');

  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
    button.querySelector('.theme-label').textContent = isDark ? 'Modo claro' : 'Modo escuro';
    button.querySelector('.theme-icon').textContent = isDark ? '☼' : '◐';
  });
}

// Limita o ajuste de fonte para manter a navegação e o conteúdo utilizáveis.
function applyFontScale(scale, announce = true) {
  const boundedScale = Math.min(1.3, Math.max(0.9, scale));
  document.documentElement.style.setProperty('--font-scale', boundedScale);
  localStorage.setItem('librando-font-scale', String(boundedScale));
  if (fontScaleOutput) fontScaleOutput.textContent = `${Math.round(boundedScale * 100)}%`;
  fontButtons.forEach((button) => {
    button.disabled = (button.dataset.fontAction === 'increase' && boundedScale >= 1.3)
      || (button.dataset.fontAction === 'decrease' && boundedScale <= 0.9);
  });
  if (announce) {
    if (accessibilityStatus) accessibilityStatus.textContent = `Tamanho da fonte: ${Math.round(boundedScale * 100)} por cento.`;
  }
}

applyTheme(savedTheme);
applyFontScale(savedFontScale, false);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('librando-theme', nextTheme);
    if (accessibilityStatus) {
      accessibilityStatus.textContent = nextTheme === 'dark' ? 'Modo escuro ativado.' : 'Modo claro ativado.';
    }
  });
});

fontButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.fontAction;
    const currentScale = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-scale')) || 1;
    const nextScale = action === 'reset'
      ? 1
      : currentScale + (action === 'increase' ? 0.1 : -0.1);
    applyFontScale(Math.round(nextScale * 10) / 10);
  });
});

accessibilityTrigger.addEventListener('click', () => {
  const isExpanded = accessibilityTrigger.getAttribute('aria-expanded') === 'true';
  accessibilityTrigger.setAttribute('aria-expanded', String(!isExpanded));
  accessibilityPanel.hidden = isExpanded;
});

document.addEventListener('click', (event) => {
  if (!accessibilityPanel.hidden && !event.target.closest('.accessibility-menu')) {
    accessibilityPanel.hidden = true;
    accessibilityTrigger.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !accessibilityPanel.hidden) {
    accessibilityPanel.hidden = true;
    accessibilityTrigger.setAttribute('aria-expanded', 'false');
    accessibilityTrigger.focus();
  }
});
