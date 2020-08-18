class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.returnCurrentCard = () => {
      return this.deck[0];
    }
  }
}
module.exports = Round;