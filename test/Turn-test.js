const expect = require('chai').expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  const card1 = new Card(1, "What is a cat?", ['flower', 'animal', 'food'], 'animal');
  const card2 = new Card(2, "What is a sandwich?", ['flower', 'animal', 'food'], 'food');

  const turn1 = new Turn('flower', card1);
  const turn2 = new Turn('Food', card2);

  it(' should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it(' should be an object instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it(' should store a user guess', function() {
    expect(turn1.userGuess).to.equal('flower');
  });

  it(' should store the current card', function() {
    expect(turn1.currentCard).to.deep.equal(card1);
  });

  it(' should have a method that returns the user guess', function() {
    expect(turn1.returnGuess).to.be.a('function');

    expect(turn1.returnGuess()).to.equal('flower');
    expect(turn2.returnGuess()).to.equal('Food');
  });

  it(' should have a method that returns the current card', function() {
    expect(turn1.returnCard).to.be.a('function');

    expect(turn1.returnCard()).to.equal(card1);
    expect(turn2.returnCard()).to.equal(card2);
  });

  it(' should compare the user guess against the card\'s correct answer', function() {
    expect(turn1.evaluateGuess).to.be.a('function');

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it(' should provide feedback on user\'s guess', function() {
    expect(turn1.giveFeedback).to.be.a('function');
    
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
})