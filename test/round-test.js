const chai = require('chai');
const expect = chai.expect;

const { endRound, createRound, calculatePercentCorrect } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');

describe('create round', function() {
  it('should be a function', function (){
    expect(createRound).to.be.a('function')
  })
  it('should be able to create a round', function(){
   const card1 = createCard(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = createCard(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
   const deck = createDeck([card1, card2, card3]);
 
   const round = createRound(deck);
 
   expect(round.deck).to.deep.equal([card1, card2, card3])
   expect(round.currentCard).to.deep.equal({
     id: 1,
     question: 'What is Robbie\'s favorite animal',
     answers: ['sea otter', 'pug', 'capybara'],
     correctAnswer: 'sea otter'
   })
   expect(round.turns).to.equal(0)
   expect(round.incorrectGuesses).to.deep.equal([])
  })
 })

describe('calculate percent correct', function() {
  it('should be a function', function (){
    expect(calculatePercentCorrect).to.be.a('function')
  })
  it('should return 50', function() {
    const round = {
      turns: 2,
      incorrectGuesses: [14],
    }
    expect(calculatePercentCorrect(round)).to.equal(50)
  })
})

describe('end round', function() {
  it('should be a function', function (){
    expect(endRound).to.be.a('function')
  })
  it('should end the round', function() {
    var round = {
      deck: [1,2,3],
      turns: 3,
      incorrectGuesses: [14],
    }
    expect(endRound(round)).to.equal(
      `** Round over! ** You answered 67% of the questions correctly!`)
  })
})
