const cards = document.querySelectorAll('.card');

function flipCard(){
    this.classList.add('flip');
}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
})