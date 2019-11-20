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


  returnCurrentCard() {
    for(var i = 0; i < this.deck.cards.length; i++) {
      return this.deck.cards[i];
    }
  }
}

module.exports = Round;
