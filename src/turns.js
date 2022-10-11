const Card = require("./Card");

class Turns {
    constructor(guess, cardDetails) {
        this.userGuess = guess;
        this.card = cardDetails;
    }
    returnGuess() {
        return this.userGuess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        if(this.userGuess === this.card['correctAnswer']) {
            return true;
        } else {return false}
    }
    giveFeedback() {
        if(this.userGuess === this.card['correctAnswer']) {
            return 'Correct!';
        } else {return 'Incorrect!'}
    }
}



module.exports = 
Turns, 
Card;
