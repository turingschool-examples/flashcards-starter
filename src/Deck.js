const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
class Deck {
    constructor(cards) {
        this.cards = cards;
    };
    countCards() {
       return this.cards.length;
    };
};

module.exports = Deck;