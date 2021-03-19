const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  // eslint-disable-next-line no-unused-vars
  printMessage(deck, round) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! 
    You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(question => 
      new Card(
        question.id, 
        question.question, 
        question.answers, 
        question.correctAnswer)
    );
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound ++;
    this.printMessage(deck, round);
    this.printQuestion(round);
    
  }
}

module.exports = Game;