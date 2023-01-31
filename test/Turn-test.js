const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });
  it("should be a new instance of Turn", () => {
    const card1 = new Card(1, "What is Robbie\'s favorite animal",["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn('pug', card1)
    expect(turn).to.be.an.instanceof(Turn);
  })
  it("should take the player\'s guess as an argument", () => {
    const card1 = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
    const turn = new Turn("sea otter", card1);
    expect(turn.guess).to.equal('sea otter');
  });
  it("should have a method that returns the guess", () => {
    const card = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("sea otter", card);
    expect(turn.returnGuess()).to.equal('sea otter');
  })
  it("should have a method that returns the card", () => {
    const card = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn("sea otter", card);
    expect(turn.returnCard()).to.deep.equal(card);
  });
  it("should have a method be able to determine if the answer is correct", () => {
    const card = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
    const turn1 = new Turn("sea otter", card);
    const turn2 = new Turn("pug", card)

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true)
  });
  it("should have a method that returns if the answer is correct or incorrect", () => {
    const card = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
    const turn1 = new Turn("sea otter", card);
    const turn2 = new Turn("pug", card);

    expect(turn1.returnFeedback()).to.equal("incorrect!");
    expect(turn2.returnFeedback()).to.equlae("correct!")
  });



});