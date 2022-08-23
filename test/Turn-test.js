const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function () {
  it("should instantuate a turn", function () {
    const turn = new Turn();
    expect(turn).be.an.instanceof(Turn);
  });
  it("Each turn should have a guess", function () {
    const turn = new Turn("pug");
    expect(turn.guess).to.equal("pug");
  });
  it("Each turn has a card", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "sea turtle"
    );
    const turn = new Turn("pug", card);

    expect(turn.card).be.an.instanceof(Card);
  });
  it("Return the guess", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "sea turtle"
    );
    const turn = new Turn("cat", card);

    expect(turn.returnGuess()).to.equal("cat");
  });
  it("Return the card", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "sea turtle"
    );
    const turn = new Turn("cat", card);

    expect(turn.returnCard()).be.an.instanceOf(Card);
  });
  it("Evalute whether the guess was correct", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "cat"
    );
    const turn = new Turn("cat", card);
    expect(turn.evaluteGuess()).to.equal(true);
  });
  it("Evalute whether the guess was incorrect", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "sea turtle"
    );
    const turn = new Turn("cat", card);

    expect(turn.evaluteGuess()).to.equal(false);
  });
  it("Give feedback whether the guess was correct", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "cat"
    );
    const turn = new Turn("cat", card);

    expect(turn.giveFeedback()).to.equal("Correct Answer!");
  });
  it("Give feedback whether the guess was incorrect", function () {
    const card = new Card(
      1,
      "What is Piper's favorite animal",
      ["sea turtle", "dog", "sloth"],
      "sea turtle"
    );
    const turn = new Turn("cat", card);

    expect(turn.giveFeedback()).to.equal("Incorrect Answer!");
  });
});
