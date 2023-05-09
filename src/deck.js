function createDeck(cards) {
  let deck = []
  cards.forEach(card => {
    deck.push(card)    
  })
  return deck
}

function countCards(deck) {
  return deck.length
}

module.exports = { createDeck, countCards }