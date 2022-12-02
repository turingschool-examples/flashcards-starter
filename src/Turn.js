class Turn { 
    constructor (guess, card) {
        this.guess = guess
        this.card = card
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {
       return this.card.correctAnswer === this.guess
    }

    giveFeedback() {
        return (this.evaluateGuess() ? 'correct' : 'incorrect')
    }
}

module.exports = Turn