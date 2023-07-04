
function createDeck(cards) {
  return {
    cards: cards
  }
}

function countCards(deck) {
  return deck.cards.length 
}

module.exports = {
  createDeck,
  countCards
}