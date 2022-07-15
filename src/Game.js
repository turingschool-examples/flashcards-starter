const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor(round) {
    this.currentRound = round;
  };

  createCards(){
    const newCards = prototypeQuestions.map((card) => {
     return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    return newCards;
  }

  cardToDeck(){
    const deck = new Deck(this.createCards());
   return deck;
  }

  createRound(){
    const round = new Round(this.cardToDeck());
    this.currentRound = round;
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
    this.printMessage(this.cardToDeck(), this.currentRound);
    this.printQuestion(this.currentRound);
   };
}

module.exports = Game;