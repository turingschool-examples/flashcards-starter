class Round {
    constructor(guess, currentCard = {}) {
        this.guess = guess;
        this.currentCard = currentCard;
    }
    returnCurrentCard() {
        return this.currentCard;
    }
}

module.exports = Round;