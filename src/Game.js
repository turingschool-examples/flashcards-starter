const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("./Round");
const Deck = require("./Deck");

class Game {
  constructor() {
    // this.currentRound = new Round(deck);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let questions = prototypeQuestions.map((question) => {
      return {
        id: question.id,
        question: question.question,
        answers: question.answers,
        correctAnswer: question.correctAnswer,
      };
    });
    let deck = new Deck(questions);
  }
  createCards() {
    let questions = prototypeQuestions.map((question) => {
      return {
        id: question.id,
        question: question.question,
        answers: question.answers,
        correctAnswer: question.correctAnswer,
      };
    });
    let deck = new Deck(questions);
  }
  createDeck() {
    let deck = new Deck(this.createCards());
    return deck;
  }
  createRound() {
    let round = new Round(this.createDeck());
    return round;
  }
}

module.exports = Game;
