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

it('should keep track of turns taken', function() {
  currentGame.currentRound.takeTurn('Incorrect guess', currentGame.currentRound.currentCard);
  currentGame.currentRound.takeTurn('array', currentGame.currentRound.currentCard);
  currentGame.currentRound.takeTurn('Another incorrect guess', currentGame.currentRound.currentCard);

  expect(currentGame.currentRound.turns).to.equal(3);
});

// I think I will need to be creating tests similar to those in the Round-test
// here to make sure currentGame.currentRound is keeping track of the round.

it('the next card should become the current card after a guess is made', function() {
  currentGame.currentRound.takeTurn('This is a guess', testData[0]);

  expect(currentGame.currentRound.currentCard).to.deep.equal(currentGame.currentRound.deck[1]);
});

it('should store correct guesses in an array with the card id', function() {
  testRound.takeTurn('array', testData[1]);

  expect(testRound.correctGuesses.length).to.equal(1);
});

it.skip('should store incorrect guesses in an array seperate from guesses with card id', function() {
  testRound.takeTurn('This is an incorrect guess', testData[0]);

  expect(testRound.incorrectGuesses.length).to.equal(1);
});

});