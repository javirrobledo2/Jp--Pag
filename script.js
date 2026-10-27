'use strict';

document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-wrap')) setMenu(false);
});

window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));

const whatsappNumber = '5492612153220';
document.querySelectorAll('[data-service]').forEach((link) => {
  const message = `Hola JP reparaciones, quisiera consultar por ${link.dataset.service}. Mi celular es: `;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
