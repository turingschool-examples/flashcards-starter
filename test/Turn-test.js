/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', () => {
    const turn = new Turn() 
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should instantiate users\'s guess and card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.be.a('string')
    expect(turn.currentCard).to.equal(card)
  })

  it('should return a guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug')
  })


  it('should return a card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.equal(card)
  })
  
  it('should evaluate the guess to true or false', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('pug', card);   

    expect(turn.evaluateGuess()).to.be.false
  
    turn = new Turn('sea otter', card);   
  
    expect(turn.evaluateGuess()).to.be.true
  })

  it('should return a verification based on guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('pug', card);   

    expect(turn.giveFeedBack()).to.equal('incorrect!')

    turn = new Turn('sea otter', card);   
  
    expect(turn.giveFeedBack()).to.equal('correct!')
  })
})