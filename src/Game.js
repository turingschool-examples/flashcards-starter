const data = require('./data');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start(questions) {
    // console.log(prototypeQuestions);
    let cardList = questions.map(card =>
      new Card(
        card['id'],
        card['question'],
        card['answers'],
        card['correctAnswer']
      ));
      const deck = new Deck(cardList);
      this.currentRound = new Round(deck);
      this.printMessage(deck, this.currentRound);
      this.printQuestion(this.currentRound);

  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
