class Turn {
    constructor(playerGuess, card) {
        this.playerGuess = playerGuess
        this.card = card
    }
    returnGuess() {
        return this.playerGuess
    }
    returnCard() {
        return this.card
    }
   
}




module.exports = Turn;