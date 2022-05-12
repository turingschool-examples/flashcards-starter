const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns];
      }

    takeTurn(guess) {
        const currentCard = this.returnCurrentCard();
        const turn = new Turn(guess, currentCard);
        this.turns += 1;
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(currentCard.id);
        }
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        const cardCount = this.deck.countCards();
        const correctGuesses = cardCount - this.incorrectGuesses.length;
        const percentCorrect = Math.round((correctGuesses/cardCount) * 100);
        return percentCorrect;
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
                             
}

module.exports = Round;     