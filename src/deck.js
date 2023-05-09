function createDeck(cards) {
  let deck = []
  cards.forEach(card => {
    deck.push(card)    
  })
  return deck
}

function countCards() {
  
}

module.exports = { createDeck, countCards }