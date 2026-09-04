/* ═══════════════════════════════════════════════════════════
   ⚙️  CONFIGURAÇÃO — mude só estas duas linhas
   ═══════════════════════════════════════════════════════════ */

const WHATSAPP = '5511949544737';   // DDI + DDD + número, só dígitos
const NOME_LOJA = 'Forno & Afeto';  // (o nome também aparece no index.html)

/* ═══════════════════════════════════════════════════════════
   Daqui pra baixo não precisa mexer
   ═══════════════════════════════════════════════════════════ */

// 1) Monta todos os links de WhatsApp com a mensagem pronta
document.querySelectorAll('[data-wa]').forEach((el) => {
  const msg = el.getAttribute('data-wa') || 'Olá!';
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  el.target = '_blank';
  el.rel = 'noopener';
});

// 2) Mostra o telefone formatado onde faz sentido
function formatarTelefone(num) {
  const d = num.replace(/\D/g, '');
  if (d.length === 13) return `+${d.slice(0,2)} (${d.slice(2,4)}) ${d.slice(4,9)}-${d.slice(9)}`;
  if (d.length === 12) return `+${d.slice(0,2)} (${d.slice(2,4)}) ${d.slice(4,8)}-${d.slice(8)}`;
  return num;
}
const telFormatado = formatarTelefone(WHATSAPP);
const ctaPhone = document.getElementById('ctaPhone');
if (ctaPhone) ctaPhone.textContent = telFormatado;
const footerPhone = document.getElementById('footerPhone');
if (footerPhone) footerPhone.textContent = telFormatado;

// 3) Menu mobile
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const aberto = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(aberto));
    burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// 4) Filtro de categorias
const chips = document.querySelectorAll('.chip');
const blocos = document.querySelectorAll('.cat-block');
const emptyState = document.getElementById('emptyState');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filtro = chip.dataset.filter;

    chips.forEach((c) => {
      const ativo = c === chip;
      c.classList.toggle('is-active', ativo);
      c.setAttribute('aria-selected', String(ativo));
    });

    let visiveis = 0;
    blocos.forEach((bloco) => {
      const mostrar = filtro === 'all' || bloco.dataset.cat === filtro;
      bloco.hidden = !mostrar;
      if (mostrar) visiveis++;
    });

    if (emptyState) emptyState.hidden = visiveis > 0;
  });
});

// 5) Ano no rodapé
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
