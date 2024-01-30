function createDeck(cardsArray) {
    let deck = [];
    cardsArray.forEach((card) => {
        // console.log(deck.includes(card))
        if (!deck.includes(card)) {
            deck.push(card)
        };
    });
    return deck
};

module.exports = {
    createDeck,
    // countCards,
}