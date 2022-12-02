const Turn = require("./Turns")

class Round{
    constructor(){
        this.incorrectGuesses = []
        this.turnCount = 0

    }
    // method that returns the current card being played
    returnCurrentCard(){

    } 
    
    //method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
    takeTurn(){
        this.turnCount += 1
        Turn.evaluateGuess()
        Turn.giveFeedback()
        if(Turn.correct === false){
            this.incorrectGuesses.push(Card.id)
        }
        
    }
    
    //method that calculates and returns the percentage of correct guesses
    calculatePercentCorrect(){
        return this.turnCount / this.incorrectGuesses.length
    }


}

module.exports = Round