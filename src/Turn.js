

class Turn{
    constructor(guess, card){
        this.guess = guess;
        this.card = card;
    }

    returnGuess = () => this.guess;

    returnCard = () => this.card;

    evaluateGuess = () => {
        if(this.guess === this.card.correctAnswer){
            return true;
        } else {
            return false;
        }
    }

    giveFeedback = () => {
        if(this.guess === this.card.correctAnswer){
            return "correct!";
        } else {
            return "incorrect!";
        }
    }
}

module.exports = Turn;