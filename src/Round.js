const Turn = require("./Turn");

class Round {
    
    constructor(deck) {
        this.deck = deck.cards
        this.turns = 0
        this.turn = {}
        this.incorrectGuesses = []
        this.currentGuess = ''
    };

    returnCurrentCard() {
        return this.deck[this.turns]
    };
    
    takeTurn(guess) {
        this.turn = new Turn(guess, this.returnCurrentCard())
        this.turns += 1
        this.currentGuess = guess
        if(guess === this.turn.card.correctAnswer) {
            return 'correct!'
        } else {
            this.incorrectGuesses.push(guess)
            return 'incorrect!'
        }
    }

    calculatePercentCorrect() {
       return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100)
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }

}

module.exports = Round;