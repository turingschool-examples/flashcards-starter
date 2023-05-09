function createDeck(cards){
    let deck = []
    cards.map(card => deck.push(card))
    return deck
};

function countCards(deck){
    const numOfCards = deck.length
    return numOfCards
};

module.exports={
    createDeck,
    countCards
};
