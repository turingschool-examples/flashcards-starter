const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor(deck) {
    this.deck = deck;
    this.everyCard = [];
    this.currentRound = new Round(deck);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
  }

  createCards() {
    prototypeQuestions.forEach(card => {
      this.everyCard.push(new Card (card.id, card.question, card.answers, card.correctAnswer));
    })

    //need to iterate over protype data and push into
    //the all cards array
  }
}

module.exports = Game;
