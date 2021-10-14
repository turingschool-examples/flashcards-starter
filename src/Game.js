const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
    this.deck;
    this.newRoundCards = [];
  }

  start() {
    this.createCards();
    this.createDeck();
    this.createNewRound();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  //for each position in the prototype questions array, I want to create a new instance of the Card class w/ the parameters id, question, answers, correctAnswer.
  //cardToCreate is holding the position of the prototypeQuestions array and we're using it to call each parameter for our card class.

  createCards() {
    prototypeQuestions.forEach((cardToCreate) =>
      this.newRoundCards.push(new Card(cardToCreate.id, cardToCreate.question, cardToCreate.answers, cardToCreate.correctAnswer))
    )
  }

  createDeck() {
    this.deck = new Deck(this.newRoundCards)
    return this.deck;
  }

  createNewRound() {
    this.currentRound = new Round(this.deck);
    return this.currentRound;
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;