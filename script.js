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
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
}

// Adiciona evento de clique em cada link do menu
navLinks.forEach((link) => {
  link.addEventListener("click", setActiveLink);
});

// Função para voltar ao estado "Home" ao clicar no logo
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  const homeLink = document.querySelector('.navbar a[href="#home"]');
  homeLink.classList.add("active");
});
