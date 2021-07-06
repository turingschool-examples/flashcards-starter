const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, card;
  beforeEach(() =>  {
    card = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    turn = new Turn('array', card);
  })

  it.skip('should be a function', function() {
    // console.log(turn);
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {

    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a guess', () => {

    expect(turn.guess).to.equal('array');
  });

  it.skip('should store a card', () => {

    expect(turn.playedCard).to.equal({
      'id': 2,
      'question': 'What is a comma-separated list of related values?',
      'answers': ['array', 'object', 'function'],
      'correctAnswer': 'array'
    })
  });

  it.skip('should return the guess', () => {

    expect(turn.returnGuess()).to.equal('array')
  });

  it.skip('should return the card', () => {

    expect(turn.returnCard()).to.equal({
      'id': 2,
      'question': 'What is a comma-separated list of related values?',
      'answers': ['array', 'object', 'function'],
      'correctAnswer': 'array'
    })
  });

  it.skip('should evaluate user guess with correct answer', () => {


    expect(turn.evaluateGuess()).to.equal(true);
  });

  it.skip('should a feedback based on the user guess', () => {

    // expect(turn.giveFeedback()).to.equal("Please select one option");

    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal("correct");
  });
});
