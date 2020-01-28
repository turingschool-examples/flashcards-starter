const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  let turn, card;

  beforeEach(() => {

    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to guess an answer', function() {
    expect(turn.guess).to.equal('pug', card);
  });

  it('should be able to return a card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should store a guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  describe('validate get feedback', function() {

    it('should say if guess is correct', function() {
      const turn = new Turn('sea otter', card);
      expect(turn.giveFeedback()).to.equal('Correct!');
      });
  
    it('should say if guess is incorrect', function() {
      expect(turn.giveFeedback()).to.equal('Incorrect!');
      });
  });

  describe('validate your guess', function() {

    it('should be able to tell you if your guess is right', function() {
      const turn = new Turn('sea otter', card);
      expect(turn.evaluateGuess()).to.equal(true);
      });
  
    it('should be able to tell you if your guess is wrong', function() {
      expect(turn.evaluateGuess()).to.equal(false);
      });
  });
});