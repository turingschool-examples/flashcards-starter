const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess to the question', function() {
    const turn = new Turn('a')

    expect(turn.userGuess).to.equal('a');
  })

  it('should return the user\'s guess', function() {
    const turn = new Turn('b')

    expect(turn.returnGuess()).to.equal('b');
  })
});

