const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.turns = 0;
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.currentTurn;
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        this.currentTurn = new Turn(guess, this.currentCard);
        this.turns++
        this.currentCard = this.deck.cards.find(card => card.id === this.turns);
        this.currentTurn.evaluateGuess();
        return this.currentTurn.giveFeedback();
    }
}

module.exports = Round;