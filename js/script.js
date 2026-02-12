const cards = document.querySelectorAll(".card");
const gamestate = document.getElementById("gamestate");
// I looked this up, didn't want to type it all out individually
const resetBtn = document.getElementById("resetButton");

let flippedCards = [];
let matchedCards = [];
let lockBoard = false;

let values = [1,2,3,4,5,6,7,8];
let shuffledValues = [...values, ...values];

// looked up the shuffling, it's called fisher yates
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(shuffledValues);

cards.forEach((card, index) => {
    card.dataset.value = shuffledValues[index];
});

// looked this up too, same thing, didnt want to type all, this seemed better
cards.forEach(card => {
    card.addEventListener("click", function() {
        if (lockBoard) return;
        if (matchedCards.includes(this)) return;
        if (flippedCards.includes(this)) return;

        flipCard(this);
    });
});

resetBtn.addEventListener("click", resetGame);

function flipCard(card) {
    card.src = `images/Card${card.dataset.value}.png`;
    card.alt = `Card ${card.dataset.value}`;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    lockBoard = true;

    let [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        gamestate.textContent = "Nice one!";


        card1.style.opacity = "0.3";
        card2.style.opacity = "0.3";
        // if i want them to disappear i could do 0,
        // but i felt this was better for the game
        // can still see the cards, just clear that they wont be clicked
        

        matchedCards.push(card1, card2);
        
        if (matchedCards.length === cards.length) {
            gamestate.textContent = "You Win!";
        } else {
            setTimeout(() => {
            flippedCards = [];
            lockBoard = false;
            gamestate.textContent = "Choose a pair";
        }, 1000);
        }

    } else {
        gamestate.textContent = "Try again...";
        setTimeout(() => { // thought this would make fun game logic
            card1.src = "images/CardBack.png";
            card2.src = "images/CardBack.png";
            flippedCards = [];
            lockBoard = false;
            gamestate.textContent = "Choose a pair";
        }, 1000);

    }
}

function resetGame() {

    flippedCards = [];
    matchedCards = [];
    lockBoard = false;

    gamestate.textContent = "Choose a pair!";

    let values = [1,2,3,4,5,6,7,8];
    let shuffledValues = [...values, ...values];
    shuffle(shuffledValues);

    cards.forEach((card, index) => {
        card.dataset.value = shuffledValues[index];
        card.src = "images/CardBack.png";
        card.style.opacity = "1";
    });
}
