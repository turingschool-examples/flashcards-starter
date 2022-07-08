const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function () {
  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const turn2 = new Turn();
    expect(turn2).to.be.an.instanceof(Turn);
  });

  it("should return a guess", function () {
    const guess = "dog";
    const card3 = new Card(
      1,
      "What are animals?",
      ["cat", "dog", "bunny"],
      "bunny"
    );
    const turn3 = new Turn(guess, card3);

    expect(turn3.returnGuess()).to.be.equal("dog");
  });

  it("should return the card", function () {
    const card4 = new Card(
      2,
      "What is the answer?",
      ["hat", "boot", "scarf"],
      "scarf"
    );
    const turn4 = new Turn("scarf", card4);

    expect(turn4.returnCard()).to.be.an.instanceOf(Card);
  });

  it("should evaluate guess", function () {
    const card5 = new Card(
      3,
      "Why?",
      ["Hi", "Bye", "All the help"],
      "All the help"
    );
    const turn5 = new Turn("Hi", card5);

    expect(turn5.evaluateCard()).to.equal(false);
  });

  it("should give feedback", function () {
    const card6 = new Card(
      4,
      "How?",
      ["Because", "The moon", "Bad Luck"],
      "Bad Luck"
    );
    const turn6 = new Turn("Because", card6);

    expect(turn6.giveFeedback()).equal("Incorrect");
  });
});
