class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;
