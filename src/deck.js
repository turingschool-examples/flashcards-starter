const createDeck = (cards) => {
  let deck = [...cards];
  return deck;
}

const countCards = (deck) => deck.length

module.exports = {
  createDeck,
  countCards
}