const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn1;

  beforeEach(function() {
    card = new Card(1, 'Question 1', ['no', 'nope', 'yes'], 'yes')
    turn1 = new Turn('yes', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should return a guess', function() {
    expect(turn1.returnGuess()).to.equal('yes');
  });

  it('should return a card', function() {
    expect(turn1.returnCard()).to.deep.equal({id: 1, question: 'Question 1', answers: ['no', 'nope', 'yes'], correctAnswer: 'yes'});
  });

  it('should evaluate a user\'s guess correctly', function() {
    expect(turn1.evaluateGuess()).to.equal(true);
    const turn2 = new Turn('yikes', card);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return correct feedback based on evaluation', function() {
    expect(turn1.giveFeedback()).to.equal('correct!');
    const turn2 = new Turn('yikes', card);
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
