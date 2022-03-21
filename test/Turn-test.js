const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

it('should take 2 arguments, a string and a card', function() {
  const card1 = new Card(1, "What is Matt's favorite color?", ["red", "blue", "yellow"],
"red")
  const turn1 = new Turn("blue", card1);
  expect(turn1.guess).to.equal("blue");
  expect(turn1.card).to.equal(card1)
});

it('should have a method which returns the guess', function() {
  const card1 = new Card(1, "What is Matt's favorite color?", ["red", "blue", "yellow"],
"red")
  const turn1 = new Turn("blue", card1);
  expect(turn1.returnGuess()).to.equal(turn1.guess)
});

it('should have a method which returns the card', function() {
  const card1 = new Card(1, "What is Matt's favorite color?", ["red", "blue", "yellow"],
"red")
  const turn1 = new Turn("blue", card1);
  expect(turn1.returnCard()).to.equal(card1)
})

it('should have a method which evaluates if the guess matches the correct answer', function() {
  const card1 = new Card(1, "What is Matt's favorite color?", ["red", "blue", "yellow"],
"red")
  const turn1 = new Turn("blue", card1);
  expect(turn1.evaluateGuess()).to.equal(false);
})

it('should have a method which returns either Correct or Incorrect based on the evaluateGuess method', function() {
  const card1 = new Card(1, "What is Matt's favorite color?", ["red", "blue", "yellow"],
"red")
  const turn1 = new Turn("blue", card1);
  expect(turn1.giveFeedback()).to.equal("Incorrect");
})

})
