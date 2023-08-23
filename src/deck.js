const createDeck = cards => {
  let deck = {
    cards: cards,
  };
  // console.log(deck);
  return deck;
};

const countCards = arrOfCards => {
  return deck.cards.length;
};

module.exports = {
  createDeck,
  countCards,
};
