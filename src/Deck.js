const Card = require('../src/Card');


class Deck {
    constructor(cardQuantity) {
        this.cardQuantity = cardQuantity;
    }
    countCards(){
        console.log(this.cardQuantity, 2)
        return this.cardQuantity
    }
    // refactor to count cards in cardQuantity using =>
};

//this deck holds all of the cards. 
//this deck has 30 card objects
//this deck should countCards()

//deck.countCards(); // => 3







module.exports = Deck;