const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a new round of play', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck of cards', function() {
    const card1 = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");
    const card2 = new Card(18,
      "When is it ok to fart in public?",
      ["Outside only", "Always if necessary", "Never"],
      "Outside only");

    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    expect(round.deck).to.have.lengthOf(2);
  });

  it('should have 0 turns by default', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should have no incorrect guesses by default', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.have.lengthOf(0);
  });

  it('should store a current flashcard', function() {
    const card1 = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I Smell like flowers"],
      "I Smell Like Flowers");
    const card2 = new Card(18,
      "When is it ok to fart in public?",
      ["Outside only", "Always if necessary", "Never"],
      "Outside only");
    const cardList = [card1, card2];
    const deck = new Deck(cardList);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  });

  describe('returnCurrentCard', function() {

    it('should be a function', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'shrimp');
      const deck = new Deck([card]);
      const round = new Round(deck);

      expect(round.returnCurrentCard).to.be.a('function');
    });

    it('should return the current card object', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'here');
      const deck = new Deck([card]);
      const round = new Round(deck);

      const currentCard = round.returnCurrentCard();

      expect(currentCard).to.equal(card);
    });
  });

  describe('takeTurn', function() {

    it('should be a function', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'shrimp');
      const deck = new Deck([card]);
      const round = new Round(deck);

      expect(round.takeTurn).to.be.a('function');
    });

    it('should be able to take a turn and log it', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'shrimp');
      const deck = new Deck([card]);
      const round = new Round(deck);

      round.takeTurn('shrimp');

      expect(round.turns).to.equal(1);
    });

    it('should instantiate a new turn when a guess is made', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'here');
      const deck = new Deck([card]);
      const round = new Round(deck);

      round.takeTurn('over there');

      expect(round.turn).to.be.an.instanceOf(Turn);
    });

    it('should record the user\'s guess', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'here');
      const deck = new Deck([card]);
      const round = new Round(deck);

      round.takeTurn('here');

      expect(round.turn.userGuess).to.equal('here');
    });

    it('should update to the next card in the deck when turn is completed', function() {
      const card1 = new Card(1, "Where is Waldo?", ['at the terminal'], 'here');
      const card2 = new Card(2, "Where is Lucifer?", ['in the airplane'], 'not on earth');
      const deck = new Deck([card1, card2]);
      const round = new Round(deck);

      round.takeTurn('underwhere');

      expect(round.currentCard).to.equal(card2);
    });

    it('should store the card number when guess is incorrect', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'in the hangar');
      const deck = new Deck([card]);
      const round = new Round(deck);

      round.takeTurn('with the hamburglar');

      expect(round.incorrectGuesses).to.have.lengthOf(1);
    });

    it('should bypass storing the card number when guess is correct', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'in the hangar');
      const deck = new Deck([card]);
      const round = new Round(deck);

      round.takeTurn('in the hangar');

      expect(round.incorrectGuesses).to.have.lengthOf(0);
    });

    it('should be able to return feedback when taking a turn', function() {
      const card1 = new Card(42,
        "Why do birds suddenly appear every time you are near?",
        ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
        "I Smell Like Flowers!");
      const card2 = new Card(18,
        "When is it ok to fart in public?",
        ["Outside only", "Always if necessary", "Never"],
        "Outside only");
      const userGuess1 = "I Smell Like Flowers!";
      const userGuess2 = "Never";
      const cardList = [card1, card2];
      const deck = new Deck(cardList);
      const round = new Round(deck);

      const answerFbk1 = round.takeTurn(userGuess1);

      expect(answerFbk1).to.equal('correct');

      const answerFbk2 = round.takeTurn(userGuess2);

      expect(answerFbk2).to.equal('incorrect');
    });
  });

  describe('calculatePercentCorrect', function() {

    it('should be a function', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'in the hangar');
      const deck = new Deck([card]);
      const round = new Round(deck);

      expect(round.calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate and return the percentage of correct guesses', function() {
      const card1 = new Card(42,
        "Why do birds suddenly appear every time you are near?",
        ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
        "I Smell Like Flowers!");
      const card2 = new Card(18,
        "When is it ok to fart in public?",
        ["Outside only", "Always if necessary", "Never"],
        "Outside only");
      const userGuess1 = "I Smell Like Flowers!";
      const userGuess2 = "Never";
      const cardList = [card1, card2];
      const deck = new Deck(cardList);
      const round = new Round(deck);

      const answerFbk1 = round.takeTurn(userGuess1);
      const answerFbk2 = round.takeTurn(userGuess2);

      expect(round.calculatePercentCorrect()).to.equal(50);
    })
  });

  describe('endRound', function() {

    it('should be a function', function() {
      const card = new Card(1, "Where is Waldo?", ['at the terminal'], 'in the hangar');
      const deck = new Deck([card]);
      const round = new Round(deck);

      expect(round.endRound).to.be.a('function');
    });

    it('should print an update to the console', function() {
      const card1 = new Card(42,
        "Why do birds suddenly appear every time you are near?",
        ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
        "I Smell Like Flowers!");
      const card2 = new Card(18,
        "When is it ok to fart in public?",
        ["Outside only", "Always if necessary", "Never"],
        "Outside only");
      const userGuess1 = "I Smell Like Flowers!";
      const userGuess2 = "Never";
      const cardList = [card1, card2];
      const deck = new Deck(cardList);
      const round = new Round(deck);

      const answerFbk1 = round.takeTurn(userGuess1);
      const answerFbk2 = round.takeTurn(userGuess2);
      const message = "** Round over! ** You answered 50% of the questions correctly!";
      round.calculatePercentCorrect();

      expect(round.endRound()).to.equal(message);
    });
  });
});
