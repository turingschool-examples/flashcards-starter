const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card1
  let turn
  beforeEach(() => {
     card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter');
      turn = new Turn('pug', card1);
  });

  it('should be a function', () => {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take take in a guess', () => {
    const turn = new Turn('Does this represents a user’s question?');

    expect(turn.guess).to.equal('Does this represents a user’s question?');
  });

  it('should take in take in a user’s guess', () => {
    expect(turn.guess).to.equal('pug');
  });

  it('should take in the current Card', () => {
    expect(turn.currentCard).to.equal(card1);
  });

  it('should be able to return guess', () => {
    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('should be able to evaluate guess', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to give correct as feedback', () => {
    const turn = new Turn('sea otter', card1);

    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should be able to give incorrect as feedback', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
