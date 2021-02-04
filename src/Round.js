const Turn = require("./Turn");

class Round {
    constructor(deck = []) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard = {};
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        this.currentCard = this.deck.cards[0]
        return this.currentCard
    }

    takeTurn(guess) {
        this.turns++
        const currentTurn = new Turn(guess, this.deck.cards[0]);
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.unshift(currentTurn.card.id)
        }
        if (this.deck.cards.length >= 1) {
            this.deck.cards.shift();
            return currentTurn.giveFeedback();
        } else if (this.deck.cards.length = 1) {
            this.endRound()
        }
    }

    calculatePercentCorrect() {
        const amountCorrect = this.turns - this.incorrectGuesses.length;
        return parseInt((amountCorrect/this.turns * 100).toFixed())
    }

    endRound() {
        const percentCorrect = this.calculatePercentCorrect()
        console.log(`** Round over!** You answered ${percentCorrect}% of the questions correctly!`)
    }
}

module.exports = Round;