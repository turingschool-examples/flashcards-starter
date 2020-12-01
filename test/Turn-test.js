const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  //it should be a function
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  //it should be an instance of Turn
  //it should be instantiated with 2 arguments (userGuess, Card)
  //it should return the user's guess
  //it should return the Card
  //it should evaluate the guess to true if correct or false if incorrect
  //it should state whether the answer is correct or incorrect
});
