const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {

    if(lockBoard) return;

    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return
    }

    secondCard = this;
    hasFlippedCard = false;
    checkCard();
}

function checkCard() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disbleCards();
    } else {
        unflipCard();
    }
}

function disbleCards(){
    firstCard.removeEventListner('click', flipCard);
}

function unflipCard(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockBoard = false;
    }, 1500);

}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
})