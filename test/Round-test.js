const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')




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

})