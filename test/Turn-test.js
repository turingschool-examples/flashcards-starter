/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function () {
    const turn = new Turn() 
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should instantiate users\'s guess and card', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.be.a('string')
    expect(turn.currentCard).to.equal(card)
  })

  it('should return a guess', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug')
  })


  it('should return a card', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.equal(card)
  })
  
  it('should evaluate the guess to true or false', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('pug', card);   

    expect(turn.evaluateGuess()).to.be.false
  
    turn = new Turn('sea otter', card);   
  
    expect(turn.evaluateGuess()).to.be.true
  })
})