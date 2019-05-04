const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 1;
  }
  start() {
    const card = new Card(id, question, answers, correctAnswer);
    const deck = new Deck(card);
    const round = new Round(deck);
    updateRound();
    this.printMessage();
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.`)
      this.printQuestion();
  }

  printQuestion(round) {
      util.main(round);
  }

  updateRound(){
    return this.currentRound++
  }
}

module.exports = Game;