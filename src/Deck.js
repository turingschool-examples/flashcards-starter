const Card = require('../src/Card');


class Deck {
    constructor(cardQuantity) {
        this.cardQuantity = cardQuantity;
    }
    countCards(){
        return this.cardQuantity.length;
    }
   
};








module.exports = Deck;