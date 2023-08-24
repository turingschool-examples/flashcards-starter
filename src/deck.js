const createDeck = cards => {
  let deck = {
    cards: cards,
  };
  return deck;
};

const countCards = deck => {
  return deck.cards.length;
};

module.exports = {
  createDeck,
  countCards,
};
