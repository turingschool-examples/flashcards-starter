const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor(deck) {
    this.currentRound = undefined;
    this.deck = deck
  }
  start() {
    const cards = this.createCards(prototypeQuestions);
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion();
  }
  createCards(questions) {
    let cards = [];
    for (let i = 0; i < questions.length; i++) {
    cards.push(new Card(questions[i]));
  }

  return cards;
  }
 
  countCards() {
    return this.deck.length;
  }

  printMessage(deck, round) {
    if (deck) {
      console.log(`Welcome to FlashCards! You are playing with ${this.countCards()} cards.
      -----------------------------------------------------------------------`)
    } else {
      console.log('Deck is not defined');
    }
  }
  
  printQuestion(round) {
      util.main(round);
  }
}
// const game = new Game();
// game.start();
// console.log(game.currentRound);


const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


module.exports = Game;