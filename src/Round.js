const Turn = require('./Turn')

class Round {
    
    constructor(deck) {
        this.deck = deck
        this.incorrectGuesses = []
        this.countTurn = 0
        this.currentCard = deck.cards[0]
    }
    
    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(gguess) {
        const turn = new Turn(gguess, this.currentCard)
        this.countTurn++
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.currentCard = this.deck.cards[this.countTurn]
        return turn.giveFeedback(turn.evaluateGuess())
    }

    correctPercent() {
        var correctPercent = Math.floor(((this.countTurn-this.incorrectGuesses.length))/(this.countTurn) * 100)
        return correctPercent
    }

    endRound() {
        var endMessage = `**Round over!**You answered ${this.correctPercent()}% of the questions correctly!`
        console.log(endMessage)
        return endMessage
    }
}

module.exports = Round