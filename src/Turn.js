class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        console.log(this.card)
        return this.card;
    }
    evaluateGuess() {
        if(this.guess === this.card.correctAnswer) {
        return true;
        } 
        return false;
    }
}


module.exports = Turn;