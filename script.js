// Game state variables
let playerTotal = 0;
let croupierTotal = 0;
let isCardCreated = false;
let canPlay = true;
let drawnCardCount = 0;
let croupierFirstCard, croupierSecondCard;

// DOM elements
const btnHit = document.getElementById("btnHit");
const btnStand = document.getElementById("btnStand");
const firstCardImg = document.getElementById("firstCard");
const secondCardImg = document.getElementById("secondCard");
const croupierFirstImg = document.getElementById("cardCroupier1");
const croupierSecondImg = document.getElementById("cardCroupier2");
const croupierTotalTxt = document.getElementById("totalValueCroupier");
const playerTotalTxt = document.getElementById("totalValue");
const board = document.getElementById("board");

// Game data
let deck = [];
let playerHand = [];
let croupierHand = [];

// Card definitions
const cards = [
    // Hearts
    { id: 1, name: 'Hearts Ace', value: 11, image: 'img/ace_of_hearts.png' },
    { id: 2, name: 'Hearts 2', value: 2, image: 'img/2_of_hearts.png' },
    { id: 3, name: 'Hearts 3', value: 3, image: 'img/3_of_hearts.png' },
    { id: 4, name: 'Hearts 4', value: 4, image: 'img/4_of_hearts.png' },
    { id: 5, name: 'Hearts 5', value: 5, image: 'img/5_of_hearts.png' },
    { id: 6, name: 'Hearts 6', value: 6, image: 'img/6_of_hearts.png' },
    { id: 7, name: 'Hearts 7', value: 7, image: 'img/7_of_hearts.png' },
    { id: 8, name: 'Hearts 8', value: 8, image: 'img/8_of_hearts.png' },
    { id: 9, name: 'Hearts 9', value: 9, image: 'img/9_of_hearts.png' },
    { id: 10, name: 'Hearts 10', value: 10, image: 'img/10_of_hearts.png' },
    { id: 11, name: 'Hearts Jack', value: 10, image: 'img/jack_of_hearts.png' },
    { id: 12, name: 'Hearts Queen', value: 10, image: 'img/queen_of_hearts.png' },
    { id: 13, name: 'Hearts King', value: 10, image: 'img/king_of_hearts.png' },

    // Clubs
    { id: 14, name: 'Clubs Ace', value: 11, image: 'img/ace_of_clubs.png' },
    { id: 15, name: 'Clubs 2', value: 2, image: 'img/2_of_clubs.png' },
    { id: 16, name: 'Clubs 3', value: 3, image: 'img/3_of_clubs.png' },
    { id: 17, name: 'Clubs 4', value: 4, image: 'img/4_of_clubs.png' },
    { id: 18, name: 'Clubs 5', value: 5, image: 'img/5_of_clubs.png' },
    { id: 19, name: 'Clubs 6', value: 6, image: 'img/6_of_clubs.png' },
    { id: 20, name: 'Clubs 7', value: 7, image: 'img/7_of_clubs.png' },
    { id: 21, name: 'Clubs 8', value: 8, image: 'img/8_of_clubs.png' },
    { id: 22, name: 'Clubs 9', value: 9, image: 'img/9_of_clubs.png' },
    { id: 23, name: 'Clubs 10', value: 10, image: 'img/10_of_clubs.png' },
    { id: 24, name: 'Clubs Jack', value: 10, image: 'img/jack_of_clubs.png' },
    { id: 25, name: 'Clubs Queen', value: 10, image: 'img/queen_of_clubs.png' },
    { id: 26, name: 'Clubs King', value: 10, image: 'img/king_of_clubs.png' },

    // Diamonds
    { id: 27, name: 'Diamonds Ace', value: 11, image: 'img/ace_of_diamonds.png' },
    { id: 28, name: 'Diamonds 2', value: 2, image: 'img/2_of_diamonds.png' },
    { id: 29, name: 'Diamonds 3', value: 3, image: 'img/3_of_diamonds.png' },
    { id: 30, name: 'Diamonds 4', value: 4, image: 'img/4_of_diamonds.png' },
    { id: 31, name: 'Diamonds 5', value: 5, image: 'img/5_of_diamonds.png' },
    { id: 32, name: 'Diamonds 6', value: 6, image: 'img/6_of_diamonds.png' },
    { id: 33, name: 'Diamonds 7', value: 7, image: 'img/7_of_diamonds.png' },
    { id: 34, name: 'Diamonds 8', value: 8, image: 'img/8_of_diamonds.png' },
    { id: 35, name: 'Diamonds 9', value: 9, image: 'img/9_of_diamonds.png' },
    { id: 36, name: 'Diamonds 10', value: 10, image: 'img/10_of_diamonds.png' },
    { id: 37, name: 'Diamonds Jack', value: 10, image: 'img/jack_of_diamonds.png' },
    { id: 38, name: 'Diamonds Queen', value: 10, image: 'img/queen_of_diamonds.png' },
    { id: 39, name: 'Diamonds King', value: 10, image: 'img/king_of_diamonds.png' },

    // Spades
    { id: 40, name: 'Spades Ace', value: 11, image: 'img/ace_of_spades.png' },
    { id: 41, name: 'Spades 2', value: 2, image: 'img/2_of_spades.png' },
    { id: 42, name: 'Spades 3', value: 3, image: 'img/3_of_spades.png' },
    { id: 43, name: 'Spades 4', value: 4, image: 'img/4_of_spades.png' },
    { id: 44, name: 'Spades 5', value: 5, image: 'img/5_of_spades.png' },
    { id: 45, name: 'Spades 6', value: 6, image: 'img/6_of_spades.png' },
    { id: 46, name: 'Spades 7', value: 7, image: 'img/7_of_spades.png' },
    { id: 47, name: 'Spades 8', value: 8, image: 'img/8_of_spades.png' },
    { id: 48, name: 'Spades 9', value: 9, image: 'img/9_of_spades.png' },
    { id: 49, name: 'Spades 10', value: 10, image: 'img/10_of_spades.png' },
    { id: 50, name: 'Spades Jack', value: 10, image: 'img/jack_of_spades.png' },
    { id: 51, name: 'Spades Queen', value: 10, image: 'img/queen_of_spades.png' },
    { id: 52, name: 'Spades King', value: 10, image: 'img/king_of_spades.png' },
];

// Draw card from deck function
function drawCardFromDeck() {
    const index = Math.floor(Math.random() * deck.length);
    return deck.splice(index, 1)[0];
}

// Calculate hand total function
function calculateTotal(hand) {
    let total = 0;
    let aces = 0;

    for (let id of hand) {
        const card = cards.find(c => c.id === id);
        if (!card) continue;
        total += card.value;
        if (card.value === 11) aces++;
    }

    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }

    return total;
}

// Start game function
function gamestart() {
    isCardCreated = false;
    deck = [...cards];
    playerHand = [];
    croupierHand = [];
    drawnCardCount = 0;

    // Deal player cards
    const firstCard = drawCardFromDeck();
    const secondCard = drawCardFromDeck();
    playerHand.push(firstCard.id, secondCard.id);
    playerTotal = calculateTotal(playerHand);

    firstCardImg.src = firstCard.image;
    secondCardImg.src = secondCard.image;

    playerTotalTxt.innerText = "You: " + playerTotal;

    // Deal croupier cards
    const croupierCard1 = drawCardFromDeck();
    const croupierCard2 = drawCardFromDeck();
    croupierHand.push(croupierCard1.id, croupierCard2.id);
    croupierFirstCard = croupierCard1.id;
    croupierSecondCard = croupierCard2.id;
    croupierTotal = calculateTotal(croupierHand);

    croupierFirstImg.src = getCardImage(croupierFirstCard);
    croupierTotalTxt.innerText = "Croupier: " + getCardValue(croupierFirstCard) + " + ?";

    canPlay = true;
}

// Get card value function
function getCardValue(id) {
    const card = cards.find(c => c.id === id);
    return card ? card.value : 0;
}

// Get card image function
function getCardImage(id) {
    const card = cards.find(c => c.id === id);
    return card ? card.image : "img/error.png";
}

// Croupier turn function
function croupierTurn() {
    croupierSecondImg.src = getCardImage(croupierSecondCard);

    while (calculateTotal(croupierHand) < 17) {
        const card = drawCardFromDeck();
        croupierHand.push(card.id);
    }

    croupierTotal = calculateTotal(croupierHand);
    croupierTotalTxt.innerText = "Croupier: " + croupierTotal;
}

// Take card function
function takeCard() {
    if (canPlay) {
        const card = drawCardFromDeck();
        playerHand.push(card.id);

        const drawnCardImg = document.createElement("img");
        board.appendChild(drawnCardImg);

        if (drawnCardCount > 0) {
            drawnCardImg.classList.add("cards4", "position-absolute");
        } else {
            drawnCardImg.classList.add("cards3", "position-absolute");
        }

        drawnCardImg.src = card.image;
        drawnCardImg.id = "drawnCard" + drawnCardCount;

        drawnCardCount++;
        playerTotal = calculateTotal(playerHand);
        playerTotalTxt.innerText = "You: " + playerTotal;
        isCardCreated = true;

        if (playerTotal >= 21) {
            canPlay = false;
            setTimeout(() => {
                croupierTurn();
                setTimeout(() => {
                    checkGameResult();
                }, 300);
            }, 700);
        }
    } else {
        alert("Sıra sende değil!");
    }
}

// Stand function
function stand() {
    if (!canPlay) return;

    canPlay = false;
    croupierTurn();

    setTimeout(() => {
        checkGameResult();
    }, 500);
}

// Check game result function
function checkGameResult() {
    if (playerTotal > 21 && croupierTotal <= 21) {
        alert("YOU LOSE");
    } else if (playerTotal > 21 && croupierTotal > 21) {
        alert("BOTH BUST");
    } else if (croupierTotal > 21 && playerTotal <= 21) {
        alert("YOU WIN");
    } else if (playerTotal > croupierTotal) {
        alert("YOU WIN");
    } else if (playerTotal < croupierTotal) {
        alert("YOU LOSE");
    } else {
        alert("DRAW");
    }
    restart();
}

// Restart game function
function restart() {
    if (isCardCreated) {
        for (let i = 0; i < drawnCardCount; i++) {
            document.getElementById("drawnCard" + i).remove();
        }
    }
    croupierSecondImg.src = "img/cardback.png";
    gamestart();
}

// Add event listeners
btnHit.addEventListener("click", takeCard);
btnStand.addEventListener("click", stand);
