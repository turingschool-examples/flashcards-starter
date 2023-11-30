function createDeck(cards) {
    return {
      cards,
      numberOfCards: cards.length
    };
  }
module.exports = {
    createDeck
}