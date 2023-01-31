class Turn {
    constructor(guess, card){
        this.guess = guess;
        this.cardObject = card
    }

    returnGuess(){
        return this.guess  
    }
}

module.exports = Turn;