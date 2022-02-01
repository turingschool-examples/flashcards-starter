// file dependencies
const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

// global testing variables

const card1 = new Card(
  1,
  "What is Robbie's favorite animal",
  ['sea otter', 'pug', 'capybara'],
  'sea otter'
);
const card2 = new Card(
  14,
  'What organ is Khalid missing?',
  ['spleen', 'appendix', 'gallbladder'],
  'gallbladder'
);
const card3 = new Card(
  12,
  "What is Travis's favorite stress reliever?",
  ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
  'playing with bubble wrap'
);

const deck = new Deck([card1, card2, card3]);
const round = new Round(deck);

// tests

it('should be a function', () => {
  expect(Round).to.be.a('function')
})

it('should instantiate the Round class', () => {
  expect(round).to.be.an.instanceof(Round)
})

it('should have a method called \'returnCurrentCard\'', () => {
  expect(round.returnCurrentCard).to.be.a('function')
})

it('returnCurrentCard should return the current card object', () => {
  expect(round.returnCurrentCard()).to.equal(deck.cards[round.turns])
})

it('should have a method called \'takeTurn\'', () => {
  expect(round.takeTurn).to.be.a('function')
})

it('takeTurn should end by returning positive feedback if the guess was correct', () => {
  expect(round.takeTurn('sea otter')).to.equal('correct!')
}) 

it('takeTurn should end by returning negative feedback if the guess was incorrect', () => {
  expect(round.takeTurn('wrong answer')).to.equal('incorrect!');
}); 
