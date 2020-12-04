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
        this.removeCard();
        return turn.giveFeedback(guess);
    }

    removeCard() {
        this.deck.splice(0, 1);
    }

    calculatePercentCorrect() {
        let correct = this.turns - this.incorrectGuesses.length;
        let percent = (correct / this.turns) * 100
        let wholeNum = Math.floor(percent)
        return wholeNum;
    }

    endRound() {
        if (this.deck.length === 0) {
            console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
            return (`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
        }
    }
}

module.exports = Round;