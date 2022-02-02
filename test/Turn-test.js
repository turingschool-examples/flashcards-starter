const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn('Random users guess', Card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should keep track of the user\'s guess', function() {
    const turn = new Turn('Random users guess', Card);
    expect(turn.guess).to.equal('Random users guess');
  })

  it('should keep track of the current card at play', () => {
    const turn = new Turn('Random users guess', Card);
    expect(turn.currentCard).to.equal(Card);
  })

  it('should return the user\'s guess', () => {
    const turn = new Turn('Random users guess', Card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('Random users guess');
    //this is a method
  })

  it('should evaluate if the guess is correct', () => {
    const card = new Card (1, 'question', [], 'correct answer')
    const turn = new Turn('correct answer', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should evaluate if the guess is incorrect', () => {
    const card = new Card (1, 'question', [], 'correct answer')
    const turn = new Turn('incorrect answer', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should return correct or incorrect based on user guess', () => {
    const card = new Card (1, 'question', [], 'correct answer')
    const turn = new Turn('correct answer', card);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct!')

    const turn2 = new Turn('incorrect answer', card)
    turn2.evaluateGuess();
    turn2.giveFeedback();
    expect(turn2.giveFeedback()).to.equal('incorrect!')
    //this is a method
  })
})
