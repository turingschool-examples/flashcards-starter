function createDeck(card1, card2, card3) {
  let deck = {
    cards: []
  }
  deck.cards.push(card1, card2, card3);
  console.log(deck);
  return deck;
}


module.exports = { 
  createDeck
};