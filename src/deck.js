function createDeck(cardsArray) {
    let deck = [];
    cardsArray.forEach((card) => {
        if (!deck.includes(card)) {
            deck.push(card)
        };
    });
    return deck
};

function countCards(deckArray) {
    return deckArray.length
};

module.exports = {
    createDeck,
    countCards,
}