const Turn = require('./Turn');

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
    let turn = new Turn(guess, this.deck.cards[this.turns]);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
      console.log(this.incorrectGuesses);
    }

    this.turns++;
    turn.giveFeedback();
    console.log(turn.giveFeedback());
  }

  round.calculatePercentCorrect()
}

module.exports = Round;
