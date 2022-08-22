const Turn = require('../src/Turn');


class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = []

    }

    returnCurrentCard() {
        this.currentCard = this.deck.cards[this.turns]
        return this.currentCard;
    }

    takeTurn(userGuess) {
        this.turns += 1;
        let turn = new Turn(userGuess, this.currentCard);
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
}           
        this.returnCurrentCard()
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}


module.exports = Round;