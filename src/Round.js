const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.currentCard = this.deck[0];
        this.incorrectGuesses = [];
        this.turn;
    }

    returnCurrentCard() {
        return this.currentCard;
    }
    
    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        this.turns ++;
        this.currentCard = this.deck[this.turns];
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(turn.currentCard.id);
        }
        return turn.giveFeedback();
    }
}


module.exports = Round;