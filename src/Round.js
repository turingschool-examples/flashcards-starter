const Turn = require("./Turns")

class Round{
    constructor(newTurn){
        this.newTurn = newTurn
        this.incorrectGuesses = []
        this.turnCount = 0

    }
    // method that returns the current card being played
    returnCurrentCard(){
        return Turn.newCard

    } 
    
    //method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
    takeTurn(){
        this.turnCount += 1
        Turn.evaluateGuess()
        Turn.giveFeedback()
        if(Turn.correct === false){
            this.incorrectGuesses.push(Turn.newCard.id)
        }
        
    }
    
    //method that calculates and returns the percentage of correct guesses
    calculatePercentCorrect(){
        winCount = this.turnCount - this.incorrectGuesses.length
        return (winCount / this.turnCount) * 100 
    }


}

module.exports = Round