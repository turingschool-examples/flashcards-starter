const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const card1 = new Card(prototypeQuestions[0].id, prototypeQuestions[0].question, prototypeQuestions[0].answers, prototypeQuestions[0].correctAnswer);
    const card2 = new Card(prototypeQuestions[1].id, prototypeQuestions[1].question, prototypeQuestions[1].answers, prototypeQuestions[1].correctAnswer);
    const card3 = new Card(prototypeQuestions[2].id, prototypeQuestions[2].question, prototypeQuestions[2].answers, prototypeQuestions[2].correctAnswer);
    const card4 = new Card(prototypeQuestions[3].id, prototypeQuestions[3].question, prototypeQuestions[3].answers, prototypeQuestions[3].correctAnswer);
    const card5 = new Card(prototypeQuestions[4].id, prototypeQuestions[4].question, prototypeQuestions[4].answers, prototypeQuestions[4].correctAnswer);
    const card6 = new Card(prototypeQuestions[5].id, prototypeQuestions[5].question, prototypeQuestions[5].answers, prototypeQuestions[5].correctAnswer);
    const card7 = new Card(prototypeQuestions[6].id, prototypeQuestions[6].question, prototypeQuestions[6].answers, prototypeQuestions[6].correctAnswer);
    const card8 = new Card(prototypeQuestions[7].id, prototypeQuestions[7].question, prototypeQuestions[7].answers, prototypeQuestions[7].correctAnswer);
    const card9 = new Card(prototypeQuestions[8].id, prototypeQuestions[8].question, prototypeQuestions[8].answers, prototypeQuestions[8].correctAnswer);
    const card10 = new Card(prototypeQuestions[9].id, prototypeQuestions[9].question, prototypeQuestions[9].answers, prototypeQuestions[9].correctAnswer);
    const deck = new Deck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;