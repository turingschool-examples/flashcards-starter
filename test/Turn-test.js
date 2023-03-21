const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let guess;
  let card;
  let turn;

  beforeEach('setup', () => {
    console.log('checking')
    turn = new Turn(guess, card)
  })

  it('should be a function', () => {
    turn = new Turn()

     expect(Turn).to.be.a('function')
  })

  it('should instantiate turn', () => {
    turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should store a users guess and card', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn('sea otter', card);

    expect(turn.guess).to.equal('sea otter')
    expect(turn.card).to.deep.equal({
      'id': 1,
      'question': 'What is Robbie\'s favorite animal',
      'answers': ['sea otter', 'pug', 'capybara'],
      'correctAnswer': 'sea otter'
    })
  })

  it('should have a return guess method that returns guess', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn('sea otter', card);

    expect(turn.returnGuess()).to.deep.equal(turn.guess)

  })

  it('should have a return card method to return instance of card', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn('sea otter', card);

    expect(turn.returnCard()).to.deep.equal(turn.card)
  })

  it.skip('should have a method that returns a boolean indicating if the users guess matches the correct answer on the card', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.deep.equal(true)
  })

  it.skip('giveFeedback should be a method that can return a string of incorrect!', () => {

    expect(turn.giveFeedback()).to.deep.equal('incorrect!')
  })

  it.skip('giveFeedback should be a method that can return a string of correct!', () => {

    expect(turn.giveFeedback()).to.deep.equal('correct!')
  })
  
  })

