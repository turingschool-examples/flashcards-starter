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
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.createCards()
    this.createDeck()
    this.createRound()
    this.printQuestion(this.currentRound)
    this.printMessage(this.deck, this.currentRound);

  }

  createCards() {
    prototypeQuestions.forEach(card => {
      this.everyCard.push(new Card (card.id, card.question, card.answers, card.correctAnswer));
    });
  };

  createDeck() {
    this.deck = new Deck(this.everyCard);
  };

  createRound() {
    this.currentRound = new Round(this.deck)
  };

}

module.exports = Game;
