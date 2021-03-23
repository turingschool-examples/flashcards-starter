const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function() {

  it.skip("Should be a function", function() {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it.skip("Should keep track of current card in play", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.currentCard).to.equal(card);
    expect.(turn.currentCard).to.be.a("object");
  });

  it.skip("Should store the user\;s guess to the question", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.userGuess).to.equal("function");
  });

  it.skip("Should return the guess", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.returnGuess()).to.equal("function");
  });

  it.skip("Should return the Card", function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("function", card);
    expect(turn.returnCard()).to.equal({
      id: 1,
      question: "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    });
  });

})
