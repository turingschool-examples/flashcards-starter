const chai = require("chai");
const Card = require("../src/Card.js");
const expect = chai.expect;
const Turn = require("../src/Turn.js");

describe("Turn", () => {
  const myCard = new Card(1, "What is my favorite food?", ["pickles", "pizza", "pie"], "pickles");
  const turn = new Turn("pickles", myCard);
  const wrongTurn = new Turn("pie", myCard);

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should have a guess", () => {
    expect(turn.guess).to.equal("pickles")
  });

  it("should have a card", () => {
    expect(turn.currentCard).to.be.an.instanceOf(Card);
  });

  it("should return a guess", () => {
    const returnedGuess = turn.returnGuess();
    expect(returnedGuess).to.equal("pickles");
  });

  it("should return a card", () => {
    const returnedCard = turn.returnCard();
    expect(returnedCard).to.eql(myCard);
  });

  it("should be able to evaluate guess as true", () => {
    const evaluatedGuess = turn.evaluateGuess();
    expect(evaluatedGuess).to.equal(true);
  });

  it("should be able to evaluate guess as false", () => {
    const wrongGuess = wrongTurn.evaluateGuess();
    expect(wrongGuess).to.equal(false);
  });

  it("should give positive feedback", () => {
    const goodFeedback = turn.giveFeedback();
    expect(goodFeedback).to.equal("correct!");
  });

  it("should give negative feedback", () => {
    const badFeedback = wrongTurn.giveFeedback();
    expect(badFeedback).to.equal("incorrect!");
  });
})
