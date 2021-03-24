const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round")
const Turn = require("../src/Turn");


describe("Round", () => {
  describe("returnCurrentCard method", () => {
    it("should return the current card being played with the returnCurrentCard method", () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea  otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.returnCurrentCard();

      expect(round.returnCurrentCard()).to.equal(card1);
    });
  });
  describe("takeTurn method", () => {
    it.skip("should create a new instance of Turn", () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea  otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn();

      expect(turn).to.be.a("object");
    });
    it.skip("should update turn count, regardless of whether answer was correct or incorrect", () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea  otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn();

      expect(turn.turnCount).to.equal(1);
    });
    it.skip("should make the next card in the deck the current card", () => {

    });
    it.skip("should evaluate and record guesses", () => {

    });
    it.skip("should store incorrect guesses via the id in an array of incorrectGuesses", () => {

    });
    it.skip("should return feedback regarding whether the guess is correct or incorrect", () => {

    });
  });
  describe("calculatePercentCorrect", () => {
    it.skip("should calculate and return the percentage of correct guesses", () => {

    });
  });
  describe("endRound", () => {
    it.skip("should print the following to the console: **Round over!**You answered <>% of the questions correctly!", () => {

    });
  });
});
