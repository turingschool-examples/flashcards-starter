const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard;
        this.incorrectGuesses = [];

    };

    returnCurrentCard() {
        return this.deck.cards[this.turns];
    };

    takeTurn(guess) {
        this.currentCard = this.deck.cards[this.turns];
        let playTurn = new Turn(guess, this.currentCard);
        this.turns++;
        playTurn.evaluateGuess();    

        if(!playTurn.evaluate) {
            this.incorrectGuesses.push(this.currentCard.id);
        };
        return playTurn.giveFeedback();
    };

    calculatePercentCorrect() {
        return Math.round(((this.turns - this.incorrectGuesses.length)/this.turns)*100);
    };
}

module.exports = Round;