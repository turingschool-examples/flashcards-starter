const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');
const Round = require('../src/round');
const Turn = require('../src/turn');

describe('Round', function() {

  let deck;
  let round;
  let turn;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(
      1,
      'What allows you to define a set of related information using key-value'
    + 'pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    card2 = new Card(
      2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array'
    );
    card3 = new Card(
      3,
      'What type of prototype method directly modifies the existing array?',
      ['mutator method', 'accessor method', 'iteration method'],
      'mutator method'
    );
    var allCards = [card1, card2, card3]
    turn = new Turn('object', allCards[0].correctAnswer);
    deck = new Deck(allCards);
    round = new Round(deck, turn);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return the first card in the deck', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  describe('round.takeTurn() and round.turns', function() {

    it('should start with a turn count of 0', function() {
      expect(round.turns).to.equal(0);
    });

    it('should increment each time takeTurn is invoked', function() {
      round.takeTurn('object');
      round.takeTurn('object');
      expect(round.turns).to.equal(2);
    });

    it('should return correct! after a correct guess is made', function() {
      expect(round.takeTurn('object')).to.equal('correct!');
    });

    it('should return incorrect! after a incorrect guess is made', function() {
      const round = new Round(deck, turn);

      expect(round.takeTurn('hi')).to.equal('incorrect!');
    });
  });

  it('should start with an empty array called incorrectGuesses', function() {
    expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
  });

  it('should change currentCard after a guess is made', function() {
    round.takeTurn('object');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should calculate the percent correct', function() {
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should log a message after the game ends', function() {
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.endRound()).to.equal('** Round over! ** You answered' +
     ' 50.00% of the questions correctly!');
  });
});
