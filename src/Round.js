const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.IncorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard())
        const feedback = turn.giveFeedback();
        if(!turn.evaluateGuess()) {
            this.IncorrectGuesses.push(this.returnCurrentCard().id)
        }
    this.turns += 1;
    return feedback;
    }

    calculatePercentCorrect() {
        return Math.floor(this.correctGuesses()/this.turns * 100);
    }

    correctGuesses() {
        return this.turns - this.IncorrectGuesses.length
    }

    endRound() {
        console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
}


module.exports = Round