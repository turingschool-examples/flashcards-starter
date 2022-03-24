const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, "What is Robbie's favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    turn = new Turn("pug", card);
  });

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should pass in user's guess to the question", () => {
    expect(turn.guess).to.equal("pug");
  });

  it("should also pass in a card object for current card in play", () => {
    expect(turn.currentCard).to.be.an.instanceof(Card);
  });

  it("should have a method that returns user's guess", () => {
    let guess = turn.returnGuess();
    expect(guess).to.equal("pug");
  });

  it("should have a method that returns current card", () => {
    let card1 = turn.returnCard();
    expect(card1).to.be.an.instanceof(Card);
  });

  it("should have a method that returns true if guess is correct", () => {
  turn.guess = "sea otter";
    let guessResult = turn.evaluateGuess();
    expect(guessResult).to.equal(true);
  });

  it("should allow the same method to return false if guess is incorrect", () => {
    let guessResult = turn.evaluateGuess();
    expect(guessResult).to.equal(false);
  });

  it("should have a method that indicates to user if guess is correct", () => {
    turn.guess = "sea otter";
    let feedback = turn.giveFeedback();
    expect(feedback).to.equal("correct!");
  });
  
  it("should allow the same method to indicate if guess is incorrect", () => {
    let feedback = turn.giveFeedback();
    expect(feedback).to.equal("incorrect!");
  });
});