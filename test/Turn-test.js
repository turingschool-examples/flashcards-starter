const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')

describe('Turn', function() {

  it('shoulb be a function', function() { 
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
});


// This are the first test that need to be written:

// it should be instantiated with a user's guess
// it should be instantiated with the current card at play 


// Write test for the following methods:
//
// it should return the user's guess 
    // turn.returnGuess() use expect or assert to check if the function returns the user's guess

// it should return the current card at play 
    // turn.returnCard expect to equal the current card at play

//  it should evaluate the user's guess
    //turn.evaluateGuess should equal true if the guess is the cards correct answer
    //this will be split into two test one to check for true conditions 
    //  and a second test to check for falsey conditions

//  it should give feedback
    // An extension on the previous test to check for a respective statement to be displayed to the 
    // user depending on wether their answer is correct or not.
    // again split into two test
