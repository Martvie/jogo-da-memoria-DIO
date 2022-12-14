const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let firstCardChildren, secondCardChildren
let lockBoard = false;

function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;

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

function disbleCards() {

    hideCard(firstCard)
    hideCard(secondCard)

    firstCard.removeEventListner('click', flipCard());
    secondCard.removeEventListner('click', flipCard());

    resetBoard()
}

function unflipCard() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard, cardChildren] = [null, null, null]
}

(function shuffleCards() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})(); //immediate invocation function


cards.forEach(card => {
    card.addEventListener('click', flipCard)
})

function hideCard(card){
    let cardChildren = card.children;
    cardChildren[0].classList.add('hide');
    card.style.boxShadow = "0px 0px 0px";
}