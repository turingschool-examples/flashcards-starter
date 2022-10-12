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
        
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }

        const feedback = turn.giveFeedback();
        this.currentCard = this.deck.at(this.numOfTurns)
        return feedback;
    }

    calculateScore() {
        return ((this.numOfTurns - this.incorrectGuesses.length) / this.numOfTurns) * 100
    }
}

module.exports = Round;