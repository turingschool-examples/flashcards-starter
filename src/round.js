class Round {
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    for(var i = 0; i < this.deck.cards.length; i++) {
      return this.deck.cards[i];
    }
  }
}

module.exports = Round;
