const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

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

  it('should take in the current Card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Does this represents a user’s question?', card);
    expect(turn.currentCard).to.equal(card);
  });
});
