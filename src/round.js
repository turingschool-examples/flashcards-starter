const Deck = require('../src/Deck');
// const Turns = require('../src/Turns');

class Round {
constructor(decks) {
    this.deck = decks
}
currentCard() {
    return this.deck.cards[0]
}

}


module.exports = Round;