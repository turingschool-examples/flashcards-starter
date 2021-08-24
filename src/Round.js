const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Round {
  constructor(deck, turns){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard(){
    return this.deck.cardsInDeck[0];
  }
};

module.exports = Round;
