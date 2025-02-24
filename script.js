const targetElement = document.querySelector('.sobre');


// Função que verifica se o elemento está visível na tela
function onScroll() {
  const rect = targetElement.getBoundingClientRect();
  
  // Verifica se o elemento passou da posição desejada (por exemplo, se está no meio da tela)
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    targetElement.classList.add('show');
    
  } else {
    targetElement.classList.remove('show');
    ;
  }
}

// Adiciona o ouvinte de evento para o scroll
window.addEventListener('scroll', onScroll);


