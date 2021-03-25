const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Round = require("../src/Round");


describe("Round", () => {
  let card1, card2, card3, deck, round;
  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck, card1);
  });

  it("should be a function", () => expect(Round).to.be.a("function"));

  it("should store a deck object", () => expect(round.deck).to.be.a("object"));

  it("should store the current card in play by default", () => expect(round.returnCurrentCard()).to.equal(card1));

  it("should update the current card when a turn is made", () => {
    const turn1 = round.takeTurn("object");
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it("should default to 0 turns", () => expect(round.turns).to.equal(0));

  it("should increase turn count when turns are taken", () => {
    const turn1 = round.takeTurn("object");
    expect(round.turns).to.equal(1);
  });

  it("should evaluate the guess", () => {
    const turn1 = round.takeTurn("object"); //correct
    const turn2 = round.takeTurn("function"); //incorrect
    expect(turn1).to.equal("correct!");
    expect(turn2).to.equal("incorrect!");
  });

  it("should store incorrect guesses", () => {
    const turn1 = round.takeTurn("object"); //correct
    const turn2 = round.takeTurn("function"); //incorrect
    const turn3 = round.takeTurn("true"); //incorrect
    expect(round.incorrectGuesses).to.have.lengthOf(2);
    expect(round.incorrectGuesses[0]).to.be.a("number");
    expect(round.incorrectGuesses[1]).to.equal(3);
  });

  it("should calculate and return the percentage of correct guesses", () => {
    const turn1 = round.takeTurn("object"); //correct
    const turn2 = round.takeTurn("function"); //incorrect
    const turn3 = round.takeTurn("true"); //incorrect
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it("should calculate and return the percentage of correct guesses", () => {
    const turn1 = round.takeTurn("object"); //correct
    const turn2 = round.takeTurn("function"); //incorrect
    const turn3 = round.takeTurn("true"); //incorrect
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it("should end the round and display the score", () => {
    const turn1 = round.takeTurn("object"); //correct
    const turn2 = round.takeTurn("function"); //incorrect
    const turn3 = round.takeTurn("false"); //correct
    expect(round.endRound()).to.equal("** Round over! ** You answered 67% of the questions correctly!");
  });
})
