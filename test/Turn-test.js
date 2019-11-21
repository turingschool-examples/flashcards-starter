const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {
  let turn;
  let card;

  beforeEach( () => {
  card = new Card({
    id: 1,
    question: `A score of one better than par on a golf hole is called what?`,
    answers: ['birdie', 'bogey', 'eagle'],
    correctAnswer: 'birdie',
  });

  turn = new Turn('user\'s guess', card);

  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
   });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a card object and a user\'s guess', function() {
    expect(turn.guess).to.equal('user\'s guess');
    expect(turn.card).to.equal(card);
    expect(turn.card.question).to.equal(`A score of one better than par on a golf hole is called what?`);
    expect(turn.card.answers).to.deep.equal(['birdie', 'bogey', 'eagle']);
    expect(turn.card.correctAnswer).to.equal('birdie');
  });

  it('should have a returnGuess method', function() {
   expect(turn.returnGuess).to.be.a('function');
 });

  it('turn.returnGuess() should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.deep.equal('user\'s guess');
  });

  it('should have a returnCard method', function() {
  expect(turn.returnCard).to.be.a('function');
});

  it('turn.returnCard() should return the card obj', function() {
  expect(turn.returnCard()).to.deep.equal(card);
});

  it('should have a evaluateGuess method', function() {
 expect(turn.evaluateGuess).to.be.a('function');
});

  it('turn.evaluateGuess() should return false based on the user\'s guess', function() {
    expect(turn.evaluateGuess()).to.deep.equal(false)
  });

  it('turn.evaluateGuess() should return true if the user\'s guess is correct', function() {
    var turn2 = new Turn('birdie', card);
    expect(turn2.evaluateGuess()).to.deep.equal(true)
  });

  it('should have a giveFeedback method', function() {
 expect(turn.giveFeedback).to.be.a('function');
});

  it('turn.giveFeedback() should return a string of \'incorrect!\' or \'correct!\' based on the user\'s guess', function() {
    expect(turn.giveFeedback()).to.deep.equal('incorrect!')
    let turn2 = new Turn('birdie', card);
    expect(turn2.giveFeedback()).to.deep.equal('correct!')
  })

});
