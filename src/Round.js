const data = require("./data");
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
}

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turnCount++;
    const guessEval = turn.evaluateGuess();
    if (guessEval === false) {
      this.incorrectGuesses.push(this.deck[0].id);
      this.deck.shift();
    } else {
      this.deck.shift();
    }
    return turn.giveFeedback();
  }
}

module.exports = Round;
