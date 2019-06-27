const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should start with the first card in the deck', function() {
    const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const card3 = new Card({id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should update the number of turns taken', function() {
    const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const card3 = new Card({id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('function', card1);
    round.takeTurn('array', card2);
    round.takeTurn('mutator method', card3);
    expect(round.turns).to.equal(3);
  });

  it('should make next card in deck the current card', function() {
    const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('function', card1);
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should save a list of incorrect guesses by their id', function() {
  const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const card3 = new Card({id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('function', card1);
    round.takeTurn('array', card2);
    round.takeTurn('iteration method', card3);
    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
  });

  it('should caluculate and return the percent of correct guesses', function() {
    const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const card3 = new Card({id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('function', card1);
    round.takeTurn('array', card2);
    round.takeTurn('mutator method', card3);
    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should tell the player when the round is over', function() {
    const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const card2 = new Card({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
    const card3 = new Card({id: 3, question: 'What type of prototype method directly modifies the existing array?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'mutator method'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('function', card1);
    round.takeTurn('array', card2);
    round.takeTurn('mutator method', card3);
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!');
  });
})