const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');

class Deck {
  constructor(Card, cardArray){
    this.card = Card;
    this.cardArray = cardArray || [];
  }
  countCards(card1,card2){
    this.cardArray.push(card1,card2)
  }
}

module.exports = Deck;