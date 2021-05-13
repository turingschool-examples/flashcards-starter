const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');
const Turn = require('./Turn');

class Game {
  constructor(round) {
    this.currentRound = round;
    this.cards = [];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  createCard(id, question, answers, correctAnswer) {
    const card = new Card(id, question, answers, correctAnswer);
    return card;
  }

  start() {
    for (let i =0; i < prototypeQuestions.length; i++) {

      let newCardArray = [];
      
      const {id, question, answers, correctAnswer} = prototypeQuestions[i];

      const newCard = this.createCard(id, question, answers, correctAnswer);

      newCardArray.push(newCard);
    }

    let deck = new Deck(prototypeQuestions);
    let round = new Round(deck);
    this.currentRound = round;
    this.cards = this.currentRound.deck.cards;
  }
}

module.exports = Game;

// npm test test/Game-test.js  