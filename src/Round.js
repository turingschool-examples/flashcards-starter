const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    var currentCard = this.returnCurrentCard();
    var turn = new Turn(guess, currentCard);
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100;
  }

}

module.exports = Round;
