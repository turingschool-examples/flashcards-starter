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
    return 100 - ((this.incorrectGuesses.length / this.turns) * 100);
  }

  endRound() {
    var percentCorrect = this.calculatePercentCorrect();
    console.log(`**Round Over!** You answered ${percentCorrect}% of the questions correctly!`);
  };

}

module.exports = Round;
