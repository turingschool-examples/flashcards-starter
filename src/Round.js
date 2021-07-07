class Round {
  constructor(deck) {
    this.deck = deck;
    this.cardCount = 0;
    this.currentCard = this.deck.cards[this.cardCount];
  }

  returnCurrentCard() {
    let current = this.currentCard;
    this.cardCount++;
    return current;
  }

  takeTurn() {

  }


}

module.exports = Round;