var Turn = require('./turn');


class Round{
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCard = deck.cards[0];
        this.numOfTurns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard)
        this.numOfTurns++;
        turn.evaluateGuess();
        const feedback = turn.giveFeedback();
        this.currentCard = this.deck.at(this.numOfTurns)
        return feedback;
    }
}

module.exports = Round;