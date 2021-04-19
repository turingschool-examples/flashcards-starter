const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Card = require('../src/Card');

const card1 = new Card(
  1,
  'What allows you to define a set of related information using key-value pairs?',
  ['object', 'array', 'function'],
  'object'
);
const card2 = new Card(
  2,
  'What allows you to define a set of related information using commas and indexes?',
  ['object', 'array', 'function'],
  'array'
);
const card3 = new Card(
  3,
  'What is 1 + 1',
  ['0', '1', '2'],
  '2'
);

const deck = new Deck([card1, card2, card3])

describe('Round', function () {
  it('starts with a deck', function () {
    let round = new Round(deck)
    expect(round.deck).to.deep.equal(deck)
  });
  
  it('starts with no no turns taken', function () {
    let round = new Round(deck)
    expect(round.turns).to.equal(0)
  });
  
  it('starts with no incorrect guesses', function () {
    let round = new Round(deck)
    expect(round.incorrectGuesses).to.deep.equal([])
  });
});