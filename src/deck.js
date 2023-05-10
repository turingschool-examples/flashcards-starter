function createDeck(card1, card2, card3) {
  let deck = {
    cards: []
  }
  deck.cards.push(card1, card2, card3);
  // console.log(deck);
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