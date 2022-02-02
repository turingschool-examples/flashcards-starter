const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Turn = require('../src/turn');


describe('Turn', function() {
  let card = null;
  let turn = null;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card)
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a guess', () => {
    expect(turn.playerGuess).to.equal('object');
  });

  it('should return the current guess', () => {
    expect(turn.returnGuess()).to.equal('object')
  })

  it('should store the current card', () => {
    turn.returnCard(card);

    expect(turn.currentCard).to.deep.equal(card)
  })

  it('should return a boolean indicating if the users guess matches the correct answer', () => {
    expect(turn.evaluateGuess()).to.equal(true)
  })

  it('Should return either incorrect! or correct! based on whether the guess is correct', () => {
    turn.giveFeedback()
  })

});
