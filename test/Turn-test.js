const chai = require('chai');
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess', () => {
    const turn = new Turn('sea otter');
    expect(turn.guess).to.equal('sea otter');
  });  

  it('should store the current Card in play', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.card).to.equal(card);
  });  

  it('returnGuess should be a method that returns the user\'s guess', () => {
    const turn = new Turn('sea otter');
    expect(turn.returnGuess()).to.equal('sea otter');
  });  

  it('returnCard should be a method that returns the current card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.returnCard()).to.equal(card);
  });  

  it('evaluateGuess should be a method that returns true if the user\'s guess matches the correct answer', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.evaluateGuess()).to.be.boolean();
  });  

  it('evaluateGuess should be a method that returns false if the user\'s guess does not match the correct answer', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('kittens', card);
    expect(turn.evaluateGuess()).to.not.equal(true);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.evaluateGuess()).to.be.boolean();
  });  

  it('giveFeedback should be a method that returns a string if there\'s a correct answer', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');
  });  

  it('giveFeedback should be a method that returns a string if there\'s a correct answer', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('kittens', card);
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });  
});