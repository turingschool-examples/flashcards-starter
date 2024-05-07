function createDeck(cards){
    let deck = []
    deck = deck.concat(cards)
    console.log("DECK:", deck)
    return deck
}

function countCards(deck){
    // console.log("DECK:", deck)
    return deck.length
}

module.exports = {
    createDeck,
    countCards
}