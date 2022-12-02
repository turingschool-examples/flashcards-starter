const Turn = require("./Turns")

class Round{
    constructor(deck){
        this.deck = deck
        this.incorrectGuesses = []
        this.turnCount = 0
        this.currentTurn
    }
    
    returnCurrentCard(){
        return this.currentTurn.newCard
    } 
    
    takeTurn(newGuess){
        this.turnCount += 1
        this.currentTurn.evaluateGuess()
        this.currentTurn.giveFeedback()
        if(!this.currentTurn.correct){
            this.incorrectGuesses.push(this.currentTurn.newCard.id)
        }
        this.currentCard = this.deck.cards[this.turns]
        this.currentTurn = new Turn(newGuess,this.CurrentCard())
    }
    
    calculatePercentCorrect(){
        winCount = this.turnCount - this.incorrectGuesses.length
        return (winCount / this.turnCount) * 100 
    }
}

module.exports = Round