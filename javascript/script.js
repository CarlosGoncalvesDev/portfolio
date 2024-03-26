// Seleciona o cabeçalho
const header = document.querySelector('.header');

// Adiciona um evento de rolagem para a janela
window.addEventListener('scroll', function() {
    // Verifica se a página foi rolada para baixo
    if (window.scrollY > 0) {
        // Adiciona a classe 'hidden' ao cabeçalho
        header.classList.add('hidden');
    } else {
        // Remove a classe 'hidden' do cabeçalho
        header.classList.remove('hidden');
    }
});

// Seleciona todos os links do cabeçalho
const links = document.querySelectorAll('.navbar a');

// Adiciona um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', function() {
        // Adiciona a classe 'hidden' ao cabeçalho quando um link é clicado
        header.classList.add('hidden');
    });
});

// Seleciona todas as seções
const sections = document.querySelectorAll('section');

// Adiciona um evento de clique para cada seção
sections.forEach(section => {
    section.addEventListener('click', function() {
        // Adiciona a classe 'hidden' ao cabeçalho quando uma seção é clicada
        header.classList.add('hidden');
    });
});
