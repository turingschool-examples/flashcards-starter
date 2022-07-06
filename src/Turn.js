class Turn {
    constructor(guess, card){
        this.guess = guess
        this.card = card
    }  

    returnGuess(){
        return this.guess
    }

    returnCard(){
        return this.card
    }

    evaluateGuess(){
        if(this.guess === this.card.correctAnswer){
            return true
        }
    }

    giveFeedback(){
        if(!this.guess){
            return `try again!`
        }
            return `correct!`
    }
}

module.exports = Turn   