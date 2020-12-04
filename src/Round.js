const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        let currentCard = this.deck[0];
        return currentCard;
    }

    takeTurn(guess) {
        var turn = new Turn(guess, this.returnCurrentCard());
        this.turns++;
        if (turn.guess !== this.deck[0].correctAnswer) {
            this.incorrectGuesses.push(this.returnCurrentCard().id);
        }
        this.deck.splice(0, 1);
        return turn.giveFeedback(guess);

    }
    calculatePercentCorrect() {
        let correct = this.turns - this.incorrectGuesses.length;
        let percent = (correct / this.turns) * 100
        return percent;
    }
}

module.exports = Round;