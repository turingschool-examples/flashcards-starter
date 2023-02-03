class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.answer = this.card.answer;
    }

    returnGuess() {
        return this.guess;
    }
    
    returnCard() {
        return this.card;
    }
    
    isCorrect() {
        return this.card.correctAnswer === this.guess;
      }

    evaluateGuess() {
        if (this.card.correctAnswer === this.guess) {
            return true
        } else {
            return false
        }
    }

    giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
        return 'this is correct!'
    } else {
        return 'this is incorrect!'
    }
    }
}




module.exports = Turn;