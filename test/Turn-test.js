const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {

  beforeEach( () => {
  card = new Card({
    id: 1,
    question: `A score of one better than par on a golf hole is called what?`,
    answers: ['birdie', 'bogey', 'eagle'],
    correctAnswer: 'birdie',
  });

  turn = new Turn();
});

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
   });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a returnGuess method', function() {
   expect(turn.returnGuess).to.be.a('function');
 });

  it('should have a returnCard method', function() {
  expect(turn.returnCard).to.be.a('function');
});

  it('should have a evaluateGuess method', function() {
 expect(turn.evaluateGuess).to.be.a('function');
});

  it('should have a giveFeedback method', function() {
 expect(turn.giveFeedback).to.be.a('function');
});



});
