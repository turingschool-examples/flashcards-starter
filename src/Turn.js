const Card = require("./Card");

class Turn {
    constructor(usersGuess, card) {
        this.guess = usersGuess;
        this.card = card;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {}

    evalutateGuess() {}

    giveFeedback() {}
}

module.exports = Turn;