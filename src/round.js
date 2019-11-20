class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.turns = 0;
    this.turn = turn;
    this.incorrectGuess = [];
  }

  takeTurn(turn) {
    this.turns++;
    if (turn.evaluateGuess()) {
      turn.giveFeedback();
    } else {
      this.incorrectGuess.push(turn.guess);
    }
    return this.turns;
  }

  //  takeTurn: method that updates turns count,
  //  evaluates guesses, gives feedback,
  //  and stores ids of incorrect guesses

  returnCurrentCard() {
    for(var i = 0; i < this.deck.cards.length; i++) {
      return this.deck.cards[i];
    }
  }
}

module.exports = Round;
