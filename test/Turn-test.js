const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turn');

describe('Turns', function() {

  it('should be a function', function() {
    const turns = new Turns();
    expect(turns).to.be.a('function');
  });

  it('should be an instance of Turns', function() {
    const turns = new Turns();
    expect(turns).to.be.an.instanceof(Turns);
  }); 

  it('should be instantiated with two arguments', function() {
    const turns = new Turns('blah', card);
    expect(turns.userGuess).to.equal('blah');
    expect(turns.currentCard).to.equal(card);
  });  

  it('should have a method that returns the guess', function() {
    const turns = new Turns(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turns.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should have a method that returns the Card', function() {
    const turns = new Turns(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turns.correctAnswer).to.equal('object');
  });

  it('should have a method that returns a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    const turns = new Turns(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turns.correctAnswer).to.equal('object');
  });

  it('should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const turns = new Turns(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turns.correctAnswer).to.equal('object');
  });
});