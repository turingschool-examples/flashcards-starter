function createDeck(cardsArray) {
    let newDeck = [];
    cardsArray.forEach((card) => {
        if (!newDeck.includes(card)) {
            newDeck.push(card)
        };
    });
    return newDeck
};

function countCards(deckArray) {
    return deckArray.length
};

module.exports = {
    createDeck,
    countCards,
};