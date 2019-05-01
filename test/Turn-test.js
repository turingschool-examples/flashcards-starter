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
    const turn = new Turn('Peter', card);
    //console.log(turn);
    expect(turn.returnCard()).to.equal(card);
  });
  it('should return true/false based on guess', function() {
    const card = new Card(2, 'What is Travis\' middle name?', ['Fred', 'William', 'Peter'], 'Peter');
    const turn = new Turn('Lawrence', card);
    expect(turn.evaluateGuess('Peter')).to.equal(true);
    expect(turn.evaluateGuess('William')).to.equal(false);
  });
  it('should return correct/incorrect based on guess', function() {
    const card = new Card(2, 'What is Travis\' middle name?', ['Fred', 'William', 'Peter'], 'Peter');
    const turn = new Turn('Lawrence', card);
    expect(turn.giveFeedback('Peter')).to.equal('Correct!');
    expect(turn.giveFeedback('William')).to.equal('Incorrect!');
  });
});