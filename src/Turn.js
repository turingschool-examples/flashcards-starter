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

}

module.exports = Turn;