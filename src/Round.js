const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Round{
    constructor(deck){
        // this.deck = deck;
        this.currentCard = deck.currentCard;
        console.log(this.currentCard, 2)
    }
    returnCurrentCard(){
        console.log(currentCard, 2)
        return this.currentCard;
    }
};



//object that takes in responses
//object that records these guesses ^^
// also, (as well as if they are correct or incorrect) ^^
//The currentCard === first Card in the Deck 
// (the array of Cards) at the start of the Round





module.exports = Round;