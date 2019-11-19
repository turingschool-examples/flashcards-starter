const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {

  beforeEach( () => {
  card = new Card({id: 1,
    question: `A score of one better than par on a golf hole is called what?`,
    answers: ['birdie', 'bogey', 'eagle'],
    correctAnswer: 'birdie'});

  turn = new Turn('pug', card);
});

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
   });

  it('should be an instance of Turn', function() {
    // const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should have a returnGuess method', function() {
   expect(turn.returnGuess).to.be.a('function');
 });

  it.skip('should have a returnCard method', function() {
  expect(turn.returnCard).to.be.a('function');
});

  it.skip('should have a evaluateGuess method', function() {
 expect(turn.evaluateGuess).to.be.a('function');
});

  it.skip('should have a giveFeedback method', function() {
 expect(turn.giveFeedback).to.be.a('function');
});



});
