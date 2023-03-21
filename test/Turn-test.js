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

  it('should have a return guess method', () => {
    
  })
 
  })

