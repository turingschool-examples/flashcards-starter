const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const util = require('../src/util');
const testData = require('../src/testData');

describe('Game', function() {

  let currentGame = Object.prototype;

  this.beforeEach(() => {
    currentGame = new Game();
    currentGame.createCards(testData);
    currentGame.putCardsInDeck();
    currentGame.createNewRound();
  });

  // Tests on lines 25 - 75 are nearly identical to round tests, but added them to test that
  // I am meeting the "Should keep track of the currentRound" rubric requirement in the Game class
  // Do I really need these though?

  it('currentRound should keep track of turns taken', function() {
    currentGame.currentRound.takeTurn('Incorrect guess', currentGame.currentRound.currentCard);
    currentGame.currentRound.takeTurn('array', currentGame.currentRound.currentCard);
    currentGame.currentRound.takeTurn('Another incorrect guess', currentGame.currentRound.currentCard);

    expect(currentGame.currentRound.turns).to.equal(3);
  });

  it('the next card should become the current card in currentRound after a guess is made', function() {
    currentGame.currentRound.takeTurn('This is a guess', testData[0]);

    expect(currentGame.currentRound.currentCard).to.deep.equal(currentGame.currentRound.deck[1]);
  });

  it('currentRound should store correct guesses in an array with the card id', function() {
    currentGame.currentRound.takeTurn('array', testData[1]);

    expect(currentGame.currentRound.correctGuesses.length).to.equal(1);
  });

  it('currentRound should store incorrect guesses in an array seperate from guesses with card id', function() {
    currentGame.currentRound.takeTurn('This is an incorrect guess', testData[0]);

    expect(currentGame.currentRound.incorrectGuesses.length).to.equal(1);
  });

  it('currentRound should evaluate guesses and provide the user feedback on whether thier guess was correct or not', function() {
    const incorrectGuess = currentGame.currentRound.takeTurn('incorrect', testData[0]);
    const correctGuess = currentGame.currentRound.takeTurn('array', testData[1]);

    expect(incorrectGuess).to.equal(`incorrect!`);
    expect(correctGuess).to.equal(`correct!`);
  });

  it('currentRound should have a method that calculates and returns the percentage of correct guesses', function() {
    currentGame.currentRound.takeTurn('Incorrect guess', testData[0]);
    currentGame.currentRound.takeTurn('array', testData[1]);
    currentGame.currentRound.takeTurn('Another incorrect guess', testData[2]);

    expect(currentGame.currentRound.calculatePercentCorrect()).to.equal(1/3);
  });

  it('currentRound should have a method that prints the a string to the console saying the round is over and the % of correctly answered questions', function() {
    currentGame.currentRound.takeTurn('Incorrect guess', testData[0]);
    currentGame.currentRound.takeTurn('array', testData[1]);
    currentGame.currentRound.takeTurn('Another incorrect guess', testData[2]);

    expect(currentGame.currentRound.endRound()).to.equal("** Round over! ** You answered 33% of the questions correctly!");
  });

  // These tests are testing the methods I broke out to test in the Game.start() method

  it('should create instances of Cards', function() {
    expect(currentGame.cards[0]).is.an.instanceOf(Card);
  });

  it('should put instances of Cards in a Deck', function() {
    expect(currentGame.deck).is.an.instanceOf(Deck);
  });

  it('should create a new instance of Round using the Deck', function() {
    expect(currentGame.currentRound).is.an.instanceOf(Round);
  });

});