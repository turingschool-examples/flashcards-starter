const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
    constructor(deck, currentCard) {
    this.currentCard = currentCard;
    this.deck = deck.cards;
    }

    returnCurrentCard() {
        return (this.currentCard = this.deck[0]);
      }
}


module.exports = Round; 