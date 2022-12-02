const Card = require("./Card")

class Turn{
    constructor(playerGuess, newCard){
        this.playerGuess = playerGuess
        this.newCard = newCard
        this.correct = false
    }
    
    returnGuess(){
        return this.playerGuess
    }

    returnCard(){
        return this.newCard
    }

    evaluateGuess(){
       if(this.newCard.correctAnswer === this.playerGuess) {
        this.correct = true
       }
       else{
        return false
       }
            
    }

    giveFeedback(){
        if(this.correct){
            return 'great job!'
        }
        else{
            return 'incorrect!'
        }
    }
}

    module.exports = Turn