const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Game');
const Card = require('../src/Card')

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instance(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn();
    expect(turn.guess).to.equal('pug');
  });

  it('should store a card', function() {
    const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', newCard);
    expect(turn.card).to.deep.equal({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it('should return a guess', function() {
    const turn = new Turn('pug');
    expect(turn.returnGuess()).to.equal('pug')
  });

  it('should return a card', function() {
    const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', newCard);
    expect(turn,.returnCard()).to.equal(newCard);
  });

  it('should evaluate a guess', function() {
    const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turnTrue = new Turn('sea otter', newCard);
    const turnFalse = new Turn('pug', newCard);
    expect(turnTrue.evaluateGuess()).to.equal(true);
    expect(turnFalse.evaluateGuess()).to.equal(false);
  });

  it('should give feedback on the guess', function() {
    const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turnTrue = new Turn('sea otter', newCard);
    const turnFalse = new Turn('pug', newCard);
    expect(turnTrue.giveFeedback()).to.equal('correct!');
    expect(turnFalse.giveFeedback()).to.equal('incorrect!');
  });
});