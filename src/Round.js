const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
    constructor(deck) {
    //    this.currentCard = undefined || deck.;
    };
    returnCurrentCard() {
        return this.currentCard;
    }
};

module.exports = Turn;
module.exports = Card;
module.exports = Deck;
module.exports = Round;