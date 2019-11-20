class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.turns = 0;
    this.turn = turn;
    this.incorrectGuess = [];
    this.correctGuess = [];
  }

  takeTurn(turn) {
    this.turns++;
    // turn.evaluateGuess() ? turn.giveFeedback() : this.incorrectGuess.push(turn.guess);
    if (turn.evaluateGuess()) {
      turn.giveFeedback();
      this.correctGuess.push(turn.guess);
    } else {
      this.incorrectGuess.push(turn.guess);
    }
    return this.turns;
  }

  returnCurrentCard() {
    for(var i = 0; i < this.deck.cards.length; i++) {
      return this.deck.cards[i];
    }
  }

  calculatePercentCorrect() {
    return this.correctGuess;
  }
}

module.exports = Round;
