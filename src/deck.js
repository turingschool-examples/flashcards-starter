const createDeck = cards => {
  let deck = {
    cards: cards,
  };
  // console.log(deck);
  return deck;
};

const countCards = deck => {
  console.log('number of cards', deck.cards.length);
  return deck.cards.length;
};

module.exports = {
  createDeck,
  countCards,
};
