const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const testData = require('../src/testData');

describe('Game', function() {

  let currentGame;

  this.beforeEach(() => {
    currentGame = new Game();
    currentGame.createCardDeckRound(testData.cards);
  });

  it('should create instances of Cards', function() {
    expect(currentGame.currentRound.deck.cards[2]).is.an.instanceOf(Card);
  });

  it('should put instances of Cards in a Deck', function() {
    expect(currentGame.currentRound.deck).is.an.instanceOf(Deck);
  });

  it('should create a new instance of Round using the Deck', function() {
    expect(currentGame.currentRound).is.an.instanceOf(Round);
  });

  it('currentRound should keep track of turns taken', function() {
    currentGame.currentRound.takeTurn('Incorrect guess', currentGame.currentRound.currentCard);
    currentGame.currentRound.takeTurn('array', currentGame.currentRound.currentCard);
    currentGame.currentRound.takeTurn('Another incorrect guess', currentGame.currentRound.currentCard);
    expect(currentGame.currentRound.turns).to.equal(3);
  });

  it('should make the next card become the current card in currentRound after a guess is made', function() {
    currentGame.currentRound.takeTurn('This is a guess');
    expect(currentGame.currentRound.currentCard).to.deep.equal(currentGame.currentRound.deck.cards[1]);
  });

  it('currentRound should store correct guesses in an array with the card id', function() {
    currentGame.currentRound.currentCard = testData.cards[3];
    currentGame.currentRound.takeTurn('accessor method');
    expect(currentGame.currentRound.correctGuesses.length).to.equal(1);
  });

  it('currentRound should store incorrect guesses in an array separate from guesses with card id', function() {
    currentGame.currentRound.takeTurn('This is an incorrect guess');
    expect(currentGame.currentRound.incorrectGuesses.length).to.equal(1);
  });

  it('currentRound should evaluate guesses and provide the user feedback on whether their guess was correct or not', function() {
    const incorrectGuess = currentGame.currentRound.takeTurn('incorrect');
    const correctGuess = currentGame.currentRound.takeTurn('array');
    expect(incorrectGuess).to.equal(`incorrect!`);
    expect(correctGuess).to.equal(`correct!`);
  });

  it('currentRound should have a method that calculates and returns the percentage of correct guesses', function() {
    currentGame.currentRound.takeTurn('Incorrect guess');
    currentGame.currentRound.takeTurn('array');
    currentGame.currentRound.takeTurn('Another incorrect guess');
    expect(currentGame.currentRound.calculatePercentCorrect()).to.equal(1/3);
  });

  it('should show round duration in only seconds if a user finishes the game in less than a minute', function() {
    currentGame.currentRound.takeTurn('Incorrect guess');
    currentGame.currentRound.takeTurn('array');
    currentGame.currentRound.takeTurn('Another incorrect guess');
    expect(currentGame.currentRound.endRound()).to.equal("** Round over! ** You answered 33% of the questions correctly! Total round duration: 0 seconds");
  });
});