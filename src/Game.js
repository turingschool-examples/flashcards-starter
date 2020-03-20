const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  start() {
    const cards = prototypeQuestions.map(card => card = new Card (card['id'],
      card['question'], card['answers'], card['correctAnswer']));
    const deck = new Deck(cards);
    const currentRound = new Round(deck);
    this.printMessage(deck, currentRound);
    this.printQuestion(currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with
        ${deck.countCards()} cards.--------------------------------------------
        ---------------------------`)
    return 'Welcome to FlashCards! You are playing with ' + `${deck.countCards()}`
  + ' cards.-----------------------------------------------------------------------'
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
