// file dependencies
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck')

// global testing variables
const card1 = new Card(
  1,
  'What allows you to define a set of related information using key-value pairs?',
  ['object', 'array', 'function'],
  'object'
);
const card2 = new Card(
  14,
  'What organ is Khalid missing?',
  ['spleen', 'appendix', 'gallbladder'],
  'gallbladder'
);
const card3 = new Card(
  12,
  "What is Travis's middle name?",
  ['Lex', 'William', 'Fitzgerald'],
  'Fitzgerald'
);

const deck = new Deck([card1, card2, card3])

// tests

it('should instantiate the Deck class', () => {
  expect(deck).to.be.an.instanceof(Deck)
})


