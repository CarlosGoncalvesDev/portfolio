// Script para alternar o menu em dispositivos móveis
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// Alterna a classe 'active' no menu ao clicar no ícone
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Script para marcar o link ativo
const navLinks = document.querySelectorAll(".navbar a");

// Função para definir o item ativo
function setActiveLink() {
  navLinks.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
}

// Adiciona evento de clique em cada link do menu
navLinks.forEach((link) => {
  link.addEventListener("click", setActiveLink);
});

// Função para voltar ao estado "Home" ao clicar no logo
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  navLinks.forEach((link) => link.classList.remove("active"));
  const homeLink = document.querySelector('.navbar a[href="#home"]');
  if (homeLink) homeLink.classList.add("active");
});

// Carousel
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// Função para mostrar o item atual
function showCurrentItem() {
  carouselItems.forEach((item, index) => {
    item.classList.remove("active"); // Remove a classe 'active' de todos os itens
    if (index === currentIndex) {
      item.classList.add("active"); // Adiciona a classe 'active' ao item atual
    }
  });
}

// Função para ir para o próximo item
function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length; // Avança para o próximo índice
  showCurrentItem(); // Atualiza a exibição do carousel
}

// Função para ir para o item anterior
function prevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Retrocede para o índice anterior
  showCurrentItem(); // Atualiza a exibição do carousel
}

// Adiciona eventos aos botões do carousel
document.getElementById("nextBtn").addEventListener("click", nextItem);
document.getElementById("prevBtn").addEventListener("click", prevItem);

// Opcional: adicionar rotação automática
setInterval(nextItem, 5000); // Troca de item a cada 5 segundos

// Observando seções para marcar o link ativo no menu
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.6, // Percentual da seção visível na tela
};

// Função para verificar qual seção está visível
function handleIntersection(entries) {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.navbar a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  });
}

// Usar IntersectionObserver para observar as seções
const observer = new IntersectionObserver(handleIntersection, options);
sections.forEach((section) => observer.observe(section));
