const chai = require("chai");
const assert = chai.assert;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1 = new Card(1, "What is Robbie's favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
  let card2 = new Card(14, "What organ is Khalid missing?", ["spleen", "appendix", "gallbladder"], "gallbladder");
  let card3 = new Card(
    12,
    "What is Travis's favorite stress reliever?",
    ["listening to music", "watching Netflix", "playing with bubble wrap"],
    "playing with bubble wrap"
  );

  let deck = new Deck([card1, card2, card3]);

  let round = new Round(deck);

  it("Should be able to return the current card", () => {
    assert.equal(round.returnCurrentCard(), card1);
  });

  it("Should be able to take a turn and give feedback", () => {
    let turn1 = round.takeTurn("sea otter");
    assert.equal(turn1, "Correct ^__^");
    let turn2 = round.takeTurn("spleen");
    assert.equal(turn2, "Incorrect -__-");
  });

  it("Should update the number of turns", () => {
    assert.equal(round.turns, 2);
  });

  it("Should record the ids of the questions a user got wrong", () => {
    // assert.isArray(round.wrongGuesses);
    assert.deepEqual(round.wrongGuesses, [14]);
  });

  it("Should be able to calculate the percent of correct guess", () => {
    assert.equal(round.calculatePercentCorrect(), 50);
  });

  //   it("Should be able to end a round", ()=>{
  //       assert.equal
  //   })
});
