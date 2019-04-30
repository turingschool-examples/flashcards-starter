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
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should accept guess and card object', function() {
    const card = new Card(1, 'What is Travis\' middle name?', ['Fred', 'William', 'Peter'], 'William');
    const turn = new Turn('William', card);
    expect(turn.returnGuess()).to.equal('William', );
  }); 
  it('should return card object', function() {
    const card = new Card(2, 'What is Travis\' middle name?', ['Fred', 'William', 'Peter'], 'William');
    const turn = new Turn('Lawrence', card);
    expect(turn.returnCard()).to.equal(card);
  });
});