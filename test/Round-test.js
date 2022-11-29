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
    testRound = new Round();
    currentTurn = new Turn();
  });

  it('should have a current card that starts with the first card at the start of a round', function() {
    expect(testRound.currentCard).to.equal(dataSet.prototypeData[0]);
  });

  it('should have a method to return the current card being played', function() {

    testRound.currentCard = testCards[3];

    expect(testRound.returnCurrentCard()).to.equal(dataSet.prototypeData[15])
  });

  it('when a guess is made a new Turn instance is created', function() {

    testRound.takeTurn('This is a guess', testCards[3]);

    expect(testRound.turns[0]).to.be.an.instanceOf(Turn);
  })

  it('should have a method to update turns count regardless of if the guess was correct', function() {

    testRound.takeTurn();
    testRound.takeTurn();
    testRound.takeTurn();

    expect(testRound.turns.length).to.equal(3);
  });

  it.skip('the next card should become the current card after a guess is made', function() {
    // Will need to move to the next card in the deck.
    testRound.takeTurn('This is a guess', testCards[3]);

    expect(testRound.currentCard).to.equal(testCards[4]);
  })

  it.skip('should have a method that evaluates guesses', function() {
    // Guess will need to be an argument and passed in to the Turn class to evaluate.
    // Guess will need to be stored in a constructor

  })



    // Feedback returned via the turn.evaluateGuess and .giveFeedback methods
    

  it.skip('should have a method that calculates and returns the percentage of correct guesses', function() {
    // call it "calculatePercentCorrect"
    // Will need to record the amount of correct vs incorrect gusses, I think via the turn.evaluate guess method

  });

  it.skip('should have a method that prints the a string to the console saying the round is over and the % of correctly answered questions', function() {
    // call it "endRound"
    // Uses above % correct method and interpolates it in to a string of "** Round over! ** You answered <>% of the questions correctly!"

  });

})