const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn('capybara', new Card(1, 'What is the best rodent?', ['rat', 'chipmunk', 'capybara'], 'capybara'));
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should have a guess', () => {
    expect(turn.guess).to.equal('capybara');
  });

  it('should have an instance of Card', () => {
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should check if guess matches answer', () => {
    expect(turn.evaluateGuess()).to.equal(true);

    turn.guess = 'rat'

    expect(turn.evaluateGuess()).to.equal(false);
  });
});