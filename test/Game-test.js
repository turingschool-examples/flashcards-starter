const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data");
const prototypeQuestions = data.prototypeData;
const Game = require("../src/Game");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Game", function() {
  it("should be a function", function() {
    expect(Game).to.be.a("function");
  });


  it("should keep track of the current round", function() {
    const game = new Game();
    game.createCards();
    expect(game.currentRound).to.eql(prototypeQuestions);
  });

  it("should return new deck with the number of cards", function() {
    const deck = new Deck(prototypeQuestions);
    expect(deck.cards).to.eql(prototypeQuestions);
  });

  it("should return new round", function() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.eql({
      id: 1,
      question:
        "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    });
  });
});
