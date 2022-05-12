const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.cards;
    this.currentRound;
  };

  start() {
      this.cards = prototypeQuestions.map((card) => {
        return new Card(card.id, card.question, card.answers, card.correctAnswer)
      });

      const deck = new Deck(this.cards)
      this.printMessage(deck);
      this.currentRound = new Round(deck)
      this.printQuestion(this.currentRound)
      return this.cards 
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };
}

module.exports = Game;