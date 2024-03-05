'use strict';

const icons = [
    "fas fa-sun",
    "fas fa-bicycle",
    "fas fa-bolt",
    "fas fa-bomb",
    "fas fa-cube",
    "fas fa-leaf",
    "fas fa-paper-plane",
    "fas fa-star",
];
  
const gameBoard = document.querySelector(".game-board");
const cards = [...icons, ...icons];
let firstCard, secondCard;
let flippedCards = 0;
let lockBoard = false;
  
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  
function createCard(icon) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"><i class="${icon}"></i></div>
        <div class="card-back"></div>
      </div>`;
    card.addEventListener("click", flipCard);
    return card;
}
  
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.classList.add("flipped");
  
    if (!firstCard) {
      firstCard = this;
      return;
    }
  
    secondCard = this;
    checkForMatch();
}
  
function checkForMatch() {
    let isMatch = firstCard.querySelector(".card-front i").className === 
    secondCard.querySelector(".card-front i").className;
    
    if (isMatch) {
      disableCards();
      return;
    }
  
    unflipCards();
}
  
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  
    resetBoard();
}
  
function unflipCards() {
    lockBoard = true;
  
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
  
      resetBoard();
    }, 1000);
}
  
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}
  
function init() {
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(icon => {
      const card = createCard(icon);
      gameBoard.appendChild(card);
    });
}
  
init();