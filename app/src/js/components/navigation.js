import outSideClick from './outside-click.js';

export function navigation() {
  const $nav = document.querySelector('[data-bind="navigation"]');
  const $btnMenu = document.querySelector('[data-bind="btnMenu"]');

  $btnMenu.addEventListener('click', () => {
    $nav.classList.toggle('active');
    $btnMenu.classList.toggle('active');
  })

  $btnMenu.addEventListener('click', handleCLick)

  function handleCLick() {
    outSideClick($nav, 'click', () => {
      $nav.classList.remove('active');
      $btnMenu.classList.remove('active');
    })
  }
}
