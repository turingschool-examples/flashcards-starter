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
      let currentCard = round.returnCurrentCard();

      expect(currentCard).to.equal(card1);
    });
  });
  describe("takeTurn method", () => {
    beforeEach(() => {
      let firstTurn = round.takeTurn("sea otter");
    });
    it.skip("should create a new instance of Turn", () => {
      expect(turn).to.be.a("object");
    });
    it.skip("should update turn count, regardless of whether answer was correct or incorrect", () => {
      expect(turn.turnCount).to.equal(1);
    });
    it.skip("should make the next card in the deck the current card", () => {
      expect(round.currentCard).to.equal(card2);
    });
    it.skip("should evaluate guesses", () => {
      let secondTurn = round.takeTurn('spleen');

      expect(firstTurn).to.equal(true);
      expect(secondTurn).to.equal(false);
    });
    it.skip("should store incorrect guesses via the id in an array of incorrectGuesses", () => {
      let secondTurn = round.takeTurn('spleen');

      expect(round.incorrectGuesses).to.equal([14]);
    });
    it.skip("should return feedback regarding whether the guess is correct or incorrect", () => {
      let secondTurn = round.takeTurn('spleen');

      expect(firstTurn).to.equal(`correct!`)
      expect(secondTurn).to.equal(`incorrect!`)
    });
  });
  describe("calculatePercentCorrect", () => {
    it.skip("should calculate and return the percentage of correct guesses", () => {
      let firstTurn = round.takeTurn("sea otter");
      let secondTurn = round.takeTurn("spleen");
      let thirdTurn = round.takeTurn("watching Netflix");

      expect(round.calculatePercentCorrect()).to.equal(33);
    });
  });
  describe("endRound", () => {
    it.skip("should print the following to the console: **Round over!**You answered <>% of the questions correctly!", () => {
      let firstTurn = round.takeTurn("sea otter");
      let secondTurn = round.takeTurn("spleen");
      let thirdTurn = round.takeTurn("watching Netflix");

      let endRoundPrint = round.endRound();
      expect(endRoundPrint).to.equal(`**Round over!**You answered 33% of the questions correctly!`)
    });
  });
});
