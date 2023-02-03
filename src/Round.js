const Turn = require("../src/Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = deck.cards[this.turns]
    }

    returnCurrentCard() {
       return this.currentCard

    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)
        this.turns ++;
        this.currentCard = this.deck.cards[this.turns];
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards.id)
        }
        return turn.givesFeedback()
    }

    calculatePercentCorrect() {
        return (this.turns - this.incorrectGuesses.length)/100
    }

    endRound() {
        console.log(`**Round over!** You answered ${this.calculatePercentCorrect} correctly!`)
    }
}


module.exports = Round