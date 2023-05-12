function createDeck(cards) {
  let deck = {
    cards: cards
  }
  return deck;
}

function countCards(deck) {
  // console.log(deck.cards.length);
  return deck.cards.length;
}

module.exports = { 
  createDeck,
  countCards
};