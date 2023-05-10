let createDeck = (cards) => {
    var deck = [...cards];
    return deck;
};
  
let totalCards = (deck) => {
    return deck.length;
};
  
module.exports = { 
  createDeck, 
  totalCards 
};

