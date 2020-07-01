const data = require('./data');
// const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');


class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start = (cards) => {
    const pile = [];
    cards.forEach(card => pile.push(this.createCard(card)));   
    this.newRound(pile);
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound)
  }
  
  createCard = (card) => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer); 
  }
  
  newRound = (cards) =>  {
    this.deck = new Deck(cards); 
    this.currentRound = new Round(this.deck)
  }
}

module.exports = Game;