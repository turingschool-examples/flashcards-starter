const createDeck = deck => ({cards: deck});

const countCards = deck => deck.cards.length;

module.exports = {
  createDeck,
  countCards
};