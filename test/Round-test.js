const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const testData = require('../src/testData');

describe('Round', function() {

  let testRound = Object.prototype;

  this.beforeEach(() => {
    testRound = new Round(testData);
  });

  it('should have a current card that starts with the first card at the start of a round', function() {
    expect(testRound.currentCard).to.deep.equal(testData.cards[0]);
  });

  it('should have a method to return the current card being played', function() {
    testRound.currentCard = testData.cards[3];

    expect(testRound.returnCurrentCard()).to.deep.equal(testData.cards[3])
  });

  it('should have a method to update turns count regardless of if the guess was correct', function() {
    testRound.takeTurn('Incorrect guess', testData.cards[0]);
    testRound.takeTurn('array', testData.cards[1]);
    testRound.takeTurn('Another incorrect guess', testData.cards[2]);

    expect(testRound.turns).to.equal(3);
  });

  it('the next card should become the current card after a guess is made', function() {
    testRound.takeTurn('This is a guess', testData.cards[0]);

    expect(testRound.currentCard).to.equal(testData.cards[1]);
  });

  it('should store correct guesses in an array with the card id', function() {
    testRound.currentCard = testData.cards[2];
    testRound.takeTurn("mutator method");

    expect(testRound.correctGuesses[0]).to.equal(3);
  });

  it('should store incorrect guesses in an array seperate from guesses with card id', function() {
    testRound.currentCard = testData.cards[4];
    testRound.takeTurn('This is an incorrect guess');

    expect(testRound.incorrectGuesses[0]).to.equal(5);
  });

  it('should evaluate guesses and provide the user feedback on whether thier guess was correct or not', function() {
    const incorrectGuess = testRound.takeTurn('incorrect');
    const correctGuess = testRound.takeTurn('array');

    expect(incorrectGuess).to.equal(`incorrect!`);
    expect(correctGuess).to.equal(`correct!`);
  });

  it('should have a method that calculates and returns the percentage of correct guesses', function() {
    testRound.takeTurn('Incorrect guess');
    testRound.takeTurn('array');
    testRound.takeTurn('Another incorrect guess');

    expect(testRound.calculatePercentCorrect()).to.equal(1/3);
  });

  it('should have a method that prints the a string to the console saying the round is over and the % of correctly answered questions', function() {
    testRound.takeTurn('Incorrect guess');
    testRound.takeTurn('array');
    testRound.takeTurn('Another incorrect guess');

    expect(testRound.endRound()).to.equal("** Round over! ** You answered 33% of the questions correctly!");
  });
});