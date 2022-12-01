const Turn = require('./Turn')
class Round {
    constructor(deck) {
        this.deck = deck
        this.turnCount = 0
        this.currentCard = deck.cards[this.turnCount]
        this.incorrectGuesses = []
    }
    returnCurrentCard() {
        return this.currentCard
    }
    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard)
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.turnCount++
        this.currentCard = this.deck.cards[this.turnCount]
        return turn.giveFeedback()
    }
    calculatePercentCorrect() {
        return ((this.turnCount-this.incorrectGuesses.length)/this.turnCount)*100
    }
    endRound() {
        const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        console.log(endMessage)
        return endMessage
    }
}
module.exports = Round