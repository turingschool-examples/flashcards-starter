const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let guess;
let card;
let turn;

describe('Turn', () => {

  beforeEach('setup', () => {
    console.log('checking')
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn(guess, card);
    turn2 = new Turn('sea otter', card);
    turn3 = new Turn('pug', card);
  })

  it('should be a function', () => {

     expect(Turn).to.be.a('function')
  })

  it('should instantiate turn', () => {

    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should store a users guess and card', () => {
 
    expect(turn2.guess).to.equal('sea otter')
    expect(turn2.card).to.deep.equal({
      'id': 1,
      'question': 'What is Robbie\'s favorite animal',
      'answers': ['sea otter', 'pug', 'capybara'],
      'correctAnswer': 'sea otter'
    })
  })

  it('should have a return guess method that returns guess', () => {
   
    expect(turn.returnGuess()).to.deep.equal(turn.guess)
  })

  it('should have a return card method to return instance of card', () => {
   
    expect(turn.returnCard()).to.deep.equal(turn.card)
  })

  it('should have a method that returns a boolean indicating if the users guess matches the correct answer on the card', () => {
   
    expect(turn2.evaluateGuess()).to.deep.equal(true)
  })

  it('should have a method that returns a boolean indicating if the users guess matches the correct answer on the card', () => {
    
    expect(turn3.evaluateGuess()).to.deep.equal(false)
  })

  it('giveFeedback should be a method that can return a string of incorrect! if guess is incorrect', () => {

    expect(turn3.giveFeedback()).to.deep.equal('incorrect!')
  })

  it('giveFeedback should be a method that can return a string of correct!', () => {

    expect(turn2.giveFeedback()).to.deep.equal('correct!')
  })
  
  })

