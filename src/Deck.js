class Deck {
  constructor(cards) {
    this.deck = cards;
  }

  countCardsInDeck() {
    const cardCount = this.deck.reduce((acc, cur) => {
      acc += 1;
      return acc;
    }, 0);
    return cardCount;
  }

};




module.exports = Deck;
