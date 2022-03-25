const Turn = require('../src/Turn')

class Round {
    constructor(deck) {
        this.currentDeck = deck
        this.currentCard;
        this.turns = 0
        this.incorrectGuesses = []
        this.currentTurn;
    }
    returnCurrentCard() {
        return this.currentDeck.cards[this.turns]
    }
    takeTurn(userGuess) {
        this.currentCard = this.currentDeck.cards[this.turns]
        this.currentTurn = new Turn(userGuess, this.returnCurrentCard())

        if (userGuess !== this.returnCurrentCard().correctAnswer) {
            this.incorrectGuesses.push(this.currentDeck.cards[this.turns].id)
        }

        this.turns++;
        
        return this.currentTurn.giveFeedback();
    }
    calculatePercentCorrect() {
        return Math.round(100 - this.incorrectGuesses.length/this.currentDeck.cards.length * 100)
    }
    endRound() {
        console.log(`**Round over!** You answered <${this.calculatePercentCorrect()}>% of the questions correctly!`)
    }
}


module.exports = Round;     


