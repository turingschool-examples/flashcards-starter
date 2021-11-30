class Turn {
    constructor(guess, playedCard) {
        this.guess = guess;
        this.playedCard = playedCard;
    }
    
    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.playedCard;
    }
}



module.exports = Turn;