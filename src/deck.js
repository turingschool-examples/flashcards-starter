function createDeck(cards){
    var deck = [];
    cards.forEach(card => {
    deck.push(card)
    })
    return deck; 
}

 function countCards(deck) {
    var num = deck.length;
    return num; 
 }

module.exports = { createDeck, countCards }

