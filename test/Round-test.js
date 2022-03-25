const chai = require("chai");
const expect = chai.expect;
const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1, card2, card3, deck, round, turn;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck.cards);

  });

  it.skip("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip("should hold a deck of cards", () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it.skip("should show current card", () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should make a new turn with every guess', () => {
    round.takeTurn('object')
    expect(round.currentTurn).to.be.an.instanceof(Turn)
  })

  it.skip("should show how many turns have happened in the current round", () => {
    expect(round.turns).to.equal(0);
  });

  it.skip("should store incorrect guesses", () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should return "correct!" if guess is correct', () => {
    expect(round.takeTurn("sea otter")).to.equal("correct!");
  });

  it.skip('should return "incorrect!" if guess is incorrect', () => {
    expect(round.takeTurn("spleen")).to.equal("incorrect!");
  });

  it.skip("should add 1 to number of turns every turn", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.turns).to.equal(2);
  });

  it.skip("should store incorrect guesses", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it.skip("should update current card after each turn", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it.skip("should calculate percent of correct answeres", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip("should be able to end the round", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.endRound()).to.equal(
      `** Round over! ** You answered 50% of the questions correctly!`
    );
  });
});
