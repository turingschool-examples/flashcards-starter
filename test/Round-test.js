const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round")
const Turn = require("../src/Turn");



describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea  otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  describe("returnCurrentCard method", () => {
    it("should return the current card being played with the returnCurrentCard method", () => {
      var currentCard = round.returnCurrentCard();

      expect(currentCard).to.equal(card1);
    });
  });
  describe("takeTurn method", () => {
    it.skip("should create a new instance of Turn", () => {
      round.takeTurn("sea otter");

      expect(turn).to.be.a("object");
    });
    it.skip("should update turn count, regardless of whether answer was correct or incorrect", () => {
      round.takeTurn("sea otter");

      expect(turn.turnCount).to.equal(1);
    });
    it.skip("should make the next card in the deck the current card", () => {
      round.takeTurn("sea otter");

      expect(round.currentCard).to.equal(card2);
    });
    it.skip("should evaluate guesses", () => {
      round.takeTurn("sea otter");
      round.takeTurn('spleen');

      expect(round.takeTurn("sea otter")).to.equal(true);
      expect(round.takeTurn("spleen")).to.equal(false);
    });
    it.skip("should store incorrect guesses via the id in an array of incorrectGuesses", () => {
      round.takeTurn("sea otter");
      round.takeTurn('spleen');

      expect(round.incorrectGuesses).to.equal([14]);
    });
    it.skip("should return feedback regarding whether the guess is correct or incorrect", () => {
      round.takeTurn("sea otter");
      expect(round.takeTurn("sea otter")).to.equal(`correct!`)
      round.takeTurn('spleen');
      expect(round.takeTurn("spleen")).to.equal(`incorrect!`)
    });
  });
  describe("calculatePercentCorrect", () => {
    it.skip("should calculate and return the percentage of correct guesses", () => {
      round.takeTurn("sea otter");
      round.takeTurn("spleen");
      round.takeTurn("watching Netflix");

      expect(round.calculatePercentCorrect()).to.equal(33);
    });
  });
  describe("endRound", () => {
    it.skip("should print the following to the console: **Round over!**You answered <>% of the questions correctly!", () => {
      round.takeTurn("sea otter");
      round.takeTurn("spleen");
      round.takeTurn("watching Netflix");

      expect(round.endRound()).to.equal(`**Round over!**You answered 33% of the questions correctly!`)
    });
  });
});
