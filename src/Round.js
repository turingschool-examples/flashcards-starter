const Turn = require("./Turn");

class Round {
    constructor(deck = []) {
        // this.deck = deck.map(card => card);
        this.deck = deck;
        this.turns = 0;
        this.currentCard = {};
        this.incorrectGuesses = [];
        //I need turn passed in to keep track of responses and if it's correct 
        //I need access to the deck array and maybe cards array to keep track of current card
    }

    returnCurrentCard() {
        this.currentCard = this.deck.cards[0]
        return this.deck.cards[0]
        //returns the current card being played ie first card in the deck 
    }

    takeTurn(guess) {
        this.turns++
        const currentTurn = new Turn(guess, this.deck[0]);
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.unshift(currentTurn.card.id)
        }
        if (this.deck.cards.length > 0) {
            this.deck.cards.shift();
        } 
        return currentTurn.giveFeedback();
    }

    calculatePercentCorrect() {
        const amountCorrect = this.deck.cards.length - this.incorrectGuesses.length
        return amountCorrect/this.deck.cards.length * 100
    }

    endRound() {
        return `** Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;