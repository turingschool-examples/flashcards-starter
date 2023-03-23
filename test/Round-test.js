const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Round', function() {
  let deck
  let round
  let card1,card2,card3
  this.beforeEach(function() {
   card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
   card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
   deck = new Deck([card1, card2, card3]);
   round = new Round(deck);
  
  })
 
  
it('should be a function', function() {
    expect(Round).to.be.a("function")
})

it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round)
   })

it('should store a deck', function() {
  expect(round.deck).to.equal(deck.cards)
   })

it('should store the turns', function() {
  expect(round.turns).to.equal(0)
   })

it('should store incorrect answers', function() {
  expect(round.incorrectGuesses).to.deep.equal([])
   })

it('should return the current card', function() {
  expect(round.returnCurrentCard()).to.be.an('object')
  })

it('should have the first card as the current card', function() {
  expect(round.currentCard).to.deep.equal(card1)
})

it('should return the current card', function() {
  expect(round.returnCurrentCard()).to.deep.equal(card1)
  })

it('should increase turn count', function() {
  round.takeTurn('sea otter')
  expect(round.turns).to.equal(1)
  round.takeTurn('sea otter')
  expect(round.turns).to.equal(2)
 })

 it('should change current card to the next card', function() {
  expect(round.currentCardIndex).to.equal(0)
  expect(round.currentCard).to.equal(card1)
  round.takeTurn('sea otter')
  expect(round.currentCardIndex).to.equal(1)
  expect(round.currentCard).to.equal(card2)
 })

 it('should evaluate the guess and give feedback', function() {
  expect(round.takeTurn('sea otter')).to.equal('correct!')
  expect(round.takeTurn('capybara')).to.equal('incorrect!')
})

it('should store ids of the incorrect guesses', function() {
  round.takeTurn('pug')
  expect(round.incorrectGuesses).to.deep.equal([1])
  round.takeTurn('capybara')
  expect(round.incorrectGuesses).to.deep.equal([1, 14])
  })

    it('should calculate the percentage of correct guesses', function() {
      round.takeTurn('sea otter')
      round.takeTurn('pug')
      round.takeTurn('capybara')
      expect(round.calculatePercentCorrect()).to.equal(33)
      round.takeTurn('sea otter')
      round.takeTurn('gallbladder')
      expect(round.calculatePercentCorrect()).to.equal(20)
      round.takeTurn('listening to music')
      expect(round.calculatePercentCorrect()).to.equal(16)
  })

    it('should print the percentage of correct guesses', function() {
      round.takeTurn('sea otter')
      round.takeTurn('pug')
      round.takeTurn('capybara')
      expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
})
})