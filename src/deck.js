function createDeck(cards) {
    return {
      cards,
      numberOfCards: cards.length
    };
  }
function countCards(deck) {
    return deck.numberOfCards;
}
module.exports = {
    createDeck,
    countCards
}