const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a current card', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(cardOne);
  });

  it('should be able to display the current card', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(cardOne);
  });

  // it('each round should be able to instantiate a new turn', function() {
  //   const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  //   const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  //   const deck = new Deck([cardOne, cardTwo, cardThree]);
  //   const round = new Round(deck);
  //   expect(round.takeTurn('guess')).to.be.an.instanceof(Turn);
  // });

  it('each time a turn is taken, the number of turns increment', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
  });

  it('each time a turn is taken, the next card becomes the current card', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    round.takeTurn('guess');
    expect(round.currentCard).to.equal(cardTwo);
  });

  it('the guess is evaluated and recorded for each turn', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('guess');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('the user should receive feedback on their guess', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.takeTurn('guess')).to.equal('incorrect!');
    expect(round.takeTurn('mutator method')).to.equal('correct!');
  });

  it('the user should see what percentage of their guesses they have gotten correct', function() {
    const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    round.takeTurn('guess');
    expect(round.calculatePercentCorrect()).to.equal('0%');
    round.takeTurn('mutator method');
    expect(round.calculatePercentCorrect()).to.equal('50%');
  });

})
