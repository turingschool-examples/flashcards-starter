class Round{
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

}

module.exports = Round;
