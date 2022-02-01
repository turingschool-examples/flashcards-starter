const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js")
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");

describe("Round", function () {
  it("should be a function", function () {
    const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it("should store a deck", function () {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.equal(deck)
  });

  it('should return the current card', function() {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should have a method the updates the turns in the turn class', function() {
    const round = new Round();
    const turn = new Turn()

    round.takeTurn()

    expect(round.turnCount).to.equal(1)

    round.takeTurn()
    round.takeTurn()

    expect(round.turnCount).to.equal(3)
  })

  it('should')
});
