const Turn = require('./Turn')

class Round {
    
    constructor(deck) {
        this.deck = deck;
        this.incorrectGuesses = [];
        this.countTurn = 0;
        this.currentCard = deck.cards[0];
    }
    
    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess, card) {
        const turn = new Turn(guess, this.currentCard())
        this.countTurn++
        if(!turn.evaluateGuess) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.currentCard = this.deck.cards[this.countTurn]
        return turn.giveFeedback()
    }

    correctPercent() {
        var correctPencent = ((this.turnsCounter-this.incorrectGuesses.length))/(this.turnsCounter) * 100
        return correctPencent
    }

    endRound() {
        var endMessage = `**Round over!**You answered ${this.correctPercent()}% of the questions correctly!`
        console.log(endMessage)
        return
    }
}