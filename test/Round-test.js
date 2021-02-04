const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  let card1, card2, deck, round;

  beforeEach('create a round and deck of cards', () => {
    card1 = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");
    card2 = new Card(18,
      "When is it ok to fart in public?",
      ["Outside only", "Always if necessary", "Never"],
      "Outside only");

    deck = new Deck([card1, card2]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a new round of play', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck of cards', function() {
    expect(round.deck).to.have.lengthOf(2);
  });

  it('should have 0 turns by default', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have no incorrect guesses by default', function() {
    expect(round.incorrectGuesses).to.have.lengthOf(0);
  });

  it('should store a current flashcard', function() {
    expect(round.currentCard).to.equal(card1);
  });

  describe('returnCurrentCard', function() {

    it('should be a function', function() {
      expect(round.returnCurrentCard).to.be.a('function');
    });

    it('should return the current card object', function() {
      const currentCard = round.returnCurrentCard();
      expect(currentCard).to.equal(card1);
    });
  });

  describe('takeTurn', function() {

    it('should be a function', function() {
      expect(round.takeTurn).to.be.a('function');
    });

    it('should be able to take a turn and log it', function() {
      round.takeTurn('shrimp');
      expect(round.turns).to.equal(1);
    });

    it('should instantiate a new turn when a guess is made', function() {
      round.takeTurn('over there');
      expect(round.turn).to.be.an.instanceOf(Turn);
    });

    it('should record the user\'s guess', function() {
      round.takeTurn('here');
      expect(round.turn.userGuess).to.equal('here');
    });

    it('should update to the next card in the deck when turn is completed', function() {
      round.takeTurn('underwhere');
      expect(round.currentCard).to.equal(card2);
    });

    it('should store the card number when guess is incorrect', function() {
      round.takeTurn('with the hamburglar');
      expect(round.incorrectGuesses).to.have.lengthOf(1);
    });

    it('should bypass storing the card number when guess is correct', function() {
      round.takeTurn('I Smell Like Flowers');
      expect(round.incorrectGuesses).to.have.lengthOf(0);
    });

    it('should be able to return feedback when taking a turn', function() {
      const userGuess1 = "I Smell Like Flowers";
      const userGuess2 = "Never";

      const answerFbk1 = round.takeTurn(userGuess1);

      expect(answerFbk1).to.equal('correct');

      const answerFbk2 = round.takeTurn(userGuess2);

      expect(answerFbk2).to.equal('incorrect');
    });
  });

  describe('calculatePercentCorrect', function() {

    it('should be a function', function() {
      expect(round.calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate and return the percentage of correct guesses', function() {
      const userGuess1 = "I Smell Like Flowers";
      const userGuess2 = "Never";

      round.takeTurn(userGuess1);
      round.takeTurn(userGuess2);

      expect(round.calculatePercentCorrect()).to.equal(50);
    })
  });

  describe('endRound', function() {

    it('should be a function', function() {
      expect(round.endRound).to.be.a('function');
    });

    it('should print an update to the console', function() {
      const userGuess1 = "I Smell Like Flowers";
      const userGuess2 = "Never";

      round.takeTurn(userGuess1);
      round.takeTurn(userGuess2);

      const message = "** Round over! ** You answered 50% of the questions correctly!";
      round.calculatePercentCorrect();

      expect(round.endRound()).to.equal(message);
    });
  });
});
