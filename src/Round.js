const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.deckCards.shift();
  }

  takeTurn(userGuess, card) {
    const turn = new Turn(userGuess, card);
    this.turns++;
    this.returnCurrentCard();
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id);
    }
    turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correct = (this.turns - this.incorrectGuesses.length);
    const percentCorrect = ((correct / this.turns) * 100);
    return Math.round(percentCorrect);
  }

  endRound() {
    return `**Round over!**You answered ${this.calculatePercentCorrect()}%
     of the questions correctly!`
  }
}


module.exports = Round;