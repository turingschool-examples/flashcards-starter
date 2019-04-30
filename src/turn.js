class Turn {
    constructor(card, guess) {
        this.card = card;
        this.guess = guess;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        console.log("card, as object: ", this.card);
        return this.card;
        //return this.card with id, question, guess, all answers
    }

    evaluateGuess() {
        console.log('evaluate for match:', (this.guess === card.correctAnswer ? true : false))
        return this.guess === this.card.correctAnswer ? true : false;
        //ternary returns Boolean if this.guess === this.card
    }

    giveFeedback() {
        return this.guess === this.card.correctAnswer ? 'correct!' : 'incorrect!';
        //conditional/ternary returns either ‘incorrect!’ or ‘correct!’
    }

}

module.exports = Turn;