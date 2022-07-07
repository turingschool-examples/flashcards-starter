const chai = require('chai');
const expect = chai.expect;

const Card = require('./Card');

class Deck {
    constructor(deckOfCards) {
        this.cards = deckOfCards;
    };
    countCards() {
       return this.cards.length;
    };
};

module.exports = Card;
module.exports = Deck;