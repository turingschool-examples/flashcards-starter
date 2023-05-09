const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck')
const { createRound } = require('../src/round');

describe('createRound', function() {
  it('should be a function', function(){
    expect(createDeck).to.be.a('function')
  })
  it('should create a round object with a corresponding deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    const deck = createDeck([card1, card2, card3])
    const round = createRound(deck);
    expect(round.deck).to.be.deep.equal([card1, card2, card3])
  })
})