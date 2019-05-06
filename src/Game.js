const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = 1;
  }

// Puts Cards in a Deck
// Creates a new Round using the Deck
  start() {
    for (let i = 0; i < 4; i++) {
      let cards = [];
      const card = new Card(id, question, answers, correctAnswer);
      cards.push(card);
    }
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