class Turn {
    constructor(guess, card){
        //properties
        this.guess = guess;
        this.card = card;
    }
    //methods
    returnGuess(){
        return this.guess;
    }
    returnCard(){
        return this.card;
    }
    evaluateGuess(){
        if (this.guess === this.card.correctAnswer) {
            //this.guessStatus = true;
            return true;
        } else {
            //this.guessStatus = false;
            return false;
        }
    }
    giveFeedback(bool){
        if(bool){
            return "correct!"
        } else {
            return "incorrect!"
        }
    }

}

module.exports = Turn;