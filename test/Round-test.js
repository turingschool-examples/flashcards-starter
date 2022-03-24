const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');




describe('Round', function() {
  it('should be a function', function() {
  const round = new Round();
  expect(Round).to.be.a('function');
});

it('should return the current card being played', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  expect(round.returnCurrentCard()).to.equal(card1)
});

// it('should instantiate a new Turn once a guess is made', function() {
//   const turn = new Turn(guess, card);
//   expect(round.takeTurn).to.equal()
// })

it('should update the turns count', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  round.takeTurn();
  round.takeTurn();
  expect(round.turns).to.equal(2)
});

// it('should put incorrect guesses into the incorrectGuesses array', function() {
//
// })

it('should change the next card to be the current card', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  round.takeTurn();
  expect(round.returnCurrentCard()).to.equal(card2)
});

it('should be able to record incorrect guess', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  round.takeTurn()
  expect(round.incorrectGuesses).to.deep.equal([1])
});

it('should return feedback if the guess is correct', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  const feedback = round.takeTurn('object');
  expect(feedback).to.equal("correct!")
});

it('should return feedback if the guess is incorrect', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  const feedback = round.takeTurn('array');
  expect(feedback).to.equal("incorrect!")
});

it('should be able to calculate the percentage of correct guesses', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  expect(round.calculatePercentCorrect()).to.equal(100)
});

it('should be able to print a message to the console', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  round.endRound();
  expect(round.endRound()).to.equal(`**Round over!** You answered 100% ofthe questions correctly!`)
});

})
