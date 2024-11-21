// Seleciona todos os links do menu
const navLinks = document.querySelectorAll('.navbar a');

// Seleciona o logo
const logo = document.querySelector('.logo');

// Função para remover a classe 'active' de todos os links e adicionar ao alvo
function setActiveLink(target) {
  navLinks.forEach(nav => nav.classList.remove('active')); // Remove 'active' de todos
  target.classList.add('active'); // Adiciona 'active' ao alvo
}

// Adiciona o evento de clique aos links do menu
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    setActiveLink(this);
  });
});

// Adiciona o evento de clique no logo
logo.addEventListener('click', () => {
  const homeLink = document.querySelector('.navbar a[href="#home"]'); // Seleciona o link 'Home'
  setActiveLink(homeLink); // Define o 'Home' como ativo
});
