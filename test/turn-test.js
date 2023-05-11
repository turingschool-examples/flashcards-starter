const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess, takeTurn } = require('../src/turn');
const { createRound } = require('../src/round')
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');


describe('take turn', function() {
  it('should be a function', function (){
    expect(takeTurn).to.be.a('function')
  })
  it('should be able to take a turn', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);
    const turn1 = takeTurn('sea otter', round)
    expect(turn1).to.equal('correct!')
    const turn2 = takeTurn('spleen', round)
    expect(turn2).to.equal('incorrect!')
    expect(round.turns).to.equal(2)
    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.currentCard).to.deep.equal({
      id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'
    })
  })
  
})

describe('evaluate guess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function')
  })
  it('should return correct!', function() {
    const result = evaluateGuess("object", "object")
  
    expect(result).to.equal('correct!')
  })
  it('should return incorrect!', function() {
    const result = evaluateGuess("array", "object")
  
    expect(result).to.equal('incorrect!')
  })
})