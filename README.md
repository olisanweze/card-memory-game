## Simple Card Memory Game

Welcome to the Memory Card Game! This is a simple web-based game where players 
match pairs of cards with the same icons. This provides step-by-step 
instructions on how to set up and run the game locally.

### How to Play

When the game starts, you will see a grid of facedown cards.
* Click on a card to reveal its icon.
* Click on another card to reveal its icon.
* If the icons on the two cards match, they will remain face-up.
* If the icons don't match, the cards will flip back face-down.
* Continue flipping pairs of cards until all pairs are matched.

### Demo

Click [here](https://olisanweze.github.io/card-memory-game/) to play.


![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Development Process

The following is a breakdown of the various JavaScript functions that make this 
simple card memory game possible.

### 1. Shuffle Function

This is a basic function that performs the following:
* It takes an array as an input and shuffles the elements randomly.
* It iterates through the array.
* For each element, it generates a random index within the array and swaps the 
  current element with the randomly selected one.

```javascript
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
```

### 2. Create Card Function

This function creates the card icon. It performs the following:
* It creates a new div element to represent the card.
* It adds the "card" class to the card element.
* It sets the inner HTML of the card to create the front and back faces of the 
  card using Font Awesome icons.
* It adds a click event listener to the card element, so when the card is 
  clicked, the flipCard function is called.
* Finally, it returns the created card element.

```javascript
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
```

### 3. Flip Card Function

This function handles the logic when a card is picked, and it performs the 
following:
* It first checks if the board is locked or if the clicked card is the same as 
  the first card. If either condition is true, it returns and does nothing.
* If it's the first card clicked, it adds the 'flipped' class to show the card 
  and assigns it to the firstCard variable.
* If it's the second card clicked, it adds the 'flipped' class to show the card 
  and assigns it to the secondCard variable.
* Finally, it calls the checkForMatch function to compare the icons on the two 
  flipped cards.

```javascript
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
```

### 4. Check for Match Function

This function is called after the player flips two cards to check if they 
match. It performs the following:
* It compares the class names of the icons on the front faces of the first and 
  second cards.
* If the class names match, it calls the disableCards function to disable 
  further interaction with the matched cards.
* If the class names don't match, it calls the unflipCards function to flip the 
  cards back face-down.

```javascript
function checkForMatch() {
    let isMatch = firstCard.querySelector(".card-front i").className === 
    secondCard.querySelector(".card-front i").className;
    
    if (isMatch) {
      disableCards();
      return;
    }
  
    unflipCards();
}
```

### Credits

This project uses Font Awesome Icons.
