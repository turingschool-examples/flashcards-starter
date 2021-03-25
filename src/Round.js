const Turn = require("../src/Turn");

class Round {
  constructor(deck, card) {
    this.deck = deck;
    this.currentCard = card;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.testing = false;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    const currentTurn = new Turn(userGuess, this.currentCard);
    this.turns++;
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards[this.turns];
    return currentTurn.giveFeedback()
  }
  calculatePercentCorrect() {
    const score = Math.round((1 - (this.incorrectGuesses.length / this.turns)) * 100);
    return score;
  }
  endRound() {
    const result = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    if (this.testing) {
      return result;
    } else {
      console.log(result);
    }
  }
}

module.exports = Round;
