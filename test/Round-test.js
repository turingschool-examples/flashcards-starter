const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  
  it('should be a function', () => {
    const round = new Round();
    expect(round).to.be.a('function');
  });
  // should the current card being played
    // setup: instantiate a new round, and card, turn
    // execution: call the return current card method
    //  assertion: assert that the output from the current card method
    //  is equal to the card passed in 
    it('should return the current card', () => {

    });
    //  take turn method
    // it should update the turns count 
    // setup: instantiate card turn round classes
    // execution: run the update turn method
    //  assertion: check if round.turns is been incremented 
    it('should update turns count', () => {});
    
    // it should evaluate guesses,
      // setup: instantiate the round turn and card class
      // execution: run the take turn method
      // assertion: check if the guess has been evaluated
    it('should evaluate guesses', () => {});

    // it should give feedback,
      // setup: instantiate the round, turn, card classes
      // execution: run the take turn method
      // assertion: assert if feed back has been given
    it('should evaluate guesses', () => {});
    
    // it should store id's of incorrect guesses in an array with the id.
      // setup: instantiate the round, turn, card classes
      //  execution: run the take turn method
      // assertion: assert if the id of incorrect guesses has been stored
    it('should store ids of incorrect guesses', () => {});

    // calculatePercentCorrect: method that calculates 
    // and returns the percentage of correct guesses
      // setup: instantiate the round card and turn classes
        // take a couple of turns  with correct and incorrect guesses
      // execution: run calculatePercentageCorrect():
      // assertion: the result is equal to the expected percentage
    it('should calculate and return the percentage of correct guesses', () => {});

    // endRound: method that prints the following to the console: 
    // ‘** Round over! ** You answered <>% of the questions correctly!’
    // setup: instantiate round, card, and turn classes
    // execution: take a couple of turns both with correct and incorrect
      // guesses
      // run the end round method
    // assertion: the following statement is logged to the console with the correct percentage:
      // ‘** Round over! ** You answered <>% of the questions correctly!’

});

/*
Your Round class should meet the following requirements:
returnCurrentCard: method that returns the current card being played
takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

When a guess is made, a new Turn instance is created.
The turns count is updated, regardless of whether the guess is correct or incorrect
The next card becomes current card
Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
Feedback is returned regarding whether the guess is incorrect or correct
calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
*/