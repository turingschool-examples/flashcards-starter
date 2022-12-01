const { prototype } = require("mocha");
const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCardCount = 0;
        this.currentCard = deck.cardDeck[this.currentCardCount]
    }
    returnCurrentCard() {
        this.currentCard = this.deck.cardDeck[this.currentCardCount];
        return this.currentCard;
    }
    takeTurn(guess) {
        this.returnCurrentCard();
        let newTurn = new Turn(guess, this.currentCard);
        if(!newTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard);
        };
        this.turns ++;
        this.currentCardCount ++;
        return newTurn.giveFeedback();
    }
}

module.exports = Round;


