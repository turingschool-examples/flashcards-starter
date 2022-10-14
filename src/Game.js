const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor(round) {
    this.roundCounter = 0;
    this.round = round;
    this.deck = [];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound() {
    return this.roundCounter++;
  }

  createCards() {
    let cards = [];
    let deckWithCards = prototypeQuestions.forEach((card) => cards.push(card));
    return cards;
  }

  createDeck(cards) {
    const deck = new Deck(cards);
    return deck;
  }

  createRound(deck) {
    const round = new Round(deck);
    return round;
  }

  start() {
    const cards = this.createCards();
    const deck = this.createDeck(cards);
    const round = this.createRound(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;