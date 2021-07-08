const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => { //do I need a parameter???
    card = new Card(
   1,
   "What is Robbie's favorite animal",
   ['sea otter', 'pug', 'capybara'],
   'sea otter'
 );
 turn = new Turn('pug', card);
});

it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

it('should instatiate to have two arguments', () => {
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

it('should return the guess', () => {
  expect(turn.returnGuess()).to.equal('pug');
  });

it('should return the card', () => {
  expect(turn.returnCard()).to.equal(card);
  });
