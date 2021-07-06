const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  beforeEach(() =>  {
    const card = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    turn = new Turn('array', card);
  })

  it('should be a function', function() {
    // console.log(turn);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', () => {

    expect(turn.guess).to.equal('array');
  });

  it('should store a card', () => {

    expect(turn.playedCard).to.deep.equal({
      'id': 2,
      'question': 'What is a comma-separated list of related values?',
      'answers': ['array', 'object', 'function'],
      'correctAnswer': 'array'
    })
  });

  it('should return the guess', () => {

    expect(turn.returnGuess()).to.equal('array')
  });

  it('should return the card', () => {

    expect(turn.returnCard()).to.deep.equal({
      'id': 2,
      'question': 'What is a comma-separated list of related values?',
      'answers': ['array', 'object', 'function'],
      'correctAnswer': 'array'
    })
  });

  it('should evaluate user guess with correct answer', () => {

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should a feedback based on the user guess', () => {

    expect(turn.giveFeedback()).to.equal("correct");
  });
});
