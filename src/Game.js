const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor() {
    this.currentRound = {};
    this.deck = {};
    this.cards = [];
  };

  createCard(){
    const newCard = prototypeQuestions.map((card) => {
      new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    this.cards.push(newCard);
    return this.cards[newCard]
  }

  cardToDeck(){
    return this.deck = this.cards
  }

  createRound(){
    const round = new Round(this.deck);
    return this.currentRound = round
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  startGame() {
    this.createRound();
   };
}

module.exports = Game;