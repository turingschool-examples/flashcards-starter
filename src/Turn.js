class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.correct;
    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        if(this.guess === this.card.correctAnswer) {
            this.correct = true;
            return this.correct;
        }
        this.correct = false; 
        return this.correct;
    }
    giveFeedback() {
        console.log(this.correct)
        if(this.correct) {
            return 'correct!';
        }
        return 'incorrect!';
    }

}

module.exports = Turn;