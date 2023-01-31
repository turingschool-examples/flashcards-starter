
var correct

class Turn {
    constructor(guess, card) {
        this.guess = guess
        this.card = card
    }

    returnGuess() {
        return this.guess
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if(guess === card.correctAnswer) {
            correct = true
        } else {
            correct = false
        }
    }

    giveFeedback() {
        if(correct) {
            return "Correct"
        } else {
            return "Incorrect"
        }
    }
}
