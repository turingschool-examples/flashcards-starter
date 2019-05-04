const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
  }

  start() {
    const card = new Card(prototypeQuestions.map(card => card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(card);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage();
    this.printQuestion();
  }
    
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;