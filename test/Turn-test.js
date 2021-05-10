const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.


// returnGuess: method that returns the guess


// returnCard: method that returns the Card


// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card


// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.










});