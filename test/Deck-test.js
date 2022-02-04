const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {

it('should be a function', function() {
  const deck = new Deck();
  expect(Deck).to.be.a('function');
});

it('should be an instance of Deck', function() {
  const deck = new Deck();
  expect(deck).to.be.an.instanceof(Deck);
});

it('should have an array of cards', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);
  expect(deck.cards).to.deep.equal([card1, card2, card3]);
});

it('should know how many cards are in the deck', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  const deck = new Deck([card1, card2, card3]);
  expect(deck.countCards()).to.equal(3);
});

});
