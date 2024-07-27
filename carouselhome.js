
const carrossel = document.querySelector('.carrossel');
const carrosselItens = document.querySelectorAll('.carrossel-item');
const carrosselPrev = document.querySelector('.carrossel-prev');
const carrosselNext = document.querySelector('.carrossel-next');
let indiceAtual = 0;

carrosselItens[indiceAtual].classList.add('ativo');

carrosselPrev.addEventListener('click', () => {
  indiceAtual--;
  if (indiceAtual < 0) {
    indiceAtual = carrosselItens.length - 1;
  }
  carrosselItens.forEach((item) => item.classList.remove('ativo'));
  carrosselItens[indiceAtual].classList.add('ativo');
});

carrosselNext.addEventListener('click', () => {
  indiceAtual++;
  if (indiceAtual >= carrosselItens.length) {
    indiceAtual = 0;
  }
  carrosselItens.forEach((item) => item.classList.remove('ativo'));
  carrosselItens[indiceAtual].classList.add('ativo');
});