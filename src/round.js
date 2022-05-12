const Deck = require('../src/Deck');
// const Turns = require('../src/Turns');

class Round {
constructor(decks) {
    this.deck = decks
    this.turns = 0
}
currentCard() {
    return this.deck.cards[0]
}
takeTurn(guess) {
    return this.turns++
}

}


module.exports = Round;