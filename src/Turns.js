const Card = require("./Card")

class Turn{
    constructor(playerGuess, newCard){
        this.playerGuess = playerGuess
        this.newCard = newCard
        this.correct = false
    }
    
    returnGuess(){
        return playerGuess
    }

    returnCard(){
        return this.newCard
    }

    evaluateGuess(){
       if(Card.correctAnswer === this.playerGuess) {
        this.correct = true
       }
            
    }

    giveFeedback(){
        if (this.correct){
            
        }
        else{
            return 'incorrect!'
        }
    }
}

    module.exports = Turn