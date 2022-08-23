const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');

describe('Turn', function(){

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
      const turn = new Turn();
      expect(turn).to.be.an.instanceof(Turn);
  })

  it('should return a guess', function() {
    const turn = new Turn();
    turn.returnGuess('User guess')
    expect(turn.guess).to.equal('User guess')
  })

  it('should evaluate the guess', function() {
    const turn = new Turn();
    turn.evaluateGuess();
    expect(turn.evaluate).to.equal(true);
  })

  it('should give feedback', function() {
    const turn = new Turn();
    turn.giveFeedback('Correct!')
    expect(turn.feedback).to.equal('Correct!');
  })
})
