const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Card', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a user guess', function() {
    const exampleGuess = "peanut";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.guess).to.equal('peanut');
  });

  it.skip('should store a card', function() {
    const exampleGuess = "peanut";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.card).to.equal(exampleCard);
  });

  it.skip('should have a method that returns the guess', function() {
    const exampleGuess = "peanut";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.returnGuess).to.equal(exampleGuess);
  });

  it.skip('should have a method that returns the card', function() {
    const exampleGuess = "peanut";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.returnCard).to.equal(exampleCard);
  });

  it.skip('should have a method that returns true if the guess matches the correct answer', function() {
    const exampleGuess = "peanut";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.evaluateGuess).to.equal(true);
  });

  it.skip('should give feedback about answer', function() {
    const exampleGuess = "peanut";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.giveFeedback).to.equal("correct!");
  });

  it.skip('should give negative feedback about answer if wrong', function() {
    const exampleGuess = "apple";
    const exampleCard = new Card(1, "What is a legume", ["apple", "pear", "peanut"], "peanut");
    const turn = new Turn(exampleGuess, exampleCard);
    expect(turn.giveFeedback).to.equal("incorrect!");
  });

});
