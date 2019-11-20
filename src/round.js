class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.turns = 0;
    this.turn = turn;
  }

  takeTurn(turn) {
    this.turns++;
    return this.turns;
  }

  returnCurrentCard() {
    for(var i = 0; i < this.deck.cards.length; i++) {
      return this.deck.cards[i];
    }
  }
}

module.exports = Round;
