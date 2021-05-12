const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.currentRound = 0;
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
    // console.log({id, question, answers, correctAnswer})
    const card = new Card(id, question, answers, correctAnswer);
    // console.log(card);
    return card;

  }

  start() {
    const newCardArray = [];

    const randomIndex = Math.floor(Math.random()*4);

////// try map?
// map over prototype questions
// const {id, question, answers, correctAnswer} = prototypeQuestions[i];
// return new deck with cards
// switch let to const

    for (let i = randomIndex; i <= 4; i++) {
      // console.log(prototypeQuestions[i])
      const {id, question, answers, correctAnswer} = prototypeQuestions[i];
      // console.log(id, question, answers, correctAnswer)

      const newCard = this.createCard({id, question, answers, correctAnswer});
      console.log(newCard)

      newCardArray.push(newCard);
    }


    let deck = new Deck(newCardArray);

    let round = new Round(deck);

    this.currentRound++;
    this.cards = round.deck.cards;
  }
}

module.exports = Game;

// npm test test/Game-test.js  