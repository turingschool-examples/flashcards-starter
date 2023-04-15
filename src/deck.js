function createDeck(cards) {
  return {
    cards
  };
}

function countCards(deck) {
  return deck.cards.length;
}

module.exports = { createDeck, countCards };