window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY; // Posição do scroll
    const targetElement = document.querySelector(".navbar"); // Elemento alvo
    const scrollThreshold = 10; // Mínimo de scroll para ativar a classe

    if (scrollPosition > scrollThreshold) {
        targetElement.classList.add("navbar-active"); // Adiciona a classe quando o scroll desce
    } else {
        targetElement.classList.remove("navbar-active"); // Remove a classe quando volta ao topo
    }
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Posição do scroll
  const targetElement = document.querySelector(".btn-topo"); // Elemento alvo
  const scrollThreshold = 20; // Mínimo de scroll para ativar a classe

  if (scrollPosition > scrollThreshold) {
      targetElement.classList.add("btn-topo-ativo"); // Adiciona a classe quando o scroll desce
  } else {
      targetElement.classList.remove("btn-topo-ativo"); // Remove a classe quando volta ao topo
  }
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Posição do scroll
  const targetElement = document.querySelector(".btn-menu-mobile"); // Elemento alvo
  const scrollThreshold = 20; // Mínimo de scroll para ativar a classe

  if (scrollPosition > scrollThreshold) {
      targetElement.classList.add("navbar-ul-active"); // Adiciona a classe quando o scroll desce
  } else {
      targetElement.classList.remove("navbar-ul-active"); // Remove a classe quando volta ao topo
  }
});


const menuMobile = document.querySelector('.menu-mobile')
const btnMobile = document.querySelector('.btn-menu-mobile')

btnMobile.addEventListener('click',function(event) {
  event.preventDefault();  // Impede qualquer ação padrão

  menuMobile.classList.toggle('menu-mobile-ativo')
})




const text = "Desenvolvedor Front-end";
const speed = 100; // Velocidade da digitação (ms)
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    setTimeout(typeWriter, 500); // Pequeno delay para evitar que o texto apareça antes
};

  
  
  document.addEventListener("DOMContentLoaded", function () {
    const sectionAbout = document.querySelector(".about");
    const elementosAbout = document.querySelectorAll(".img-about,.text-about");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            elementosAbout.forEach((el) => el.classList.add("about-active"));
          } else {
           ""
          }
        });
      },
      { threshold: 0.5} // Ativa quando 50% da seção estiver visível
    );
  
    observer.observe(sectionAbout);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const sectionProjeto = document.querySelector('.projects')
    const elementosProjeto = document.querySelectorAll(".title");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.1) {
            elementosProjeto.forEach((el) => el.classList.add("title-ativo"));
          } else {
           ""
          }
        });
      },
      { threshold: 0.1} // Ativa quando 50% da seção estiver visível
    );
  
    observer.observe(sectionProjeto);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const sectionCards = document.querySelector('.projects')
    const elementosCards = document.querySelectorAll(".cards-projects");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.1) {
            elementosCards.forEach((el) => el.classList.add("cards-ativo"));
          } else {
           ""
          }
        });
      },
      { threshold: 0.1} // Ativa quando 50% da seção estiver visível
    );
  
    observer.observe(sectionCards);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const sectionSkills = document.querySelector(".skills");
    const elementosSkills = document.querySelectorAll(".hards-skills,.title-skills");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.1) {
            elementosSkills.forEach((el) => el.classList.add("skills-ativo"));
          } else {
           ""
          }
        });
      },
      { threshold: 0.1} // Ativa quando 50% da seção estiver visível
    );
  
    observer.observe(sectionSkills);
  });

  