const Turn = require('./Turn')
class Round {
    constructor(deck) {
        this.deck = deck
        this.turnCount = 0
        this.currentCard = deck.cards[this.turnCount]
        this.incorrectGuesses = []
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
}
module.exports = Round