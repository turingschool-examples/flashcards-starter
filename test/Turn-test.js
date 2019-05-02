const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should get a new card and accept a user guess', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(card).to.be.an.instanceof(Card);
    // expect(card).to.equal(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    expect(turn.guess).to.equal('pug');
  });

  it("should return the guess", function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess).to.be.a('function'); 
    turn.returnGuess('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard).to.be.a('function');
    turn.returnCard(card);
    expect(turn.card).to.equal(card);
  });

  it('should determine whether or not the guess is correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess).to.be.a('function');
    turn.evaluateGuess('pug');
    expect(turn.isCorrect).to.equal(false);
  });

  it('should give the user feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.giveFeedback).to.be.a('function');
    turn.giveFeedback()
    expect()
  })


});


