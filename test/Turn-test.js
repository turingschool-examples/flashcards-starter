const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should keep track of the user\'s guess', function() {
  })

  it.skip('should keep track of the current card at play', () => {
  })

  it.skip('should return the user\'s guess', () => {
    //this is a method
  })

  it.skip('should evaluate if the guess is correct', () => {
    //this is a method, evaluate to a boolean of true or false
  })

  it.skip('should return correct or incorrect based on user guess', () => {
    //this is a method
  })
})
