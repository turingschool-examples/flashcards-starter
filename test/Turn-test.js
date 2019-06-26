const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should accept a guess', function() {
    const turn = new Turn('My Guess');
    expect(turn.guess).to.equal('My Guess');
  });  

  it('should accept a card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(card).to.equal(turn.card);
  });  

  it('should return the guess', function() {
    const card = new Card(1, 'What is Jacob\'s favorite animal?', ['dolphin', 'dog', 'monkey'], 'dolphin');
    const turn = new Turn('cat', card);
    expect(turn.returnGuess()).to.equal('cat');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What is Jacob\'s favorite animal?', ['dolphin', 'dog', 'monkey'], 'dolphin');
    const turn = new Turn('cat', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.giveFeedback(card)).to.equal('correct!');
  }); 
});