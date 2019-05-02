const chai = require("chai");
const expect = chai.expect;
const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", function() {
  it("should be a function", function() {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should have a method which returns the guess", function() {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.returnGuess()).to.equal("pug");
  });

  it("should return the card", function() {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.returnCard()).to.eql({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: ["sea otter", "pug", "capybara"],
      correctAnswer: "sea otter"
    });
  });

  it("should evaluates the guess", function() {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should give feedback", function() {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
