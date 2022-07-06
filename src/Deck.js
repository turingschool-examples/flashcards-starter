const chai = require('chai');
const expect = chai.expect;

const Card = require('./Card');
// const Turn = require('../src/Turn');
// const Deck = require('./Deck');

class Deck {
    constructor() {
        this.cards = [];
    };
    countCards() {
       return this.cards.length;
    };
};

// module.exports = Turn;
module.exports = Card;
module.exports = Deck;