function createDeck(cards) {
  let deck = []
  cards.forEach(card => {
    deck.push(card)    
  })
  return deck
}

const countCards = (deck) => deck.length

module.exports = { createDeck, countCards }