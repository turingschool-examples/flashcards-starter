const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const dataSet = require('../src/data');
const Turn = require('../src/Turn');

describe('Round', function() {

  let testRound = Object.prototype;
  let testCards = Object.prototype;
  let currentTurn = Object.prototype;

  this.beforeEach(() => {
    testCards = dataSet.prototypeData.filter(card => {
      return card.id % 4 === 0;
    });
  });

  it('should have a current card that starts with the first card at the start of a round', function() {
    testRound = new Round();
    expect(testRound.currentCard).to.equal(dataSet.prototypeData[0]);
  });

  it('should have a method to return the current card being played', function() {
    testRound = new Round(3);
    expect(testRound.returnCurrentCard(currentTurn)).to.equal(dataSet.prototypeData[3])
  });

  it.skip('should have a method to update turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function() {
    // call it "takeTurn"
    // Wow, this is a tough one. This is going to need to bring in the other classes and update thier values.
    // Will need to have a constructor for turns count which is updated whether its correct or not.
    // Will need to move to the next card in the deck.
    // Guess will need to be an argument and passed in to the Turn class to evaluate.
    // Guess will need to be stored in a constructor
    // Feedback returned via the turn.evaluateGuess and .giveFeedback methods
    expect()
  });

  it.skip('should have a method that calculates and returns the percentage of correct guesses', function() {
    // call it "calculatePercentCorrect"
    // Will need to record the amount of correct vs incorrect gusses, I think via the turn.evaluate guess method

  });

  it.skip('should have a method that prints the a string to the console saying the round is over and the % of correctly answered questions', function() {
    // call it "endRound"
    // Uses above % correct method and interpolates it in to a string of "** Round over! ** You answered <>% of the questions correctly!"

  });

})