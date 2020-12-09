const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(function() {
    card = new Card(1, 'Question 1', ['no', 'nope', 'yes'], 'yes');
    turn = new Turn('yes', card);
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should know the user\'s guess', function() {
    expect(turn.userGuess).to.equal('yes');
  });

  it('should know the current card', function() {
    expect(turn.card).to.deep.equal(card);
  })

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal('yes');
  });

  it('should return a card', function() {
    expect(turn.returnCard()).to.deep.equal({id: 1, question: 'Question 1', answers: ['no', 'nope', 'yes'], correctAnswer: 'yes'});
  });

  it('should evaluate a user\'s guess correctly', function() {
    expect(turn.evaluateGuess()).to.equal(true);
    const turn2 = new Turn('yikes', card);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return correct feedback based on evaluation', function() {
    expect(turn.giveFeedback()).to.equal('correct!');
    const turn2 = new Turn('yikes', card);
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
