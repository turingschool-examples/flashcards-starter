const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const dataSet = require('../src/data');

describe('Round', function() {

  let testRound = Object.prototype;
  let testCards = Object.prototype;

  this.beforeEach(() => {
    testCards = dataSet.prototypeData;
    testRound = new Round(testCards);
  });

  it('should have a current card that starts with the first card at the start of a round', function() {
    expect(testRound.currentCard).to.equal(testCards[0]);
  });

  it('should have a method to return the current card being played', function() {
    testRound.currentCard = testCards[3];

    expect(testRound.returnCurrentCard()).to.equal(dataSet.prototypeData[3])
  });

  it('should have a method to update turns count regardless of if the guess was correct', function() {
    testRound.takeTurn('Incorrect guess', testCards[0]);
    testRound.takeTurn('array', testCards[1]);
    testRound.takeTurn('Another incorrect guess', testCards[2]);

    expect(testRound.turns).to.equal(3);
  });

  it('the next card should become the current card after a guess is made', function() {
    testRound.takeTurn('This is a guess', testCards[0]);

    expect(testRound.currentCard).to.equal(testCards[1]);
  });

  it('should store correct guesses in an array with the card id', function() {
    testRound.takeTurn('array', testCards[1]);

    expect(testRound.correctGuesses.length).to.equal(1);
  })

  it('should store incorrect guesses in an array seperate from guesses with card id', function() {
    testRound.takeTurn('This is an incorrect guess', testCards[0]);

    expect(testRound.incorrectGuesses.length).to.equal(1);
  });

  it('should evaluate guesses and provide the user feedback on whether thier guess was correct or not', function() {
    const incorrectGuess = testRound.takeTurn('incorrect', testCards[0]);
    const correctGuess = testRound.takeTurn('array', testCards[1]);

    expect(incorrectGuess).to.equal(`incorrect!`);
    expect(correctGuess).to.equal(`correct!`);
  })

  it('should have a method that calculates and returns the percentage of correct guesses', function() {
    testRound.takeTurn('Incorrect guess', testCards[0]);
    testRound.takeTurn('array', testCards[1]);
    testRound.takeTurn('Another incorrect guess', testCards[2]);

    expect(testRound.calculatePercentCorrect()).to.equal(1/3);
  });

  it('should have a method that prints the a string to the console saying the round is over and the % of correctly answered questions', function() {
    testRound.takeTurn('Incorrect guess', testCards[0]);
    testRound.takeTurn('array', testCards[1]);
    testRound.takeTurn('Another incorrect guess', testCards[2]);

    expect(testRound.endRound()).to.equal("** Round over! ** You answered 33% of the questions correctly!");
  });
});