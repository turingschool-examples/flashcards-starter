const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const testCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turns = new Turn();
    expect(turns).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turns = new Turn('The ides of March.');
    expect(turns.guess).to.equal('The ides of March.');
  }); 
    
  it('should store a card', function() {
    const turns = new Turn('The ides of March.', testCard);
    expect(turns.card).to.equal(testCard);
  });  
  
  it('should return a guess', function() {
    const turns = new Turn('The ides of March.', testCard);
    expect(turns.returnGuess()).to.equal('The ides of March.');
  })

  it('should return undefined  if there is no guess', function() {
    const turns = new Turn();
    expect(turns.returnGuess()).to.equal(undefined);
  })

  it('should return a card', function() {
    const turns = new Turn('The ides of March.', testCard);
    expect(turns.returnCard()).to.equal(testCard);
  })

  it('should evaluate a guess', function() {
    const turns = new Turn('The ides of March.', testCard);
    expect(turns.evaluateGuess()).to.equal(false);
  })
  
  it('should return feedback', function() {
    const turns = new Turn('The ides of March.', testCard);
    expect(turns.giveFeedback()).to.equal('correct!');
  })
});