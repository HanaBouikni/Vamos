document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.voyages-grid');
    const cardTemplate = grid.innerHTML;
    // Crée 8 cartes supplémentaires pour avoir 9 cartes au total
    for (let i = 0; i < 8; i++) {
        grid.innerHTML += cardTemplate;
    }
});
function createVoyageCard(voyage) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'voyage-card';
    
    cardDiv.innerHTML = `
        <a href="#" class="destination_link">
            <img src="${voyage.image1}" alt="${voyage.Destination}" class="destination_img">
            <div class="destination_text">
                <div class="destination_header_group">
                    <h3 class="destination_title">${voyage.Destination}</h3>
                </div>
                <div class="icon_group">
                    <div class="building_rating">
                        <img src="../imageVamos/resort.png" alt="hotel" class="hotel-icon">
                        <span>${voyage.note_hotel}</span>
                    </div>
                    <div class="options_icons">
                        ${voyage.billet_avion ? '<img src="../imageVamos/billets-davion.png" alt="ticket" class="ticket">' : ''}
                        ${voyage.Transport ? '<img src="../imageVamos/bus.png" alt="transport" class="transport">' : ''}
                        ${voyage.visa ? '<img src="../imageVamos/billets-davion.png" alt="ticket" class="ticket">' : ''}
                        ${voyage.activities ? '<img src="../imageVamos/bus.png" alt="transport" class="transport">' : ''}
                    </div>
                </div>
            </div>
        </a>
    `;
    
    return cardDiv;
}