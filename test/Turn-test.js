const chai = require("chai");
const assert = chai.assert;

const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Turn", function () {
  let card = new Card(1, "What is Robbie's favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
  let turn1 = new Turn("pug", card);
  let turn2 = new Turn("sea otter", card);

  it("Should takes in two arguments representing a user's guess and the card", function () {
    assert.equal(turn1.guess, "pug");
    assert.equal(turn1.card, card);
  });

  it("Should have a method to return the guess", function () {
    assert.equal(turn1.returnGuess(), "pug");
  });

  it("Should have a method to return the card", function () {
    assert.equal(turn1.returnCard(), card);
  });

  it("Should have a method to evaluate the guess to be true of false", function () {
    assert.equal(turn1.evaluateGuess(), false);
    assert.equal(turn2.evaluateGuess(), true);
  });

  it("Should give a user feedback of their guess", function () {
    // expect(turn.giveFeedback()).to.equal("Incorrect!");
    assert.equal(turn1.giveFeedback(), "Incorrect -__-");
    assert.equal(turn2.giveFeedback(), "Correct ^__^");
  });
});
