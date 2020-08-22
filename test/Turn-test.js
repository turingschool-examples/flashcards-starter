const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a guess', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
  });

  it('should return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.returnCard()).to.equal(turn.card)
  });

  // it('should be able to return any card', function() {
  //   const turn = new Turn();
  //   const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   expect(turn.returnCard(card2)).to.equal(card2)
  // });

  // it('should be able to evaluate a guess', function() {
  //   const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const turn = new Turn('sea otter', card2);
  // });

  it('should return the correct message based on correct or incorrect guess', function(){
    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card2);
    expect(turn.giveFeedback()).to.equal('correct!')
  })















});
