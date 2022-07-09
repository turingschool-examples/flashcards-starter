const Card = require("./Card");
const data = require("./data");
const Deck = require("./Deck");
const Round = require("./Round");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }
  printQuestion(round) {
    util.main(round);
  }

  getCards() {
    let assignedCards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    return assignedCards;
  }

  createDeck() {
    let cards = this.getCards();
    let deck = new Deck(cards);
    return deck;
  }

  createRound() {
    let playableDeck = this.createDeck();
    let round = new Round(playableDeck);
    this.currentRound = round;
    return round;
  }

  returnRound() {
    return this.currentRound;
  }

  start() {
    this.createRound();
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
