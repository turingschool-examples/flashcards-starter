const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function() {

  it("Should be a function", function() {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("Should keep track of current card in play", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.currentCard).to.equal(card);
    expect(turn.currentCard).to.be.a("object");
  });

  it("Should store the user\;s guess to the question", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.userGuess).to.equal("function");
  });

  it("Should return the guess", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.returnGuess()).to.equal("function");
  });

  it("Should return the Card", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it("Should evaluate the user\'s guess", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn("function", card);
    const turn2 = new Turn("object", card);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it("Should provide feedback based on the guess evaluation", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn("function", card);
    const turn2 = new Turn("object", card);
    expect(turn1.giveFeedback()).to.equal("incorrect!");
    expect(turn2.giveFeedback()).to.equal("correct!");
  });

})
