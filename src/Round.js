class Round {
    constructor(deck) {
        this.deck = deck
        this.currentCard = deck.cards[0]
        this.turns = 0
        this.incorrectGuesses = []
        this.correctGuesses = []
    }
    returnCurrentCard() {
        return this.currentCard
    }
    takeTurn(turn) {
        this.turns++
        turn.evaluateGuess()
        if(turn.evaluateGuess() === false){
            this.incorrectGuesses.push(this.currentCard.id);
        }
        if(turn.evaluateGuess() === true) {
            this.correctGuesses.push(this.currentCard.id)
        }
        this.deck.cards.splice(0, 1)
        this.currentCard = this.deck.cards[0]
        return turn.giveFeedback()
    }
    calculatePercentCorrect() {
        const totalCards = this.correctGuesses.length + this.incorrectGuesses.length + this.deck.cards.length
        const percentCorrect = this.incorrectGuesses.length / totalCards
        return Math.floor(percentCorrect * 100)
    }
    endRound() {
        return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
}

module.exports = Round;