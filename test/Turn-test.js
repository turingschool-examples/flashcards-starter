const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    const turn = new Turn('cats');
    expect(turn.userGuess).to.equal('cats');
  });

  it('should store a card\'s id', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.card.id).to.equal(1);
  });

  it('should return a guess', function() {
    const card = new Card(7, 'What is the fastest animal on Earth',
      ['road runner', 'cheetah', 'elephant'], 'cheetah');
    const turn = new Turn('cheetah', card);
    expect(turn.returnGuess()).to.equal('cheetah');
  });

  it('should return a card', function() {
    const card = new Card(1, 'What is Andrew\'s favorite animal',
      ['wolf', 'bear', 'monkey'], 'wolf');
    const turn = new Turn('bear', card);
    expect(turn.returnCard()).to.eql({
      id: 1,
      question: 'What is Andrew\'s favorite animal',
      answers: ['wolf', 'bear', 'monkey'],
      correctAnswer: 'wolf'
    });
  });

  it('should evaluate guess', function() {
    const card = new Card(13, 'What is Cindy\'s dog\'s name?', ['Alfredo',
      'Bonnie Rae', 'Waylon'], 'Bonnie Rae');
    const turn = new Turn('Alfredo', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', function() {
    const card = new Card(34, 'What pet do I want for my birthday?', ['bunny',
      'puppy', 'bird'], 'bunny');
    const turn = new Turn('puppy', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});
