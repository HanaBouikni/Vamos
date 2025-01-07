document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.voyages-grid');
    const cardTemplate = grid.innerHTML;
    // Crée 8 cartes supplémentaires pour avoir 9 cartes au total
    for (let i = 0; i < 8; i++) {
        grid.innerHTML += cardTemplate;
    }
});