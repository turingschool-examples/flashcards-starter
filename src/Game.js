const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor(round) {
    this.currentRound = round;
    this.cards = [];
  }

  createCard(id, question, answers, correctAnswer) {
    const card = new Card(id, question, answers, correctAnswer);
    return card;
  }

  start() {
    for (let i = 0; i < prototypeQuestions.length; i++) {

      let newCardArray = [];

      // const {id, question, answers, correctAnswer} = prototypeQuestions[i];

      const newCard = this.createCard(
        prototypeQuestions[i].id,
        prototypeQuestions[i].question,
        prototypeQuestions[i].answers,
        prototypeQuestions[i].correctAnswer);

      newCardArray.push(newCard);
    }

    let deck = new Deck(prototypeQuestions);
    let round = new Round(deck);
    this.currentRound = round;
    this.cards = this.currentRound.deck.cards;
    this.printMessage(deck, this.currentRound);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${this.currentRound.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;

// npm test test/Game-test.js  